import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useUserContext } from "../../store/user-context";
import HeaderOne from "../ui/HeaderOne";
import BookingStats from "./BookingStats";
import BookingStatus from "./BookingStatus";

/**
 * BookingInfo Component.
 *
 * This component renders info related to the Users booking session.
 *
 * @component
 * @version 0.2.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingInfo = () => {
  const { state } = useUserContext();

  // Display the Booking Date Range in nice format
  // TODO: Rework to be useful internationally??
  const options: Intl.DateTimeFormatOptions = {
    // weekday: "short" as "short",
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  };
  const startDateDisplay = useMemo(
    () => state.startDate.toLocaleDateString("en-US", options),
    [state.startDate]
  );
  const endDateDisplay = useMemo(
    () => state.endDate.toLocaleDateString("en-US", options),
    [state.endDate]
  );
  const now = new Date();
  const isBooking = now >= state.startDate && now < state.endDate;

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
    flex: 1,
    paddingVertical: 32,
    justifyContent: "center",
  },
});
