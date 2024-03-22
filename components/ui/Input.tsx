import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const Input = () => {
  return <TextInput style={styles.input} placeholder="test" />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.text,
    padding: 12,
    margin: 12,
    height: 55,
    // width: "20%",
    fontSize: 18,
    backgroundColor: GlobalStyles.colors.background100,
  },
});
