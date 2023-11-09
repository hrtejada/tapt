import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ACTIVE, INACTIVE } from "../../constants/words";

interface Props {
  status: boolean;
  startDate: string;
  endDate: string;
}

/**
 * Component to display the current status of the users booking dates.
 *
 * Styled differently depending on the current status.
 *
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingStatus = ({ status, startDate, endDate }: Props) => {
  const statusText = status ? ACTIVE : INACTIVE;
  const dateRangeText = status ? `${startDate} - ${endDate}` : "";
  const accessibilityHint = `Booking Status: ${statusText}. ${dateRangeText}`;

  return (
    <View
      style={[styles.container, status ? styles.active : styles.inactive]}
      accessibilityRole="text"
      accessibilityHint={accessibilityHint}
      accessibilityLiveRegion="polite"
    >
      <Text style={[styles.text, styles.statusText]}>{statusText}</Text>
      {status && (
        <Text style={[styles.text, styles.dateRangeText]}>{dateRangeText}</Text>
      )}
    </View>
  );
};

export default BookingStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: GlobalStyles.colors.accent700,
  },
  active: {
    backgroundColor: GlobalStyles.colors.success500,
  },
  inactive: {
    backgroundColor: GlobalStyles.colors.warning500,
  },
  text: {
    flex: 0,
    color: GlobalStyles.colors.background100,
    fontWeight: "bold",
  },
  statusText: {
    fontSize: 22,
  },
  dateRangeText: {
    fontSize: 20,
  },
});
