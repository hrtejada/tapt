import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useEffect, useLayoutEffect, useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import Button from "../components/ui/Button";
import { DUMMY_EMAILS } from "../testData/DUMMY_DATA";
import { useIsFocused } from "@react-navigation/native";
import SenderInfo from "../components/ui/EmailInfo/SenderInfo";
import TextParameter from "../components/ui/EmailInfo/TextParameter";
import ImageParameter from "../components/ui/EmailInfo/ImageParameter";

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
 * @version 0.2.0
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
        <SenderInfo name={emailInfo.name} email={emailInfo.email} />
        <ScrollView>
          <View style={styles.innerEmailContainer}>
            <TextParameter
              parameter="Description"
              info={emailInfo.description}
            />
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
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          buttonStyle={styles.acceptButton}
          textStyle={styles.acceptText}
          onPress={acceptHandler}
        >
          Accept
        </Button>
        <Button
          buttonStyle={styles.rejectButton}
          textStyle={styles.rejectText}
          onPress={rejectHandler}
        >
          Reject
        </Button>
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
    padding: 8,
    justifyContent: "space-around",
    backgroundColor: GlobalStyles.colors.background200,
  },
  innerEmailContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary300,
    borderWidth: 2,
    borderTopColor: GlobalStyles.colors.accent700,
  },
  acceptButton: {
    backgroundColor: GlobalStyles.colors.secondary700,
  },
  acceptText: {
    color: "black",
    fontWeight: "bold",
  },
  rejectButton: {
    backgroundColor: GlobalStyles.colors.primary700,
  },
  rejectText: {
    fontWeight: "bold",
  },
});
