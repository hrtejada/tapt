import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { STATUS } from "../../constants/words";
import { useUserContext } from "../../store/user-context";
import HeaderThree from "../ui/HeaderThree";
import BookingNumberCard from "./BookingNumberCard";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  accepted: number;
  rejected: number;
}

/**
 * BookingStats Component.
 *
 * This component renders the stats of the most recent booking session.
 *
 *
 * @component
 * @version 0.3.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BookingStats = React.memo(({ accepted, rejected }: Props) => {
  const { state } = useUserContext();

  const total = useMemo(() => accepted + rejected, [accepted, rejected]); // Used to help get percentage
  console.log(state.limit);
  const limitDisplay = `Current Limit: ${
    state.limit === "0" ? "∞" : state.limit
  }`;

  return (
    <View style={styles.container}>
      <View
        style={styles.limitContainer}
        accessibilityRole="text"
        accessibilityHint={limitDisplay}
      >
        <HeaderThree>{limitDisplay}</HeaderThree>
      </View>
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
    </View>
  );
});

export default BookingStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexGrow: 0.25,
    justifyContent: "space-evenly",
  },
  limitContainer: {
    alignItems: "center",
    marginBottom: 12,
  },
});
