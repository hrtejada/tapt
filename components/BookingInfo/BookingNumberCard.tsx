import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import { STATUS } from "../../constants/words";
import HeaderTwo from "../ui/HeaderTwo";
import Body from "../ui/Body";
import HeaderThree from "../ui/HeaderThree";

interface Props {
  title: STATUS;
  value: number;
  total: number;
}

/**
 * BookingNumberCard Compontent.
 *
 * This component renders the number of accepted/rejected emails
 * for the current/previous booking session.
 *
 * NOTE - Possibly expand this component in the future to show more statistics
 *
 * TODO: Come up with what to display on Reject card besides revenue
 *
 * @component
 * @version 0.4.0
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
      style={[
        styles.outerCard,
        {
          backgroundColor: isAccepted
            ? GlobalStyles.colors.primary300
            : GlobalStyles.colors.accent300,
        },
      ]}
    >
      <View
        style={styles.innerCard}
        accessibilityHint={accessibilityHint}
        accessibilityRole="text"
      >
        <View>
          <HeaderTwo style={{ fontWeight: "bold" }}>{title}</HeaderTwo>
          <Text style={{ fontSize: 42 }}>{value}</Text>
          <Body>{`${formattedPercentage}%`}</Body>
        </View>
        {isAccepted && (
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <HeaderTwo>Approx. Revenue</HeaderTwo>
            <HeaderThree>$2000</HeaderThree>
          </View>
        )}
      </View>
    </View>
  );
};

export default BookingNumberCard;

const styles = StyleSheet.create({
  outerCard: {
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 4,
    flexDirection: "row",
    justifyContent: "center",
  },
  innerCard: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.background300,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
