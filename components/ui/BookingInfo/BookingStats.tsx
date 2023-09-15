import { StyleSheet, View } from "react-native";
import { ACCEPTED, REJECTED } from "../../../constants/words";
import BookingNumberCard from "./BookingNumberCard";

interface Props {
  accepted: number;
  rejected: number;
}

/**
 * Component to display the stat components of the most recent booking session.
 *
 * @prop {number} accepted  - Value for the percent of accepted emails.
 * @prop {number} rejected  - Value for the percent of rejected emails.
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingStats = ({ accepted, rejected }: Props) => {
  return (
    <View style={styles.bookingContainer}>
      <BookingNumberCard title={ACCEPTED} value={accepted} />
      <BookingNumberCard title={REJECTED} value={rejected} />
    </View>
  );
};

export default BookingStats;

const styles = StyleSheet.create({
  bookingContainer: {
    flexDirection: "row",
  },
});
