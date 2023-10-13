import { StyleSheet, View } from "react-native";
import { ACCEPTED, REJECTED } from "../../constants/words";
import BookingNumberCard from "./BookingNumberCard";

interface Props {
  accepted: number;
  rejected: number;
}

/**
 * Component to display the stat components of the most recent booking session.
 *
 * TODO: Rework this; I don't like the current display
 *
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingStats = ({ accepted, rejected }: Props) => {
  const total = accepted + rejected;

  return (
    <View style={styles.container}>
      <BookingNumberCard title={ACCEPTED} value={accepted} total={total} />
      <BookingNumberCard title={REJECTED} value={rejected} total={total} />
    </View>
  );
};

export default BookingStats;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
