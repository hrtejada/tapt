import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BookingInfo from "../components/BookingInfo/BookingInfo";
import UnreadCountCard from "../components/EmailInfo/UnreadCountCard";
import Button from "../components/ui/Button";
import HeaderOne from "../components/ui/HeaderOne";
import { GlobalStyles } from "../constants/styles";
import { DUMMY_USER_1 } from "../testData/DUMMY_DATA";
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
   * Navigate to the Email Screen.
   */
  const emailPressHandler = () => {
    navigation.navigate("Email", { action: "new" });
    // TODO: Retrieve email data or handle it in the EmailScreen
  };

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
      <View style={styles.thirdRow}>
        <HeaderOne>Emails</HeaderOne>
        <View style={styles.emailsContainer}>
          <UnreadCountCard unreadCount={DUMMY_USER_1.unreadCount} />
          <View style={styles.emailButtonContainer}>
            <Button onPress={emailPressHandler}>
              <View style={styles.innerButtonContainer}>
                <FontAwesome5
                  name="envelope-open-text"
                  size={56}
                  color={GlobalStyles.colors.text}
                />
                <Text style={styles.emailsButtonText}>Review Emails</Text>
              </View>
            </Button>
          </View>
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
  thirdRow: {
    flex: 2,
  },
  emailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  emailButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
  innerButtonContainer: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  emailsButtonText: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 16,
  },
});
