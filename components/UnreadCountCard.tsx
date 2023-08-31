import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

/**
 * Component that displays the count of unread emails from the users inbox that match the parameters.
 *
 * @prop {number}  unreadCount - Current number of unread emails
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const UnreadCountCard = ({ unreadCount }: { unreadCount: number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{unreadCount}</Text>
      <Text style={styles.text}>Unread Emails</Text>
    </View>
  );
};

export default UnreadCountCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    margin: 36,
    padding: 8,
    backgroundColor: GlobalStyles.colors.accent300,
    borderRadius: 10,
    width: "100%",
  },
  count: {
    fontSize: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
