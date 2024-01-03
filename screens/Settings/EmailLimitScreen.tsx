import { createRef } from "react";
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
 * Component that holds the button to navigate to the DeleteAccounScreen.
 *
 * TODO: Check to see if input automatically gets selected on error (no need for ref??)
 *
 * @version 0.2.5
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailLimitScreen = () => {
  const { state, dispatch } = useUserContext();
  const limitRef = createRef<TextInput>(); // Used to refocus on input when invalid input is entered.

  /**
   * Update the state so the correct value is reflected in the input.
   */
  const onChangeLimit = (enteredText: string) => {
    dispatch({ type: USER_ACTION_TYPES.LIMIT, payload: enteredText });
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
    const limit = Number(state.limit);

    if (isNaN(limit)) {
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
    if (limit < 0 || limit > 150) {
      Alert.alert("Limit out of range", `Range is 0 - ${MAX_EMAIL_LIMIT}`, [
        {
          text: "OK",
          style: "default",
          onPress: focusOnInput,
        },
      ]);
      return;
    }

    // Update Backend...

    // Update limit if it is 0 so UI properly reflects value
    if (limit === 0) {
      dispatch({ type: USER_ACTION_TYPES.LIMIT, payload: limit.toString() });
    }
  };

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
          value={state.limit.toString()}
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
