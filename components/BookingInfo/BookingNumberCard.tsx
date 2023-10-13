import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ACCEPTED, REJECTED } from "../../constants/words";

interface Props {
  title: typeof ACCEPTED | typeof REJECTED;
  value: number;
  total: number;
}

/**
 * Compontent to display stats related to the current booking session.
 *
 * NOTE - Possibly expand this component in the future to show more statistics
 *
 * @version 0.2.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingNumberCard = ({ title, value, total }: Props) => {
  const isAccepted = title === ACCEPTED;
  const percentage = (value / total) * 100;
  const formattedPercentage = percentage.toFixed(0);
  const acceptedStyling = {
    color: GlobalStyles.colors.secondary700,
    justifyContent: "flex-end" as "flex-end",
  };
  const rejectedStyling = {
    color: GlobalStyles.colors.accent700,
    justifyContent: "flex-start" as "flex-start",
  };
  const extraStyling = isAccepted ? acceptedStyling : rejectedStyling;

  return (
    <View style={[styles.card, isAccepted ? styles.accepted : styles.rejected]}>
      <Text style={[styles.text, styles.title]}>{title}:</Text>
      <Text style={[styles.text, styles.number]}>{value}</Text>
      <Text style={[styles.text, styles.percentage, extraStyling]}>
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
    backgroundColor: GlobalStyles.colors.primary500,
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
});
