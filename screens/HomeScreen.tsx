import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BookingInfo from "../components/BookingInfo/BookingInfo";
import EmailInfo from "../components/EmailInfo/EmailInfo";
import { GlobalStyles } from "../constants/styles";
import { HomeStackProps } from "../util/react-navigation";

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
        <Pressable
          onPress={rankedQueuePressHandler}
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text style={styles.text}>View Ranked Queue</Text>
        </Pressable>
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
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.secondary500,
    marginHorizontal: 24,
    padding: 12,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
    borderRadius: 13,
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
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
