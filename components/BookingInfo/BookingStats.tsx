import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { STATUS } from "../../constants/words";
import { useUserContext } from "../../store/user-context";
import BookingNumberCard from "./BookingNumberCard";

interface Props {
  accepted: number;
  rejected: number;
}

/**
 * BookingStats Component.
 *
 * This component renders the stats of the most recent booking session.
 *
 * TODO: Rework this; I don't like the current display
 *
 * @component
 * @version 0.2.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingStats = React.memo(({ accepted, rejected }: Props) => {
  const { state } = useUserContext();

  const total = useMemo(() => accepted + rejected, [accepted, rejected]); // Used to help get percentage
  const limitDisplay = `Current Limit: ${
    state.limit === "0" ? "∞" : state.limit
  }`;

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <BookingNumberCard
          title={STATUS.ACCEPTED}
          value={accepted}
          total={total}
        />
        <BookingNumberCard
          title={STATUS.REJECTED}
          value={rejected}
          total={total}
        />
      </View>
      <View
        style={styles.limitContainer}
        accessibilityRole="text"
        accessibilityHint={limitDisplay}
      >
        <Text style={styles.text}>{limitDisplay}</Text>
      </View>
    </View>
  );
});

export default BookingStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
  },
  limitContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: GlobalStyles.colors.accent600,
    paddingHorizontal: 24,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    paddingVertical: 6,
    maxWidth: "80%",
    minWidth: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
