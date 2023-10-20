import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import ParameterModal from "../../components/Settings/ParameterModal";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import Chip from "../../components/ui/Chip";
import HeaderThree from "../../components/ui/HeaderThree";
import { GlobalStyles } from "../../constants/styles";
import { PARAMETERS, TYPES } from "../../constants/words";
import { useUserContext } from "../../store/user-context";

/**
 * Component for the parameters setting.
 *
 * TODO: Determine where to validate TextInput
 * TODO: Restyle this screen 🐱‍👤
 *
 * @version 0.2.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ParametersScreen = () => {
  const { state, dispatch } = useUserContext();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newParameter, setNewParameter] = useState("");

  /**
   * Set the email header value.
   */
  const setHeader = (enteredText: string) => {
    // TODO: Implement input validation for Front End
    dispatch({ type: TYPES.HEADER, payload: enteredText });
  };

  /**
   * Remove the parameter from the user's parameters array.
   */
  const deleteChipHandler = (parameter: string) => {
    // Do Backend stuff...
    dispatch({ type: TYPES.DELETE, payload: parameter });
  };

  /**
   * Add the parameter to the user's parameters array.
   *
   * Dismiss the Modal and reset the TextInput
   */
  const addParamHandler = () => {
    // TODO: Implement input validation for Front End
    // Convert to lowercase so keys match up when retrieving on EmailScreen
    const newParameter_LC = newParameter.toLowerCase();

    // Check if input is empty
    if (newParameter_LC === "") {
      Alert.alert("Invalid Input", "Parameter can't be empty", [
        {
          text: "OK",
          style: "default",
        },
      ]);

      return;
    }

    //Check if input already exists
    if (state.parameters.includes(newParameter_LC)) {
      Alert.alert("Invalid Input", "Parameter already exists", [
        {
          text: "OK",
          style: "default",
        },
      ]);

      return;
    }
    // Do Backend stuff...
    dispatch({ type: TYPES.ADD, payload: newParameter_LC });
    setIsModalVisible(false);
    setNewParameter("");
  };

  return (
    <SettingsContainer header={PARAMETERS.header} info={PARAMETERS.info}>
      <View style={styles.headerContainer}>
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
      <View style={styles.parametersContainer}>
        <HeaderThree>Email data to look for:</HeaderThree>
        <View style={styles.chipsContainer}>
          {state.parameters.map((parameter) => (
            <Chip
              key={parameter}
              text={parameter}
              onDelete={deleteChipHandler.bind(this, parameter)}
            />
          ))}
        </View>
      </View>
      <ParameterModal
        isVisible={isModalVisible}
        param={newParameter}
        modalHandler={setIsModalVisible}
        setParam={setNewParameter}
        submitParam={addParamHandler}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.addParamButton,
            pressed && styles.pressed,
          ]}
          onPress={() => setIsModalVisible(true)}
        >
          <FontAwesome5
            name="plus"
            size={36}
            color={GlobalStyles.colors.background100}
          />
        </Pressable>
      </View>
    </SettingsContainer>
  );
};

export default ParametersScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    marginBottom: 12,
  },
  parametersContainer: {
    flex: 2,
  },
  chipsContainer: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 12,
  },
  buttonContainer: {
    flex: 2,
  },
  addParamButton: {
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary700,
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
