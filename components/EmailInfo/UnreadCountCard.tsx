import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * UnreadCountCard Component.
 *
 * This component renders the count of unread emails from the users inbox that
 * match the set parameters.
 *
 * TODO: See if this needs to exist. Maybe compound component pattern
 *
 * @component
 * @version 0.2.2
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
    shadowColor: GlobalStyles.colors.primary400,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
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
