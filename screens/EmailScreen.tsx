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
import { DUMMY_EMAILS } from "../testData/DUMMY_EMAILS";
import { useIsFocused } from "@react-navigation/native";

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
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailScreen = ({ route, navigation }: Props) => {
  const [emailInfo, setEmailInfo] = useState({} as emailState);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();

  let imagesDisplay;

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

  /**
   * Handle an image being pressed.
   *
   * Bring up the Image Screen modal to show the image larger for the user to get
   * a better look.
   *
   * @param {string} image - String to display the image larger on the modal
   */
  const imagePressHandler = (image: string) => {
    navigation.navigate("Image", {
      image: image,
    });
  };

  const acceptHandler = () => {
    navigation.navigate("Reply");
  };

  const rejectHandler = () => {
    navigation.navigate("Reply");
  };

  if (!isLoading) {
    /**
     * Map each image to an Image component.
     *
     * Create a unique key for each image and display the image in a reasonable format.
     * TODO: Find a better way to create a unique key
     */
    imagesDisplay = emailInfo.images.map((image) => {
      const key = emailInfo.id + Math.random();
      return (
        <Pressable key={key} onPress={imagePressHandler.bind(this, image)}>
          <Image style={styles.image} source={{ uri: image }} />
        </Pressable>
      );
    });
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.emailInfoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleName}>{emailInfo.name} - </Text>
          <Text style={styles.titleEmail}>{emailInfo.email}</Text>
        </View>
        <ScrollView>
          <View style={styles.innerEmailContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Description</Text>
              <Text style={styles.info}>{emailInfo.description}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Size</Text>
              <Text style={styles.info}>{emailInfo.size}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Placement</Text>
              <Text style={styles.info}>{emailInfo.placement}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Budget</Text>
              <Text style={styles.info}>${emailInfo.budget}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Other Info</Text>
              <Text style={styles.info}>{emailInfo.other1}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Other Info 2</Text>
              <Text style={styles.info}>{emailInfo.other2}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Images</Text>
              {imagesDisplay}
            </View>
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
  titleContainer: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
  },
  titleName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleEmail: {
    fontSize: 20,
  },
  emailInfoContainer: {
    flex: 3,
    // margin: 8,
    padding: 8,
    justifyContent: "space-around",
    alignItems: "flex-start",
    // flexDirection: "row",
    backgroundColor: GlobalStyles.colors.background500,
  },
  innerEmailContainer: {
    flexDirection: "column",
  },
  parameter: {
    color: GlobalStyles.colors.primary500,
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 4,
    textDecorationLine: "underline",
  },
  infoContainer: {
    backgroundColor: GlobalStyles.colors.background300,
    marginVertical: 4,
  },
  info: {
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
    margin: 4,
    paddingLeft: 24,
    paddingBottom: 8,
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
    backgroundColor: GlobalStyles.colors.accept,
  },
  acceptText: {
    color: "black",
    fontWeight: "bold",
  },
  rejectButton: {
    backgroundColor: GlobalStyles.colors.reject,
  },
  rejectText: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginVertical: 8,
  },
});
