import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BookingInfo from "../components/BookingInfo/BookingInfo";
import EmailInfo from "../components/EmailInfo/EmailInfo";
import Button from "../components/ui/Button";
import HeaderOne from "../components/ui/HeaderOne";
import { GlobalStyles } from "../constants/styles";
import { HomeStackProps } from "../util/react-navigation";

/**
 * Home Component displaying the main components of the app.
 *
 * Currently broken up into 3 main rows
 *  - Row for Booking Information
 *  - Row for Ranked Queue
 *  - Row for Email Information/Action
 *
 * TODO: Flesh out component - Will hold the main cards/buttons to deal with the email queue
 * @version 0.2.3
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
      <View style={styles.secondRow}>
        <HeaderOne>View Ranked Queue</HeaderOne>
        <View style={styles.rankedQueueButtonContainer}>
          <Button
            buttonStyle={styles.rankedQueueButton}
            onPress={rankedQueuePressHandler}
          >
            <FontAwesome5
              name="clipboard-list"
              size={48}
              color={GlobalStyles.colors.text}
            />
          </Button>
        </View>
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
  secondRow: {
    flex: 1,
  },
  rankedQueueButtonContainer: {
    alignItems: "center",
  },
  rankedQueueButton: {
    paddingHorizontal: 32,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
