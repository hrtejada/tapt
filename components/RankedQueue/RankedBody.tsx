import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useRankedContext } from "../../store/ranked-context";

interface Props {
  messageId: string;
}

/**
 * Component to hold the body of a Ranked Booking.
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankedBody = ({ messageId }: Props) => {
  const { state } = useRankedContext();

  const email = state.rankedEmails.find(
    (email) => email.messageId === messageId
  );

  if (email === null || email === undefined) {
    throw new Error("Email was not found");
  }

  const likedParams = email.parameters.join(", ").toUpperCase();
  const showParams = likedParams !== "";

  const showNote = email.note !== "";
  const noteDisplay = (
    <Text style={styles.note} numberOfLines={2}>
      {email.note}
    </Text>
  );

  if (!showParams && !showNote) {
    return (
      <View style={styles.container}>
        <Text style={styles.empty}>No info for email</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {showParams && <Text style={styles.params}>Liked - {likedParams}</Text>}
      {showNote && noteDisplay}
    </View>
  );
};

export default RankedBody;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    paddingVertical: 4,
  },
  empty: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    padding: 10,
  },
  params: {
    fontSize: 16,
    fontStyle: "italic",
    paddingVertical: 10,
  },
  note: {
    color: GlobalStyles.colors.text,
    backgroundColor: GlobalStyles.colors.secondary300,
    fontSize: 18,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
  },
});
