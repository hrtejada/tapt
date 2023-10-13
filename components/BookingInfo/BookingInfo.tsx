import { StyleSheet, View } from "react-native";
import { useUserContext } from "../../store/user-context";
import HeaderOne from "../ui/HeaderOne";
import BookingStats from "./BookingStats";
import BookingStatus from "./BookingStatus";

/**
 * Booking Info component.
 *
 * Displays any relevant information pertaining to booking.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingInfo = () => {
  const { state } = useUserContext();
  const startDate = state.startDate;
  const endDate = state.endDate;

  const now = new Date();
  // TODO: Different way to TS this?
  const options = {
    weekday: "long" as "long",
    year: "2-digit" as "2-digit",
    month: "numeric" as "numeric",
    day: "numeric" as "numeric",
  };
  const startDateDisplay = startDate.toLocaleDateString("en-US", options);
  const endDateDisplay = endDate.toLocaleDateString("en-US", options);
  const isBooking = now >= startDate && now < endDate;

  return (
    <View style={styles.row}>
      <HeaderOne>Booking Info</HeaderOne>
      <BookingStatus
        status={isBooking}
        startDate={startDateDisplay}
        endDate={endDateDisplay}
      />
      <BookingStats accepted={state.accepted} rejected={state.rejected} />
    </View>
  );
};

export default BookingInfo;

const styles = StyleSheet.create({
  row: {
    flex: 2,
    marginTop: 32,
  },
});
