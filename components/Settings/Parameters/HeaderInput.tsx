import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import { TYPES } from "../../../constants/words";
import { useUserContext } from "../../../store/user-context";
import HeaderThree from "../../ui/HeaderThree";

/**
 * Component for the parameters setting.
 *
 * TODO: Look into extracting TextInput
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const HeaderInput = () => {
  const { state, dispatch } = useUserContext();

  /**
   * Set the email header value.
   */
  const setHeader = (enteredText: string) => {
    // TODO: Implement input validation for Front End
    dispatch({ type: TYPES.HEADER, payload: enteredText });
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
    height: 50,
    fontSize: 24,
    backgroundColor: GlobalStyles.colors.background200,
  },
});
