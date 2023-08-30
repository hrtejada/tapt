import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GlobalStyles } from "../constants/styles";

const DUMMY_EMAIL_SCREEN = {
  id: "e1",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia unde assumenda ad eveniet impedit molestiae repellat natus harum porro, fugit cumque iste molestias, tempore sed labore ipsa expedita saepe facere.",
  size: "3x4",
  placement: "Right forearm",
  budget: 400,
  images: [
    "https://media.istockphoto.com/id/1367685099/vector/red-poppy-flower-hand-drawn-illustration-vintage-and-antique-flowers-red-field-poppy-flower.jpg?s=612x612&w=0&k=20&c=lqsQbq6ZVAjhMLxX_nkdzaLMkJGuLZShBVoNOgrUY9M=",
    "https://i.redd.it/agmpul8a1lf11.jpg",
  ],
  other1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia.",
  other2: "Lorem ipsum, dolor sit amet consectetur.",
};

const EmailScreen = () => {
  const imagesDisplay = DUMMY_EMAIL_SCREEN.images.map((image) => {
    const key = DUMMY_EMAIL_SCREEN.id + Math.random();
    return <Image key={key} style={styles.image} source={{ uri: image }} />;
  });

  return (
    <View style={styles.rootContainer}>
      <View style={styles.emailInfoContainer}>
        <ScrollView>
          <View style={styles.innerEmailContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Description</Text>
              <Text style={styles.info}>{DUMMY_EMAIL_SCREEN.description}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Size</Text>
              <Text style={styles.info}>{DUMMY_EMAIL_SCREEN.size}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Placement</Text>
              <Text style={styles.info}>{DUMMY_EMAIL_SCREEN.placement}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Budget</Text>
              <Text style={styles.info}>${DUMMY_EMAIL_SCREEN.budget}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Other Info</Text>
              <Text style={styles.info}>{DUMMY_EMAIL_SCREEN.other1}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.parameter}>Other Info 2</Text>
              <Text style={styles.info}>{DUMMY_EMAIL_SCREEN.other2}</Text>
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
  emailInfoContainer: {
    flex: 3,
    // margin: 8,
    padding: 8,
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "row",
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
    height: 200,
    resizeMode: "contain",
    marginVertical: 8,
  },
});
