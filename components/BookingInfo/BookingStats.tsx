import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { STATUS } from "../../constants/words";
import { useUserContext } from "../../store/user-context";
import BookingNumberCard from "./BookingNumberCard";
import HeaderTwo from "../ui/HeaderTwo";

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
 * @version 0.3.0
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
      <View style={styles.pill}>
        <View style={styles.card}>
          <HeaderTwo style={{ fontWeight: "bold" }}>
            {STATUS.ACCEPTED}
          </HeaderTwo>
          <View style={styles.leftIndent}>
            <Text style={{ fontSize: 48 }}>10</Text>
            <Text>17%</Text>
          </View>
        </View>
        <View style={styles.card}>
          <HeaderTwo style={{ fontWeight: "bold" }}>
            {STATUS.REJECTED}
          </HeaderTwo>
          <View style={styles.leftIndent}>
            <Text style={{ fontSize: 48 }}>50</Text>
            <Text>83%</Text>
          </View>
        </View>
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
  pill: {
    backgroundColor: GlobalStyles.colors.secondary300,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 4,
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background300,
    borderRadius: 4,
    padding: 8,
    alignItems: "center",
  },
  leftIndent: {
    // paddingLeft: 24,
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
