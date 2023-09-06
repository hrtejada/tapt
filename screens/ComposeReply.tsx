import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { DUMMY_EMAILS } from "../testData/DUMMY_EMAILS";

/**
 * Component that will help the user build an simple email reply.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ComposeReply = ({ navigation }: { navigation: any }) => {
  const replyHandler = () => {
    DUMMY_EMAILS.shift();
    navigation.navigate("Email", { email: "next" });
  };

  const cancleHandler = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ComposeReply</Text>
      <Button onPress={replyHandler}>Reply (GO BACK TO NEW EMAIL)</Button>
      <Button onPress={cancleHandler}>Cancel (GO BACK TO SAME EMAIL)</Button>
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
