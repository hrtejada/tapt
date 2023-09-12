import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import EmailButtons from "../components/ui/EmailInfo/EmailButtons";
import ImageParameter from "../components/ui/EmailInfo/ImageParameter";
import SenderInfo from "../components/ui/EmailInfo/SenderInfo";
import TextParameter from "../components/ui/EmailInfo/TextParameter";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { GlobalStyles } from "../constants/styles";
import { DUMMY_EMAILS } from "../testData/DUMMY_DATA";

type emailState = {
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
};

type Props = {
  route: any;
  navigation: any;
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
 * @version 0.2.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailScreen = ({ route, navigation }: Props) => {
  const [emailInfo, setEmailInfo] = useState({} as emailState);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    setIsLoading(true);
    // FETCH ONE EMAIL AT A TIME???
    if (DUMMY_EMAILS.length !== 0) {
      setEmailInfo((prevEmail) => {
        if (route.params.email === "next") {
          console.log(DUMMY_EMAILS[0]);
          return DUMMY_EMAILS[0];
        } else if (route.params.email === "new") {
          return DUMMY_EMAILS[0];
        } else {
          return prevEmail;
        }
      });
    } else {
      navigation.pop();
    }
    setIsLoading(false);
  }, [setEmailInfo, setIsLoading, isFocused]);

  const acceptHandler = () => {
    navigation.navigate("Reply");
  };

  const rejectHandler = () => {
    navigation.navigate("Reply");
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
      <EmailButtons onAccept={acceptHandler} onReject={rejectHandler} />
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
  },
});
