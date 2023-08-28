import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: GlobalStyles.colors.primary500,
    fontSize: 24,
    fontWeight: "bold",
  },
});
