import { useEffect, useState } from "react";
import { Alert, FlatList, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EmailButtons from "../components/Emails/EmailButtons";
import ImageParameter from "../components/Emails/ImageParameter";
import SenderInfo from "../components/Emails/SenderInfo";
import TextParameter from "../components/Emails/TextParameter";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { GlobalStyles } from "../constants/styles";
import { EMAIL_ACTIONS, RANKED_ACTION_TYPES } from "../constants/words";
import { useRankedContext } from "../store/ranked-context";
import { useUserContext } from "../store/user-context";
import { DUMMY_EMAILS, RANKED_EMAILS } from "../testData/DUMMY_DATA";
import { EmailStackProps } from "../util/react-navigation";

type emailDynamic = {
  id: string;
  email: string;
  name: string;
  images: string[];
} & {
  [key: string]: string;
};

interface ImageItem {
  type: "image";
  id: string;
  parameter: string;
  images: string[];
}
interface TextItem {
  type: "text";
  parameter: string;
  info: string;
}

type ListItem = ImageItem | TextItem;

/**
 * Component that will display the parsed email information.
 *
 * TODO: Handle coming back from Reply screen to serve up a new email
 * NOTE: Have a temp solution somewhat working for test data;  When retrieving data from API, we will
 *        need to rework
 *
 * TODO: Should we display this modal if there are no new emails OR just disable the button on HOME?
 *
 * TODO: Check for images by
 * - Option 1: Have check box on settings for user to specify
 * - Option 2: Have a master string array of synonyms for Images and check param name against it
 * - Option 3: Check param value for "https://" & image extension to see if value is an image
 *
 * TODO: Once we figure out how Gmail attachments are retrieved we can determine how to check for them and how to figure out typing
 * TODO: Look into handling "'route.params' being undefined" properly
 * TODO: For TEST DATA, find out why when going through 2 or more emails, somethimes the email stays after sending answer
 * TODO: See if component needs to be broken up into smaller parts
 * TODO: Styling: The bottom padding for the FlatList so the list won't be obstructed by EmailButtons; Has to be a better way to calculate how much padding is necessary
 *
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailScreen = ({ route, navigation }: EmailStackProps) => {
  const insets = useSafeAreaInsets();
  const { state: userState } = useUserContext();
  const { state: rankedState, dispatch: rankedDispatch } = useRankedContext();

  // TODO: Figure out how to dynamically set the useState type!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const [emailInfo, setEmailInfo] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  // Used to fix reloading issue when coming from Reply|Queue screen more than once
  const [replyTrigger, setReplyTrigger] = useState(0);
  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      setReplyTrigger((prev) => prev + 1);
    });
    return focusHandler;
  }, [navigation]);

  useEffect(() => {
    setIsLoading(true);
    // FETCH ONE EMAIL AT A TIME???
    const fetchEmail = () => {
      switch (route.params?.action) {
        case "next":
        case "new":
          // TODO: See if this is needed
          if (userState.unreadCount === 0) {
            navigation.navigate("Home");
          }
          // Use User defined parameters to build the API call to retrieve certain data from email messages
          let email = { id: "", name: "", email: "" };
          if (DUMMY_EMAILS.length !== 0) {
            const message: any = DUMMY_EMAILS[0];
            email.id = message.id;
            email.name = message.name;
            email.email = message.email;
            userState.parameters.map((param: string) => {
              // TODO: Figure out how to dynamically set the message type!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              const value = message[param];
              email = {
                ...email,
                [param]: value,
              };
            });
          } else {
            navigation.navigate("Home");
          }

          type Email = typeof email; // TODO: Remember what this is for

          if (email === null) {
            setEmailInfo("");
            return;
          }

          rankedDispatch({ type: RANKED_ACTION_TYPES.TEMP_RANK, payload: 0 });
          setEmailInfo(email);
          break;
        case "ranked":
          // TODO: Handle coming from Ranked Queue for testing
          // TODO: Extract the parameter checking stuff
          const messageId = route.params?.id;
          let rankedEmail = { id: "", name: "", email: "", rank: 0 };
          const currentEmail: any =
            RANKED_EMAILS[
              RANKED_EMAILS.findIndex((email) => email.id === messageId)
            ];

          rankedEmail.id = currentEmail.id;
          rankedEmail.name = currentEmail.name;
          rankedEmail.email = currentEmail.email;
          rankedEmail.rank = currentEmail.rank;

          userState.parameters.map((param: string) => {
            // TODO: Figure out how to dynamically set the message type!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            const value = currentEmail[param];
            rankedEmail = {
              ...rankedEmail,
              [param]: value,
            };
          });

          rankedDispatch({
            type: RANKED_ACTION_TYPES.TEMP_RANK,
            payload: rankedEmail.rank,
          });
          setEmailInfo(rankedEmail);
          break;
        default:
          navigation.pop();
          break;
      }
    };

    fetchEmail();
    setIsLoading(false);
  }, [
    setEmailInfo,
    setIsLoading,
    navigation,
    route.params?.action,
    route.params?.id,
    replyTrigger,
  ]);

  /**
   * Navigate to the Reply - Accept template
   */
  const handleAccept = () => {
    if (emailInfo.hasOwnProperty("rank")) {
      navigation.navigate("Reply", {
        mode: EMAIL_ACTIONS.RANKED_ACCEPT,
        messageId: emailInfo.id,
      });
    } else {
      navigation.navigate("Reply", {
        mode: EMAIL_ACTIONS.ACCEPT,
      });
    }
  };

  /**
   * Navigate to the Reply - Reject template
   */
  const handleReject = () => {
    if (emailInfo.hasOwnProperty("rank")) {
      navigation.navigate("Reply", {
        mode: EMAIL_ACTIONS.RANKED_REJECT,
        messageId: emailInfo.id,
      });
    } else {
      navigation.navigate("Reply", { mode: EMAIL_ACTIONS.REJECT });
    }
  };

  /**
   * Navigate to the Queue
   *
   * TODO: See about passing data a 'better' way
   */
  const handleQueue = () => {
    navigation.navigate("Queue", {
      name: emailInfo.name,
      email: emailInfo.email,
      rank: rankedState.tempRank,
      messageId: emailInfo.id,
    });
  };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  /**
   * Function to render parameter items.
   *
   * This function takes the emailInfo data and create the corresponding
   * component.
   */
  const renderItem = ({ item }: { item: ListItem }) => {
    switch (item.type) {
      case "image":
        return (
          <ImageParameter
            id={item.id}
            parameter={item.parameter}
            images={item.images}
          />
        );
      case "text":
        return <TextParameter parameter={item.parameter} info={item.info} />;
      default:
        return null;
    }
  };

  /**
   * Function to create data array from emailInfo.
   *
   * Thie functions helps to restructure emailInfo into a better format
   * for FlatList rendering.
   */
  const createDataArrayFromEmailInfo = (
    emailInfo: emailDynamic
  ): ListItem[] => {
    const items: ListItem[] = [];

    // Add text or image items
    for (const property in emailInfo) {
      if (emailInfo.hasOwnProperty(property)) {
        const value = emailInfo[property];

        // Check if the property is an image
        if (/^(https?:\/\/).*(.jpg).*/.test(value)) {
          const imageUrls = Array.isArray(value) ? value : [value];
          items.push({
            type: "image",
            id: emailInfo.id,
            parameter: property,
            images: imageUrls,
          });
        } else if (
          property !== "id" &&
          property !== "name" &&
          property !== "email" &&
          property !== "rank"
        ) {
          items.push({
            type: "text",
            parameter: property,
            info: value,
          });
        }
      }
    }

    return items;
  };

  const keyExtractor = (item: ListItem, index: number) => {
    return item.type === "image"
      ? `image-${item.id}-${index}`
      : `text-${index}`;
  };

  const data = createDataArrayFromEmailInfo(emailInfo);

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <SenderInfo name={emailInfo.name} email={emailInfo.email} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ paddingBottom: 180 }}
      />
      <View
        style={[
          styles.buttonsContainer,
          {
            left: insets.left,
            right: insets.right,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <EmailButtons
          onAccept={handleAccept}
          onReject={handleReject}
          onQueue={handleQueue}
          ranked={emailInfo.hasOwnProperty("rank")}
        />
      </View>
    </View>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: GlobalStyles.colors.secondary700,
    height: 215,
    justifyContent: "center",
  },
});
