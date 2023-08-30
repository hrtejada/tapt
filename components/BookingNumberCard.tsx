import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

/**
 * @prop  {string}  title - Text to be displayed as the title of this component
 * @prop  {number}  value - Value to be displayed as the main content
 */
type Props = {
  title: "ACCEPTED" | "REJECTED";
  value: number;
};

/**
 * Compontent to display stats related to the current booking session.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingNumberCard = ({ title, value }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}:</Text>
      <Text style={[styles.title, styles.number]}>{value}</Text>
    </View>
  );
};

export default BookingNumberCard;

const styles = StyleSheet.create({
  card: {
    borderColor: GlobalStyles.colors.accent700,
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.background500,
    margin: 8,
    padding: 8,
    height: 100,
    width: 100,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
    color: GlobalStyles.colors.primary500,
    textAlign: "center",
  },
  number: {
    fontSize: 48,
    fontStyle: "normal",
  },
});
