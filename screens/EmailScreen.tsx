import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import EmailButtons from "../components/EmailInfo/EmailButtons";
import ImageParameter from "../components/EmailInfo/ImageParameter";
import SenderInfo from "../components/EmailInfo/SenderInfo";
import TextParameter from "../components/EmailInfo/TextParameter";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { GlobalStyles } from "../constants/styles";
import { DUMMY_EMAILS } from "../testData/DUMMY_DATA";
import { EmailStackProps } from "../util/react-navigation";
import { ACCEPT, REJECT } from "../constants/words";

interface emailState {
  id: string;
  name: string;
  email: string;
  description: string;
  size: string;
  placement: string;
  budget: number;
  images: string[];
  other1: string;
  other2: string;
}

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
 *
 * TODO: Look into handling "'route.params' being undefined" properly
 *
 * @version 0.2.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailScreen = ({ route, navigation }: EmailStackProps) => {
  const [emailInfo, setEmailInfo] = useState({} as emailState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // FETCH ONE EMAIL AT A TIME???
    if (DUMMY_EMAILS.length !== 0) {
      setEmailInfo((prevEmail) => {
        if (route.params?.action === "next") {
          console.log(DUMMY_EMAILS[0]);
          return DUMMY_EMAILS[0];
        } else if (route.params?.action === "new") {
          return DUMMY_EMAILS[0];
        } else if (route.params?.action === "ranked") {
          const index = DUMMY_EMAILS.findIndex(
            (dummyEmail) => dummyEmail.id === route.params?.id
          );
          return DUMMY_EMAILS[index];
        } else {
          return prevEmail;
        }
      });
    } else {
      navigation.pop();
    }
    setIsLoading(false);
  }, [setEmailInfo, setIsLoading]);

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

  return (
    <View style={styles.rootContainer}>
      <View style={styles.emailInfoContainer}>
        <View style={styles.senderContainer}>
          <SenderInfo name={emailInfo.name} email={emailInfo.email} />
        </View>
        <ScrollView>
          <TextParameter parameter="Description" info={emailInfo.description} />
          <TextParameter parameter="Size" info={emailInfo.size} />
          <TextParameter parameter="Placement" info={emailInfo.placement} />
          <TextParameter parameter="Budget" info={`$${emailInfo.budget}`} />
          <TextParameter parameter="Other Info" info={emailInfo.other1} />
          <TextParameter parameter="Other Info 2" info={emailInfo.other2} />
          <ImageParameter
            id={emailInfo.id}
            parameter="Images"
            images={emailInfo.images}
          />
        </ScrollView>
      </View>
      <View style={styles.buttonsContainer}>
        <EmailButtons onAccept={acceptHandler} onReject={rejectHandler} />
      </View>
    </View>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  emailInfoContainer: {
    flex: 3,
    justifyContent: "space-evenly",
    backgroundColor: GlobalStyles.colors.accent500,
  },
  senderContainer: {
    backgroundColor: GlobalStyles.colors.primary600,
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.accent900,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonsContainer: {
    flex: 1,
  },
});
