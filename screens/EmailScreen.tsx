import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import EmailButtons from "../components/Emails/EmailButtons";
import ImageParameter from "../components/Emails/ImageParameter";
import SenderInfo from "../components/Emails/SenderInfo";
import TextParameter from "../components/Emails/TextParameter";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { GlobalStyles } from "../constants/styles";
import { DUMMY_EMAILS, RANKED_EMAILS } from "../testData/DUMMY_DATA";
import { EmailStackProps } from "../util/react-navigation";
import { EMAIL_ACTIONS, RANKED_ACTION_TYPES } from "../constants/words";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUserContext } from "../store/user-context";
import { useRankedContext } from "../store/ranked-context";

type emailDynamic = {
  id: string;
  email: string;
  name: string;
  images: string[];
} & {
  [key: string]: string;
};

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
 *
 * @version 0.2.6
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailScreen = ({ route, navigation }: EmailStackProps) => {
  const insets = useSafeAreaInsets();
  const { state: userState } = useUserContext();
  const { state: rankedState, dispatch: rankedDispatch } = useRankedContext();

  // TODO: Figure out how to dynamically set the useState type!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const [emailInfo, setEmailInfo] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  // const [rank, setRank] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    // FETCH ONE EMAIL AT A TIME???
    const fetchEmail = () => {
      switch (route.params?.action) {
        case "next":
        case "new":
          if (userState.unreadCount === 0) {
            navigation.pop();
          }
          // Use User defined parameters to build the API call to retrieve certain data from email messages
          /*
           * id
           * name
           * email
           * UserParams
           */
          let email = { id: "", name: "", email: "" };
          if (DUMMY_EMAILS.length !== 0) {
            const message: any = DUMMY_EMAILS[0];
            // console.log("-------------------------------------------------");
            // console.log(message);
            email.id = message.id;
            email.name = message.name;
            email.email = message.email;
            userState.parameters.map((param: string) => {
              // TODO: Figure out how to dynamically set the message type!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              // console.log(param);
              // console.log(message[param]);
              const value = message[param];
              email = {
                ...email,
                [param]: value,
              };
            });
          } else {
            // DO SOMETHING????
            // email = {};
          }
          type Email = typeof email;

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
          console.log("INSIDE EMAIL SCREEN", rankedEmail);

          rankedEmail.id = currentEmail.id;
          rankedEmail.name = currentEmail.name;
          rankedEmail.email = currentEmail.email;
          rankedEmail.rank = currentEmail.rank;

          userState.parameters.map((param: string) => {
            // TODO: Figure out how to dynamically set the message type!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // console.log(param);
            // console.log(message[param]);
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
  ]);

  /**
   * Navigate to the Reply - Accept template
   */
  const acceptHandler = () => {
    if (emailInfo.hasOwnProperty("rank")) {
      navigation.navigate("Reply", {
        mode: EMAIL_ACTIONS.RANKED_ACCEPT,
        messageId: emailInfo.id,
      });
    } else {
      navigation.navigate("Reply", { mode: EMAIL_ACTIONS.ACCEPT });
    }
  };

  /**
   * Navigate to the Reply - Reject template
   */
  const rejectHandler = () => {
    navigation.navigate("Reply", { mode: EMAIL_ACTIONS.REJECT });
  };

  /**
   * Navigate to the Queue
   *
   * TODO: See about passing data a 'better' way
   */
  const queueHandler = () => {
    navigation.navigate("Queue", {
      name: emailInfo.name,
      email: emailInfo.email,
      rank: rankedState.tempRank,
      messageId: emailInfo.id,
    });
  };

  // const rankHandler = (value: number) => {
  //   // setRank(value);
  //   rankedDispatch({ type: RANKED_ACTION_TYPES.TEMP_RANK, payload: value });
  // };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  const renderParameters = () => {
    const display = [];

    for (const property in emailInfo) {
      const value = emailInfo[property];

      // TODO: Work on ImageParameter
      if (/^(https?:\/\/).*(.jpg).*/.test(value)) {
        display.push(
          <ImageParameter
            key={emailInfo.id + property}
            id={emailInfo.id}
            parameter={property}
            images={value}
          />
        );
      } else {
        if (
          property === "id" ||
          property === "name" ||
          property === "email" ||
          property === "rank"
        ) {
          continue;
        }
        display.push(
          <TextParameter
            key={emailInfo.id + property}
            parameter={property}
            info={value}
          />
        );
      }
    }

    return display;
  };

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          flexDirection: "column",
        },
      ]}
    >
      <View style={styles.emailInfoContainer}>
        <SenderInfo name={emailInfo.name} email={emailInfo.email} />
        <ScrollView>{renderParameters()}</ScrollView>
      </View>
      <EmailButtons
        onAccept={acceptHandler}
        onReject={rejectHandler}
        onQueue={queueHandler}
        ranked={emailInfo.hasOwnProperty("rank")}
      />
    </View>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  emailInfoContainer: {
    flex: 4,
    backgroundColor: GlobalStyles.colors.secondary700,
  },
});
