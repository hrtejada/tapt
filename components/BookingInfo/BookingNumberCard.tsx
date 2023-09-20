import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ACCEPTED, REJECTED } from "../../constants/words";

interface Props {
  title: typeof ACCEPTED | typeof REJECTED;
  value: number;
}

/**
 * Compontent to display stats related to the current booking session.
 *
 * NOTE - Possibly expand this component in the future to show more statistics
 *
 * @version 0.2.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingNumberCard = ({ title, value }: Props) => {
  return (
    <View
      style={[
        styles.card,
        title === ACCEPTED ? styles.accepted : styles.rejected,
      ]}
    >
      <Text style={styles.title}>{title}:</Text>
      <Text style={[styles.title, styles.number]}>{value}%</Text>
    </View>
  );
};

export default BookingNumberCard;

const styles = StyleSheet.create({
  card: {
    height: 125,
    width: 100,
    justifyContent: "center",
    flex: 1,
    marginTop: 12,
  },
  accepted: {
    backgroundColor: GlobalStyles.colors.primary300,
    borderLeftColor: GlobalStyles.colors.accent500,
    borderLeftWidth: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginLeft: 12,
  },
  rejected: {
    backgroundColor: GlobalStyles.colors.secondary700,
    borderRightColor: GlobalStyles.colors.accent500,
    borderRightWidth: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    color: GlobalStyles.colors.text,
    textAlign: "center",
  },
  number: {
    fontSize: 56,
    fontStyle: "normal",
  },
});
