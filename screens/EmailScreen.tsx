import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const EmailScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.emailInfoContainer}>
        <View style={styles.innerEmailContainer}>
          <Text style={styles.text}>Tattoo Description</Text>
          <Text style={styles.text}>Tattoo Size</Text>
          <Text style={styles.text}>Tattoo Placement</Text>
          <Text style={styles.text}>EmailScreen</Text>
          <Text style={styles.text}>EmailScreen</Text>
        </View>
        <View style={styles.innerEmailContainer}>
          <Text style={styles.text}>Budget</Text>
          <Text style={styles.text}>Tattoo Size</Text>
          <Text style={styles.text}>Tattoo Placement</Text>
          <Text style={styles.text}>EmailScreen</Text>
          <Text style={styles.text}>EmailScreen</Text>
        </View>
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
    margin: 8,
    padding: 12,
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  text: {
    color: GlobalStyles.colors.primary500,
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
    padding: 12,
  },
  innerEmailContainer: {
    flexDirection: "column",
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary700,
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
});
