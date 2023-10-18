import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import EmailButtons from "../components/Emails/EmailButtons";
import ImageParameter from "../components/Emails/ImageParameter";
import SenderInfo from "../components/Emails/SenderInfo";
import TextParameter from "../components/Emails/TextParameter";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { GlobalStyles } from "../constants/styles";
import { DUMMY_EMAILS } from "../testData/DUMMY_DATA";
import { EmailStackProps } from "../util/react-navigation";
import { ACCEPT, REJECT } from "../constants/words";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
 * TODO: Need to handle parameters dynamically
 * TODO: Check for images by
 * - Option 1: Have check box on settings for user to specify
 * - Option 2: Have a master string array of synonyms for Images and check param name against it
 * - Option 3: Check param value for "https://" & image extension to see if value is an image
 *
 * TODO: Look into handling "'route.params' being undefined" properly
 *
 * @version 0.2.3
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailScreen = ({ route, navigation }: EmailStackProps) => {
  const insets = useSafeAreaInsets();
  // TODO: Figure out how to dynamically set the useState type!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const [emailInfo, setEmailInfo] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // FETCH ONE EMAIL AT A TIME???
    const fetchEmail = () => {
      let email;
      if (DUMMY_EMAILS.length !== 0) {
        email = DUMMY_EMAILS[0];
      } else {
        email = null;
      }
      type Email = typeof email;

      if (email === null) {
        setEmailInfo("");
        return;
      }

      switch (route.params?.action) {
        case "next":
          setEmailInfo(email);
        case "new":
          setEmailInfo(email);
        case "ranked":
          break;
        default:
          navigation.pop();
          break;
      }
    };

    fetchEmail();
    setIsLoading(false);
  }, [setEmailInfo, setIsLoading, navigation, route.params?.action]);

  /**
   * Navigate to the Reply - Accept template
   */
  const acceptHandler = () => {
    navigation.navigate("Reply", { mode: ACCEPT });
  };

  /**
   * Navigate to the Reply - Reject template
   */
  const rejectHandler = () => {
    navigation.navigate("Reply", { mode: REJECT });
  };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  const renderParameters = () => {
    const display = [];

    for (const property in emailInfo) {
      const value = emailInfo[property];

      // TODO: Work on ImageParameter
      if (/^(https?:\/\/).*(.jpg).*/.test(value)) {
        console.log("IMAGES");
        console.log(`${property}: ${value}`);
        display.push(
          <ImageParameter
            key={emailInfo.id + property}
            id={emailInfo.id}
            parameter={property}
            images={value}
          />
        );
      } else {
        if (property === "id" || property === "name" || property === "email") {
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
        },
      ]}
    >
      <View style={styles.emailInfoContainer}>
        <SenderInfo name={emailInfo.name} email={emailInfo.email} />
        <ScrollView>
          {/* <TextParameter parameter="Description" info={emailInfo.description} />
          <TextParameter parameter="Size" info={emailInfo.size} />
          <TextParameter parameter="Placement" info={emailInfo.placement} />
          <TextParameter parameter="Budget" info={`$${emailInfo.budget}`} />
          <TextParameter parameter="Other Info" info={emailInfo.other1} />
          <TextParameter parameter="Other Info 2" info={emailInfo.other2} />
          <ImageParameter
            id={emailInfo.id}
            parameter="Images"
            images={emailInfo.images}
          /> */}
          {renderParameters()}
        </ScrollView>
      </View>
      <EmailButtons onAccept={acceptHandler} onReject={rejectHandler} />
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
    flex: 3,
    justifyContent: "space-evenly",
    backgroundColor: GlobalStyles.colors.secondary700,
  },

  buttonsContainer: {
    flex: 1,
  },
});
