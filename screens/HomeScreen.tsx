import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BookingNumberCard from "../components/BookingNumberCard";
import Button from "../components/Button";
import UnreadCountCard from "../components/UnreadCountCard";
import { GlobalStyles } from "../constants/styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { StackNavProps } from "../App";

const DUMMY_HOME_SCREEN = {
  unreadCount: 0,
  accepted: 50,
  rejected: 50,
  booking: true,
  bookingStartDate: "8/23/2023",
  bookingEndDate: "9/25/2023",
};

/**
 * Home Component displaying the main components of the app.
 *
 * TODO: Flesh out component - Will hold the main cards/buttons to deal with the email queue
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */

// TODO: Understand what type 'navigation' is
const HomeScreen = ({ navigation }: StackNavProps) => {
  const insets = useSafeAreaInsets();

  let bookingStatusDisplay: string = "Inactive Booking";

  if (DUMMY_HOME_SCREEN.booking) {
    bookingStatusDisplay = `Active: ${DUMMY_HOME_SCREEN.bookingStartDate} - ${DUMMY_HOME_SCREEN.bookingEndDate}`;
  }

  const emailPressHandler = () => {
    navigation.navigate("Email");
    // TODO: Retrieve email data or handle it in the EmailScreen
  };

  const rankedQueuePressHandler = () => {
    navigation.navigate("Ranked");
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.firstRow}>
        <Text style={styles.bookingText}>Booking Info</Text>
        <Text style={styles.bookingStatus}>{bookingStatusDisplay}</Text>
        <View style={styles.bookingContainer}>
          <BookingNumberCard
            title="ACCEPTED"
            value={DUMMY_HOME_SCREEN.accepted}
          />
          <BookingNumberCard
            title="REJECTED"
            value={DUMMY_HOME_SCREEN.rejected}
          />
        </View>
      </View>
      <View style={styles.secondRow}>
        <Button onPress={rankedQueuePressHandler}>Ranked Queue</Button>
      </View>
      <View style={styles.thirdRow}>
        <UnreadCountCard unreadCount={DUMMY_HOME_SCREEN.unreadCount} />
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
    backgroundColor: GlobalStyles.colors.background300,
  },
  firstRow: {
    flex: 2,
    justifyContent: "space-around",
    backgroundColor: GlobalStyles.colors.background500,
  },
  secondRow: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background300,
    justifyContent: "center",
  },
  thirdRow: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.background500,
    justifyContent: "center",
  },
  emailButtonContainer: {
    flex: 2,
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
  cardText: {
    color: GlobalStyles.colors.background500,
    textAlign: "center",
    fontSize: 16,
  },
  card: {
    borderRadius: 8,
    elevation: 8,
    backgroundColor: GlobalStyles.colors.secondary500,
    shadowColor: GlobalStyles.colors.accent500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    padding: 24,
    margin: 8,
  },
  text: {
    color: GlobalStyles.colors.primary500,
    fontSize: 24,
    fontWeight: "bold",
  },
  bookingText: {
    color: GlobalStyles.colors.secondary700,
    textAlign: "center",
    fontSize: 32,
    textDecorationLine: "underline",
  },
  bookingStatus: {
    color: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.background300,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 8,
    borderRadius: 25,
    borderWidth: 1,
    overflow: "hidden",
  },
  bookingContainer: {
    flexDirection: "row",
    marginHorizontal: 12,
  },
});
