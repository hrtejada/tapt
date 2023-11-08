import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * Component to hold the body of a Ranked Booking.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankedBody = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={2}>
        Show the liked/disliked parameters associated to this email
      </Text>
    </View>
  );
};

export default RankedBody;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    paddingVertical: 4,
  },
  text: {
    color: GlobalStyles.colors.text,
    fontSize: 18,
    marginVertical: 8,
  },
});
