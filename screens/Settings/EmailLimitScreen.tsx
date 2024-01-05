import { createRef, useState, useEffect } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import { GlobalStyles } from "../../constants/styles";
import { EMAIL_LIMIT, USER_ACTION_TYPES } from "../../constants/words";
import { useUserContext } from "../../store/user-context";
import { MAX_EMAIL_LIMIT, TEXT_LIST_BULLET } from "../../constants/constants";

interface ConstraintData {
  key: string;
}

const CONTRAINTS = [
  { key: "For No Limit, enter zero(0)" },
  { key: `Max email limit is ${MAX_EMAIL_LIMIT}` },
];

/**
 * EmailLimitScreen Component.
 *
 * This component renders the screen that allows the User to set an email limit.
 *
 * TODO: Check to see if input automatically gets selected on error (no need for ref??)
 * TODO: Should we rethink the 0 == No Limit; Should we add a toggle to set the limit?
 * TODO: Should input clear when focused, or keep the current hacky to clear preceding 0?
 * TODO: Refresh on how to delay renders depending on key input timing
 * TODO: Add a visual indicator on screen for valid input save || Add a 'save' button
 *
 * @component
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailLimitScreen = () => {
  const { state, dispatch } = useUserContext();
  const [tempLimit, setTempLimit] = useState(state.limit); // Used to prevent the incorrect value being sent if Back Button is pressed
  const [shouldFocus, setShouldFocus] = useState(false);
  const limitRef = createRef<TextInput>(); // Used to refocus on input when invalid input is entered.

  useEffect(() => {
    if (shouldFocus) {
      limitRef.current?.focus();
      setShouldFocus(false);
    }
  }, [shouldFocus]);

  /**
   * Handle the limit change.
   *
   * Update the state so the correct value is reflected in the input.
   */
  const handleLimitChange = (enteredText: string) => {
    if (enteredText.length > 1 && enteredText[0] === "0") {
      enteredText = String(Number(enteredText));
    }
    setTempLimit(enteredText);
  };

  /**
   * Function to succeed invalid input.
   *
   * Focus back on the input after the User dismisses an Alert related to invalid input,
   * and reset tempLimit
   */
  const resetLimitAndFocus = () => {
    setTempLimit("");
    setShouldFocus(true);
  };

  /**
   * Handle the User input.
   *
   * Validate the input entered by the User.
   * If an invalid input is found, raise an Alert.
   * TODO: VALIDATION LOGIC 😎
   */
  const handleEndEditing = () => {
    const limit = Number(tempLimit); // Cast from String

    if (isNaN(limit)) {
      resetLimitAndFocus();

      Alert.alert("Invalid Input", "Please enter a valid number", [
        {
          text: "OK",
          style: "default",
          onPress: resetLimitAndFocus,
        },
      ]);
      return;
    }
    // TODO: Decide on the limit of limit 🤷‍♂️
    if (limit < 0 || limit > MAX_EMAIL_LIMIT) {
      resetLimitAndFocus();

      Alert.alert("Limit out of range", `Range is 0 - ${MAX_EMAIL_LIMIT}`, [
        {
          text: "OK",
          style: "cancel",
          onPress: resetLimitAndFocus,
        },
      ]);
      return;
    }

    // Update Backend...

    // Update Context
    dispatch({
      type: USER_ACTION_TYPES.LIMIT,
      payload: limit === 0 ? "" : limit.toString(),
    });
  };

  /**
   * Function to render the constraints.
   *
   * Create a bullet list for the constraints provided to this component.
   */
  const renderConstraints = ({ item }: { item: ConstraintData }) => {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 18 }}>
          {`${TEXT_LIST_BULLET} ${item.key}`}
        </Text>
      </View>
    );
  };

  return (
    <SettingsContainer header={EMAIL_LIMIT.header} info={EMAIL_LIMIT.info}>
      <View style={styles.inputContainer}>
        <FlatList
          data={CONTRAINTS}
          keyExtractor={(item) => item.key}
          renderItem={renderConstraints}
          style={{ marginBottom: 10 }}
        />
        <TextInput
          style={styles.input}
          value={tempLimit}
          maxLength={3}
          keyboardType="numeric"
          inputMode="numeric"
          returnKeyType="done"
          textAlign="center"
          onChangeText={handleLimitChange}
          onEndEditing={handleEndEditing}
          ref={limitRef}
        />
      </View>
    </SettingsContainer>
  );
};

export default EmailLimitScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
    padding: 12,
    margin: 8,
    height: 55,
    width: "20%",
    fontSize: 28,
    backgroundColor: GlobalStyles.colors.background100,
  },
});
