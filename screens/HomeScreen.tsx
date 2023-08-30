import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BookingNumberCard from "../components/BookingNumberCard";
import Button from "../components/Button";
import UnreadCountCard from "../components/UnreadCountCard";
import { GlobalStyles } from "../constants/styles";

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
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */

// TODO: Understand what type 'navigation' is
const HomeScreen = ({ navigation }: { navigation: any }) => {
  const insets = useSafeAreaInsets();

  let bookingStatusDisplay: string = "Inactive Booking";

  if (DUMMY_HOME_SCREEN.booking) {
    bookingStatusDisplay = `Active: ${DUMMY_HOME_SCREEN.bookingStartDate} - ${DUMMY_HOME_SCREEN.bookingEndDate}`;
  }

  const pressHandler = () => {
    navigation.navigate("Email");
    // TODO: Retrieve email data or handle it in the EmailScreen
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.firstRow}>
        <UnreadCountCard unreadCount={DUMMY_HOME_SCREEN.unreadCount} />
        <Button onPress={pressHandler} style={styles.emailsButton}>
          Go To Emails
        </Button>
      </View>
      <View style={styles.secondRow}>
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
      <View style={styles.thirdRow}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Ranked Queue</Text>
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
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.background500,
    width: "100%",
  },
  secondRow: {
    flex: 3,
    backgroundColor: GlobalStyles.colors.background300,
    justifyContent: "center",
  },
  thirdRow: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background500,
    justifyContent: "center",
  },
  emailsButton: {
    flex: 2,
    justifyContent: "center",
    marginHorizontal: 12,
    paddingVertical: 12,
    // backgroundColor: "#11111133",
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
  bookingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 12,
  },
  bookingStatus: {
    color: GlobalStyles.colors.primary500,
    backgroundColor: GlobalStyles.colors.background300,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 8,
    marginVertical: 4,
    padding: 8,
    borderRadius: 50,
  },
  bookingText: {
    color: GlobalStyles.colors.background100,
    textAlign: "center",
    fontSize: 32,
    textDecorationLine: "underline",
  },
});
