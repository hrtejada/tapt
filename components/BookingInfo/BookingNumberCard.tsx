import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { STATUS } from "../../constants/words";
import { useMemo } from "react";

interface Props {
  title: STATUS;
  value: number;
  total: number;
}

/**
 * Compontent to display stats related to the current booking session.
 *
 * NOTE - Possibly expand this component in the future to show more statistics
 *
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingNumberCard = ({ title, value, total }: Props) => {
  const isAccepted = title === STATUS.ACCEPTED;

  const formattedPercentage = useMemo(() => {
    const percentage = (value / total) * 100;
    return percentage.toFixed(0);
  }, [value, total]);

  const accessibilityHint = useMemo(() => {
    const hintBase = `This card shows the number of ${title.toLowerCase()} bookings.`;

    return `${hintBase} ${value} ${isAccepted ? "accepted" : "rejected"}`;
  }, []);

  return (
    <View
      style={[styles.card, isAccepted ? styles.accepted : styles.rejected]}
      accessibilityRole="text"
      accessibilityHint={accessibilityHint}
    >
      <Text style={[styles.text, styles.title]}>{title}:</Text>
      <Text style={[styles.text, styles.number]}>{value}</Text>
      <Text
        style={[
          styles.text,
          styles.percentage,
          isAccepted ? styles.justifyEnd : styles.justifyStart,
        ]}
      >
        {formattedPercentage}%
      </Text>
    </View>
  );
};

export default BookingNumberCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    marginTop: 12,
  },
  accepted: {
    backgroundColor: GlobalStyles.colors.primary400,
    borderLeftColor: GlobalStyles.colors.accent500,
    borderLeftWidth: 1,
    borderTopColor: GlobalStyles.colors.accent500,
    borderTopWidth: 1,
    borderBottomColor: GlobalStyles.colors.accent500,
    borderBottomWidth: 1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    marginLeft: 24,
  },
  rejected: {
    backgroundColor: GlobalStyles.colors.secondary500,
    borderRightColor: GlobalStyles.colors.accent500,
    borderRightWidth: 1,
    borderTopColor: GlobalStyles.colors.accent500,
    borderTopWidth: 1,
    borderBottomColor: GlobalStyles.colors.accent500,
    borderBottomWidth: 1,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    marginRight: 24,
  },
  text: {
    color: GlobalStyles.colors.text,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    paddingTop: 10,
  },
  number: {
    fontSize: 60,
    fontStyle: "normal",
    paddingVertical: 8,
  },
  percentage: {
    fontSize: 20,
    color: GlobalStyles.colors.accent700,
    paddingBottom: 10,
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
});
