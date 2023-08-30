import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

/**
 * Component that displays the count of unread emails from the users inbox that match the parameters.
 *
 * @param {number}  unreadCount - Current number of unread emails
 */
const UnreadCountCard = ({ unreadCount }: { unreadCount: number }) => {
  return (
    <View style={styles.emailCountContainer}>
      <View style={styles.emailCountInner}>
        <Text style={styles.emailCount}>{unreadCount}</Text>
        <Text style={styles.emailUnreadText}>Unread Emails</Text>
      </View>
    </View>
  );
};

export default UnreadCountCard;

const styles = StyleSheet.create({
  emailCountContainer: {
    flex: 1,
    justifyContent: "center",
  },
  emailCountInner: {
    margin: 12,
    padding: 8,
    backgroundColor: GlobalStyles.colors.background500,
    borderRadius: 4,
    width: "90%",
  },
  emailCount: {
    fontSize: 64,
    fontWeight: "bold",
  },
  emailUnreadText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
