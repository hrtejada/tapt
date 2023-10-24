import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BookingInfo from "../components/BookingInfo/BookingInfo";
import EmailInfo from "../components/EmailInfo/EmailInfo";
import { GlobalStyles } from "../constants/styles";
import { HomeStackProps } from "../util/react-navigation";
import AnimatedButton from "../components/ui/AnimatedButton";

/**
 * Home Component displaying the main components of the app.
 *
 * Currently broken up into 3 main rows
 *  - Booking Information
 *  - Email Information/Action
 *  - Ranked Queue
 *
 * TODO: Restyle a bit more. Still not 100% happy with the layout/data displayed
 *
 * @version 0.2.4
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const HomeScreen = ({ navigation }: HomeStackProps) => {
  const insets = useSafeAreaInsets();

  /**
   * Navigate to the Ranked Queue Screen
   */
  const rankedQueuePressHandler = () => {
    navigation.navigate("Ranked");
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <BookingInfo />
      <EmailInfo />
      <View style={styles.row}>
        <AnimatedButton
          title="View Ranked Queue"
          onPress={rankedQueuePressHandler}
          style={styles.button}
          textStyle={styles.text}
        />
      </View>
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
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.background200,
  },
  row: {
    flex: 1,
  },
  button: {
    borderColor: GlobalStyles.colors.accent500,
    alignItems: "center",
    marginHorizontal: 24,
    padding: 12,
    borderWidth: 1,
    borderRadius: 13,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomText: {
    fontSize: 16,
    textAlign: "center",
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.secondary700,
  },
});
