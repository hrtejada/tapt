import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

type Props = {
  status: boolean;
  startDate: string;
  endDate: string;
};

/**
 * Component to display the current status of the users booking dates.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingStatus = ({ status, startDate, endDate }: Props) => {
  const statusColor = status ? styles.active : styles.inactive;
  return (
    <View style={styles.container}>
      <Text style={[styles.statusText, statusColor]}>
        {status ? "ACTIVE" : "INACTIVE"}
      </Text>
      <Text style={styles.bookingDateRange}>
        {status ? `${startDate} - ${endDate}` : ""}
      </Text>
    </View>
  );
};

export default BookingStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    padding: 12,
    borderRadius: 25,
    fontSize: 20,
    fontWeight: "bold",
    overflow: "hidden",
  },
  active: {
    backgroundColor: "green",
    color: GlobalStyles.colors.background100,
  },
  inactive: {
    backgroundColor: "red",
  },
  bookingDateRange: {
    color: GlobalStyles.colors.text,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 4,
    padding: 8,
    overflow: "hidden",
  },
});
