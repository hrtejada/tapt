import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

/**
 * Component that will help the user build an simple email reply.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ComposeReply = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ComposeReply</Text>
    </View>
  );
};

export default ComposeReply;

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
