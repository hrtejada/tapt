import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import DateRange from "../components/Settings/DateRange";
import DeleteAccountButton from "../components/Settings/DeleteAccountButton";
import EmailLimitButton from "../components/Settings/EmailLimitButton";
import Parameters from "../components/Settings/Parameters";
import { GlobalStyles } from "../constants/styles";

import FlatButton from "../components/Settings/FlatButton";
import { SettingsStackProps } from "../util/screen-navigation";

/**
 * Settings Screen where the user can perform various actions.
 *
 * The user can
 *  - Logout
 *  - Set how oftern data is retrieved from their email
 *  - Set what data to parse from what emails
 *  - Set date range to search through
 *  - Limit how many emails they can accept
 *  - Delete their account
 *
 * TODO: Need to user test the swiping back gesture when in this Stack (Keep or disabled)
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const SettingsScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>About App</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Set data retrieval cadence</Text>
          <Text>Determine how to represent this</Text>
        </View>
        <Parameters />
        <DateRange />
        <EmailLimitButton />
        <DeleteAccountButton />
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
  // TODO: Check 'container' styling on all children to see about simplifying
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.accent700,
  },
  text: {
    color: GlobalStyles.colors.text,
    fontSize: 24,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: GlobalStyles.colors.accent700,
  },
  deleteButtonText: {
    color: GlobalStyles.colors.background100,
  },
  flatButton: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.accent100,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  flatButtonText: {
    fontSize: 22,
  },
  buttonTitleContainer: {
    flex: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary300,
  },
  buttonRightContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary500,
  },
});
