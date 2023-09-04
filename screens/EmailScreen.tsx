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

const DUMMY_EMAIL_SCREEN = [
  {
    id: "e1",
    email: "test@test.com",
    name: "Testy Tester",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia unde assumenda ad eveniet impedit molestiae repellat natus harum porro, fugit cumque iste molestias, tempore sed labore ipsa expedita saepe facere.",
    size: "3x4",
    placement: "Right forearm",
    budget: 400,
    images: [
      "https://media.istockphoto.com/id/1367685099/vector/red-poppy-flower-hand-drawn-illustration-vintage-and-antique-flowers-red-field-poppy-flower.jpg?s=612x612&w=0&k=20&c=lqsQbq6ZVAjhMLxX_nkdzaLMkJGuLZShBVoNOgrUY9M=",
      "https://i.redd.it/agmpul8a1lf11.jpg",
    ],
    other1:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia.",
    other2: "Lorem ipsum, dolor sit amet consectetur.",
  },
  {
    id: "e2",
    email: "luffy@test.com",
    name: "Monkey D",
    description: "I decided to be Pirate King. I don’t care if I die for it.",
    size: "5X8",
    placement: "Upper Back",
    budget: 650,
    images: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fb-a-i-o-r-e-t-t-o%2Fart%2FMonkey-D-Luffy-Gear-5-UPDATED-912797420&psig=AOvVaw0-VFae5qHwXbD9RKoJJS3X&ust=1693617672698000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjt4M-fiIEDFQAAAAAdAAAAABAE",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cbr.com%2Fone-piece-luffy-gear-5-laugh-meaning%2F&psig=AOvVaw0-VFae5qHwXbD9RKoJJS3X&ust=1693617672698000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjt4M-fiIEDFQAAAAAdAAAAABAT",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbubble.com%2Fi%2Fsticker%2FGear-5-Monkey-D-luffy-by-SevenYero%2F141676301.EJUG5&psig=AOvVaw0-VFae5qHwXbD9RKoJJS3X&ust=1693617672698000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjt4M-fiIEDFQAAAAAdAAAAABAd",
    ],
    other1: "Zoro is a chad",
    other2: "Usopp is a punk bitch",
  },
];

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

/**
 * Component that will display the parsed email information.
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailScreen = ({ navigation }: { navigation: any }) => {
  const [emailInfo, setEmailInfo] = useState({} as emailState);
  const [isLoading, setIsLoading] = useState(true);

  let imagesDisplay;

  useEffect(() => {
    setIsLoading(true);
    // FETCH ONE EMAIL AT A TIME???
    if (DUMMY_EMAIL_SCREEN.length !== 0) {
      setEmailInfo(DUMMY_EMAIL_SCREEN.shift()!);
    }
    setIsLoading(false);
  }, [setEmailInfo, setIsLoading]);

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
        <View style={[styles.card, styles.accept]}>
          <Text style={styles.cardText}>Accept Button</Text>
        </View>
        <View style={[styles.card, styles.reject]}>
          <Text style={styles.cardText}>Reject Button</Text>
        </View>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary300,
    borderWidth: 2,
    borderTopColor: GlobalStyles.colors.accent700,
  },
  card: {
    borderRadius: 8,
    elevation: 8,
    shadowColor: GlobalStyles.colors.accent500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    padding: 24,
    margin: 8,
  },
  cardText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  accept: {
    color: "black",
    backgroundColor: GlobalStyles.colors.accept,
  },
  reject: {
    color: "black",
    backgroundColor: GlobalStyles.colors.reject,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginVertical: 8,
  },
});
