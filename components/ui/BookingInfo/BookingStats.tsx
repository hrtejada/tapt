import { StyleSheet, View } from "react-native";
import BookingNumberCard from "./BookingNumberCard";

type Props = {
  accepted: number;
  rejected: number;
};

/**
 * Component to display the stats of the most recent booking session.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingStats = ({ accepted, rejected }: Props) => {
  return (
    <View style={styles.bookingContainer}>
      <BookingNumberCard title="ACCEPTED" value={accepted} />
      <BookingNumberCard title="REJECTED" value={rejected} />
    </View>
  );
};

export default BookingStats;

const styles = StyleSheet.create({
  bookingContainer: {
    flexDirection: "row",
  },
});
