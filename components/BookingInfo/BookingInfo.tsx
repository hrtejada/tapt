import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useUserContext } from "../../store/user-context";
import HeaderOne from "../ui/HeaderOne";
import BookingStats from "./BookingStats";
import BookingStatus from "./BookingStatus";
import { GlobalStyles } from "../../constants/styles";

/**
 * BookingInfo Component.
 *
 * This component renders info related to the Users booking session.
 *
 * @component
 * @version 0.3.0
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
      <View style={styles.bookingTextContainer}>
        <HeaderOne style={styles.bookingTextStyle}>Booking Info</HeaderOne>
      </View>
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
    flexGrow: 1,
    paddingBottom: 32,
    marginHorizontal: 12,
    justifyContent: "center",
  },
  bookingTextContainer: {
    alignItems: "center",
  },
  bookingTextStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
