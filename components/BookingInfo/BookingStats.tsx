import { StyleSheet, Text, View } from "react-native";
import { ACCEPTED, REJECTED } from "../../constants/words";
import BookingNumberCard from "./BookingNumberCard";
import { useUserContext } from "../../store/user-context";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  accepted: number;
  rejected: number;
}

/**
 * Component to display the stat components of the most recent booking session.
 *
 * TODO: Rework this; I don't like the current display
 *
 * @version 0.1.3
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingStats = ({ accepted, rejected }: Props) => {
  const { state } = useUserContext();

  const total = accepted + rejected;

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <BookingNumberCard title={ACCEPTED} value={accepted} total={total} />
        <BookingNumberCard title={REJECTED} value={rejected} total={total} />
      </View>
      <View style={styles.limitContainer}>
        <Text style={styles.text}>
          Current Limit: {state.limit === "0" ? "∞" : state.limit}
        </Text>
      </View>
    </View>
  );
};

export default BookingStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 4,
    flexDirection: "row",
  },
  limitContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.accent300,
    marginHorizontal: "25%",
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
