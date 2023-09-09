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
import Header from "../components/ui/Header";

/**
 * Home Component displaying the main components of the app.
 *
 * TODO: Flesh out component - Will hold the main cards/buttons to deal with the email queue
 * @version 0.2.1
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
        <Header>Booking Info</Header>
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
        <Header>View Ranked Queue</Header>
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
        <Header>Emails</Header>
        <View style={styles.emailsContainer}>
          <UnreadCountCard unreadCount={DUMMY_HOME.unreadCount} />
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
    justifyContent: "center",
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
