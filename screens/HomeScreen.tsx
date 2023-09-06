import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackNavProps } from "../App";
import UnreadCountCard from "../components/UnreadCountCard";
import BookingStatus from "../components/ui/BookingInfo/BookingStatus";
import Button from "../components/ui/Button";
import { GlobalStyles } from "../constants/styles";
import { DUMMY_HOME } from "../testData/DUMMY_DATA";
import BookingStats from "../components/ui/BookingInfo/BookingStats";

/**
 * Home Component displaying the main components of the app.
 *
 * TODO: Flesh out component - Will hold the main cards/buttons to deal with the email queue
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */

// TODO: Understand what type 'navigation' is
const HomeScreen = ({ navigation }: StackNavProps) => {
  const insets = useSafeAreaInsets();

  const emailPressHandler = () => {
    navigation.navigate("Email", { email: "new" });
    // TODO: Retrieve email data or handle it in the EmailScreen
  };

  const rankedQueuePressHandler = () => {
    navigation.navigate("Ranked");
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.firstRow}>
        <View style={styles.bookingTextContainer}>
          <Text style={styles.bookingText}>Booking Info</Text>
        </View>
        <BookingStatus
          status={DUMMY_HOME.booking}
          startDate={DUMMY_HOME.bookingStartDate}
          endDate={DUMMY_HOME.bookingEndDate}
        />
        <BookingStats
          accepted={DUMMY_HOME.accepted}
          rejected={DUMMY_HOME.rejected}
        />
      </View>
      <View style={styles.secondRow}>
        <Button onPress={rankedQueuePressHandler}>Ranked Queue</Button>
      </View>
      <View style={styles.thirdRow}>
        <UnreadCountCard unreadCount={DUMMY_HOME.unreadCount} />
        <View style={styles.emailButtonContainer}>
          <Button onPress={emailPressHandler}>
            <View style={styles.innerButtonContainer}>
              <FontAwesome5 name="envelope-open-text" size={48} color="white" />
              <Text style={styles.emailsButtonText}>Review Emails</Text>
            </View>
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
    justifyContent: "space-around",
    backgroundColor: GlobalStyles.colors.background100,
  },
  firstRow: {
    flex: 2,
    justifyContent: "center",
  },
  secondRow: {
    flex: 1,
    justifyContent: "center",
  },
  thirdRow: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  bookingText: {
    color: GlobalStyles.colors.text,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginVertical: 8,
    transform: [{ skewX: "30deg" }],
    textTransform: "uppercase",
  },
  bookingTextContainer: {
    backgroundColor: GlobalStyles.colors.background300,
    transform: [{ skewX: "-30deg" }],
    marginHorizontal: 32,
    marginBottom: 12,
  },
  emailButtonContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 12,
    paddingVertical: 12,
  },
  innerButtonContainer: {
    padding: 8,
    alignItems: "center",
  },
  emailsButtonText: {
    fontWeight: "bold",
    fontSize: 24,
    color: GlobalStyles.colors.background100,
    marginTop: 16,
  },
  text: {
    color: GlobalStyles.colors.primary500,
    fontSize: 24,
    fontWeight: "bold",
  },
});
