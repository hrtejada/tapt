import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ACTIVE, INACTIVE } from "../../constants/words";

interface Props {
  status: boolean;
  startDate: string;
  endDate: string;
}

/**
 * BookingStatus Component.
 *
 * This component renders the current status of the Users booking dates.
 * Styled differently depending on the current status.
 *
 * @component
 * @version 0.4.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingStatus = ({ status, startDate, endDate }: Props) => {
  const statusText = `${status ? ACTIVE : INACTIVE} - `;
  const dateRangeText = status ? `${startDate} - ${endDate}` : "";
  const accessibilityHint = `Booking Status: ${statusText}. ${dateRangeText}`;

  return (
    <View
      style={styles.container}
      accessibilityRole="text"
      accessibilityHint={accessibilityHint}
      accessibilityLiveRegion="polite"
    >
      <View
        style={[
          styles.statusContainer,
          // status ? styles.active : styles.inactive,
        ]}
      >
        <Text style={[styles.text, styles.statusText]}>{`${statusText} ${
          status && dateRangeText
        }`}</Text>
      </View>
    </View>
  );
};

export default BookingStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
  },
  statusContainer: {
    padding: 12,
  },
  active: {
    backgroundColor: GlobalStyles.colors.primary700,
  },
  inactive: {
    backgroundColor: GlobalStyles.colors.secondary300,
  },
  text: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  statusText: {
    fontSize: 22,
  },
});
