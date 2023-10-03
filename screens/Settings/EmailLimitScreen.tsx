import { createRef, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GoBackButton from "../../components/Settings/GoBackButton";
import HeaderTwo from "../../components/ui/HeaderTwo";
import { GlobalStyles } from "../../constants/styles";
import { DUMMY_USER_1 } from "../../testData/DUMMY_DATA";

/**
 * Component that holds the button to navigate to the DeleteAccounScreen.
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailLimitScreen = () => {
  const insets = useSafeAreaInsets();
  const [limit, setLimit] = useState(
    DUMMY_USER_1.settings.limit.toString() || "0"
  );
  const limitRef = createRef<TextInput>(); // Used to refocus on input when invalid input is entered.

  /**
   * Update the state so the correct value is reflected in the input.
   */
  const onChangeLimit = (enteredText: string) => {
    setLimit(enteredText);
  };

  /**
   * Focus back on the input after user dismissed an Alert related to invalid input.
   */
  const focusOnInput = () => {
    // TODO: Look into slight lag
    // TODO: Different way to acheive this other than refs?
    limitRef.current?.focus();
  };

  /**
   * Check the input entered by the user.
   *
   * If an invalid input is found, raise an Alert.
   * TODO: VALIDATION LOGIC 😎
   */
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
    // TODO: Decide on the limit of limit 🤷‍♂️
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
  };

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
      <GoBackButton />
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
    </View>
  );
};

export default EmailLimitScreen;

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
