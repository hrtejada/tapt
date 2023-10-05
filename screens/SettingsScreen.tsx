import { ScrollView, StyleSheet, Text, View } from "react-native";
import DateRangeButton from "../components/Settings/DateRangeButton";
import DeleteAccountButton from "../components/Settings/DeleteAccountButton";
import EmailLimitButton from "../components/Settings/EmailLimitButton";
import ParametersButton from "../components/Settings/ParametersButton";
import { GlobalStyles } from "../constants/styles";
import NotificationCadenceButton from "../components/Settings/NotificationCadenceButton";
import RankingButton from "../components/Settings/RankingButton";
import AboutButton from "../components/Settings/AboutButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Settings Screen where the user can perform various actions.
 *
 * The user can
 *  - Logout
 *  - Set how often the receive notifications
 *  - Set what data to parse from what emails
 *  - Set date range to search through
 *  - Limit how many emails they can accept
 *  - Delete their account
 *
 * TODO: Need to user test the swiping back gesture when in this Stack (Keep or disabled)
 * @version 0.3.2
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
      <ScrollView>
        <AboutButton />
        <DateRangeButton />
        <EmailLimitButton />
        <NotificationCadenceButton />
        <ParametersButton />
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
  deleteContainer: {
    marginTop: 4,
  },
});
