import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

type Props = {
  title: string;
  number: number;
};

const BookingNumberCard = ({ title, number }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}:</Text>
      <Text style={[styles.title, styles.number]}>{number}</Text>
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
