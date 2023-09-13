import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import HeaderTwo from "../HeaderTwo";
import { GlobalStyles } from "../../../constants/styles";
import { DUMMY_SETTING } from "../../../testData/DUMMY_DATA";
import { useState, useRef, createRef } from "react";

/**
 * Component that holds the email limit functionality.
 *
 * TODO: Finish fleshing this out.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailLimit = () => {
  const [limit, setLimit] = useState(DUMMY_SETTING.limit.toString() || "0");
  const limitRef = createRef<TextInput>();

  const onChangeLimit = (enteredText: string) => {
    setLimit(enteredText);
  };

  const focusOnInput = () => {
    // TODO: Look into slight lag
    // TODO: Different way to acheive this other than refs?
    limitRef.current?.focus();
  };

  const handleEndEditing = () => {
    const newLimit = parseInt(limit);

    if (isNaN(newLimit)) {
      Alert.alert("Invalid Input", "Please enter a valid number", [
        {
          text: "OK",
          style: "default",
          onPress: focusOnInput,
        },
      ]);
      return;
    }
    if (newLimit < 0 || newLimit > 150) {
      Alert.alert("Limit out of range", "Range is 0 - 150", [
        {
          text: "OK",
          style: "default",
          onPress: focusOnInput,
        },
      ]);
      return;
    }
    console.log("Limit", limit);
  };

  return (
    <View style={styles.container}>
      <HeaderTwo>Limit accepted emails</HeaderTwo>
      <Text>
        Change the amount of emails you would like to accept for the booking
        window (0 = No limit)
      </Text>
      <TextInput
        style={styles.input}
        value={limit}
        maxLength={3}
        keyboardType="number-pad"
        inputMode="numeric"
        returnKeyType="done"
        textAlign="center"
        onChangeText={onChangeLimit}
        onEndEditing={handleEndEditing}
        ref={limitRef}
      />
    </View>
  );
};

export default EmailLimit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.accent700,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    margin: 8,
    height: 50,
    width: "20%",
    fontSize: 24,
    backgroundColor: GlobalStyles.colors.background200,
  },
});
