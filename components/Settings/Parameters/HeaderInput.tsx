import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import { USER_ACTION_TYPES } from "../../../constants/words";
import { useUserContext } from "../../../store/user-context";
import HeaderThree from "../../ui/HeaderThree";

/**
 * HeaderInput Component.
 *
 * This component renders the Email Header input for the email
 * data setting.
 *
 * TODO: Look into extracting TextInput
 * TODO: Same issue as Email Limit of hitting Back Button to exit with set data no matter what.
 * TODO: Determine max length of email header
 *
 * @component
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const HeaderInput = () => {
  const { state, dispatch } = useUserContext();

  /**
   * Function to set the email header value.
   */
  const setHeader = (enteredText: string) => {
    // TODO: Implement input validation for Front End
    dispatch({ type: USER_ACTION_TYPES.HEADER, payload: enteredText });
  };

  return (
    <View style={styles.container}>
      <HeaderThree>Email header to look for:</HeaderThree>
      <KeyboardAvoidingView>
        <TextInput
          style={styles.input}
          value={state.header}
          keyboardType="default"
          inputMode="text"
          returnKeyType="done"
          maxLength={128}
          onChangeText={setHeader}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default HeaderInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    margin: 8,
    fontSize: 24,
    backgroundColor: GlobalStyles.colors.background100,
  },
});
