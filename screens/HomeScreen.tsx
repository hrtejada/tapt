import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/Button";
import BookingNumberCard from "../components/BookingNumberCard";

const DUMMY_HOME_SCREEN = {
  unreadCount: 0,
  accepted: 50,
  rejected: 50,
  bookingStartDate: "8/23/2023",
  bookingEndDate: "9/25/2023",
};

/**
 * Home Component
 *
 * TODO: Flesh out component - Will hold the main cards/buttons to deal with the email queue
 */

// TODO: Understand what type 'navigation' is
const HomeScreen = ({ navigation }: { navigation: any }) => {
  const insets = useSafeAreaInsets();

  const pressHandler = () => {
    navigation.navigate("Email");
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.firstRow}>
        <View style={styles.emailCountContainer}>
          <Text style={styles.emailCount}>{DUMMY_HOME_SCREEN.unreadCount}</Text>
          <Text style={styles.emailUnreadText}>Unread Emails</Text>
        </View>
        <Button onPress={pressHandler} style={styles.emailsButton}>
          <Text>Go To Emails</Text>
        </Button>
      </View>
      <View style={styles.secondRow}>
        <View>
          <Text style={styles.cardText}>
            {`Currently Booking: ${DUMMY_HOME_SCREEN.bookingStartDate} - ${DUMMY_HOME_SCREEN.bookingEndDate}`}
          </Text>
        </View>
        <Text style={styles.cardText}>Bookings</Text>
        <View style={styles.bookingContainer}>
          <BookingNumberCard
            title="ACCEPTED"
            number={DUMMY_HOME_SCREEN.accepted}
          />
          <BookingNumberCard
            title="REJECTED"
            number={DUMMY_HOME_SCREEN.rejected}
          />
        </View>
      </View>
      <View>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.background300,
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
  secondRow: {
    width: "100%",
    backgroundColor: "#0000ffaa",
    justifyContent: "center",
    // alignItems: "center",
  },
  emailsButton: {
    minWidth: 120,
  },
  firstRow: {
    // flex: 2,
    flexDirection: "row",
    backgroundColor: "#ddff77dd",
    width: "100%",
  },
  emailCountContainer: {
    margin: 12,
    padding: 8,
    backgroundColor: GlobalStyles.colors.background500,
    borderRadius: 4,
  },
  emailCount: {
    fontSize: 48,
    fontWeight: "bold",
  },
  emailUnreadText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 12,
  },
});
