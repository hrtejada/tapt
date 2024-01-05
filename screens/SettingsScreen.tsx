import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AboutButton from "../components/Settings/AboutButton";
import DateRangeButton from "../components/Settings/DateRangeButton";
import DeleteAccountButton from "../components/Settings/DeleteAccountButton";
import EmailLimitButton from "../components/Settings/EmailLimitButton";
import NotificationCadenceButton from "../components/Settings/NotificationCadenceButton";
import EmailDataButton from "../components/Settings/EmailDataButton";
import RankingButton from "../components/Settings/RankingButton";
import { GlobalStyles } from "../constants/styles";

/**
 * SettingsScreen Component.
 *
 * This component renders the main Settings Screen where the User can perform various actions.
 *
 * The User can
 *  - Logout
 *  - Set how often the receive notifications
 *  - Set what data to parse from what emails
 *  - Set date range to search through
 *  - Limit how many emails they can accept
 *  - Delete their account
 *
 * TODO: Need to user test the swiping back gesture when in this Stack (Keep or disabled)
 *
 * @component
 * @version 0.3.3
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <ScrollView style={styles.scrollContainer}>
        <AboutButton />
        <DateRangeButton />
        <EmailLimitButton />
        <NotificationCadenceButton />
        <EmailDataButton />
        <RankingButton />
        <View style={styles.deleteContainer}>
          <DeleteAccountButton />
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background300,
  },
  scrollContainer: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  deleteContainer: {
    marginTop: 24,
  },
});
