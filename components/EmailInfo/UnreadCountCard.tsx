import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * Component that displays the count of unread emails from the users inbox that match the parameters.
 *
 * @version 0.2.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const UnreadCountCard = ({ unreadCount }: { unreadCount: number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{unreadCount}</Text>
      <Text style={styles.text}>Unread</Text>
    </View>
  );
};

export default UnreadCountCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: GlobalStyles.colors.primary300,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
  },
  count: {
    fontSize: 72,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
