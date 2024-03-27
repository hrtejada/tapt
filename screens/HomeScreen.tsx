import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BookingInfo from "../components/BookingInfo/BookingInfo";
import EmailInfo from "../components/EmailInfo/EmailInfo";
import RankedInfo from "../components/RankedInfo/RankedInfo";
import { GlobalStyles } from "../constants/styles";

/**
 * Home Component.
 *
 * This component renders the main aspects of the app.
 *
 * Currently broken up into 3 main rows
 *  - Booking Information
 *  - Email Information/Action
 *  - Ranked Queue
 *
 * TODO: Restyle a bit more. Still not 100% happy with the layout/data displayed
 *
 * @component
 * @version 0.3.3
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const HomeScreen = () => {
  // When using insets, need to style the View directly
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          // paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <BookingInfo />
      <EmailInfo />
      {/* <RankedInfo /> */}
      <View>
        <Text style={styles.bottomText}>MPJ Labs, 2023 ©</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background200,
  },
  bottomText: {
    fontSize: 16,
    textAlign: "center",
  },
});
