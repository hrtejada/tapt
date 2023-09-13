import { ScrollView, StyleSheet, Text, View } from "react-native";
import DeleteAccount from "../components/ui/Settings/DeleteAccount";
import { GlobalStyles } from "../constants/styles";

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
 * @version 0.2.0
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
        <View style={styles.container}>
          <Text style={styles.text}>Set data to parse from emails</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Set Date Range</Text>
          <Text>Two date inputs, one for start, one for end</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Limit accepted emails</Text>
          <Text>One text input to set a value</Text>
        </View>
        <DeleteAccount />
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
});
