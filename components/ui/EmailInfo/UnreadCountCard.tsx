import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

/**
 * Component that displays the count of unread emails from the users inbox that match the parameters.
 *
 * @version 0.1.3
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
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: GlobalStyles.colors.secondary700,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
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
