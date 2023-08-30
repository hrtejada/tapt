import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

/**
 * Component that displays the count of unread emails from the users inbox that match the parameters.
 *
 * @prop {number}  unreadCount - Current number of unread emails
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const UnreadCountCard = ({ unreadCount }: { unreadCount: number }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.count}>{unreadCount}</Text>
        <Text style={styles.text}>Unread Emails</Text>
      </View>
    </View>
  );
};

export default UnreadCountCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  innerContainer: {
    margin: 12,
    padding: 8,
    backgroundColor: GlobalStyles.colors.background500,
    borderRadius: 4,
    width: "90%",
  },
  count: {
    fontSize: 64,
    fontWeight: "bold",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
