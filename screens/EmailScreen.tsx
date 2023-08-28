import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const EmailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>EmailScreen</Text>
    </View>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: GlobalStyles.colors.text,
    fontSize: 24,
    fontWeight: "bold",
  },
});
