import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const RankedQueueScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>RankedQueueScreen</Text>
    </View>
  );
};

export default RankedQueueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.accent700,
  },
  text: {
    color: GlobalStyles.colors.primary500,
    fontSize: 24,
    fontWeight: "bold",
  },
});
