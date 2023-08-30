import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/Button";

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
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const SettingsScreen = () => {
  const pressHandler = () => {
    // Placeholder
  };
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>About App</Text>
        </View>
        <View style={[styles.container, styles.logoutContainer]}>
          <Text style={styles.text}>Logout</Text>
          <Button onPress={pressHandler}>Logout</Button>
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
        <View style={styles.container}>
          <Text style={styles.text}>DELETE ACCOUNT</Text>
          <Button onPress={pressHandler}>DELETE</Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.accent700,
  },
  logoutContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.background500,
  },
  text: {
    color: GlobalStyles.colors.primary500,
    fontSize: 24,
    fontWeight: "bold",
  },
});
