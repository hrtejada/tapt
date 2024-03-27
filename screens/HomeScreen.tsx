import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import BookingInfo from "../components/BookingInfo/BookingInfo";
import EmailInfo from "../components/EmailInfo/EmailInfo";
import RankedInfo from "../components/RankedInfo/RankedInfo";
import { GlobalStyles } from "../constants/styles";

/**
 * Home Component.
 *
 * This component renders the main aspects of the app.
 *
 * Currently broken up into 2 main parts
 *  - Booking Information
 *  - Email Information/Action
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
    <ScrollView
      style={[
        styles.container,
        {
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingTop: insets.top,
        },
      ]}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <LinearGradient
        colors={[
          GlobalStyles.colors.background300,
          GlobalStyles.colors.secondary700,
          GlobalStyles.colors.background300,
        ]}
        start={{ x: 0.25, y: 0.2 }}
        end={{ x: 0.35, y: 1 }}
        style={{ flexGrow: 1 }}
      >
        <BookingInfo />
        <EmailInfo />
        <View style={styles.footer}>
          <Text style={styles.bottomText}>MPJ Labs, 2023 ©</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background300,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  bottomText: {
    fontSize: 16,
    textAlign: "center",
  },
});
