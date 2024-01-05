import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import HeaderInput from "../../components/Settings/Parameters/HeaderInput";
import ParameterModal from "../../components/Settings/Parameters/ParameterModal";
import Parameters from "../../components/Settings/Parameters/Parameters";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import { GlobalStyles } from "../../constants/styles";
import { PARAMETERS, USER_ACTION_TYPES } from "../../constants/words";
import { useUserContext } from "../../store/user-context";
import { validateParameter } from "../../util/parameterHelpers";

/**
 * EmailDataScreen Component.
 *
 * This component renders the screen for the email data settings.
 * Currently the settings are: email header, and email parameters.
 *
 * This is what we search for to help determine what emails to pull.
 *
 * TODO: Determine where to validate TextInput
 * TODO: Restyle this screen 🐱‍👤
 *
 * @component
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailDataScreen = () => {
  const { state, dispatch } = useUserContext();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newParameter, setNewParameter] = useState("");

  /**
   * Handle adding a parameter.
   *
   * This function adds the parameter to the User's parameters array.
   *
   * Dismiss the Modal and reset the TextInput
   */
  const handleAddParam = () => {
    // Convert to lowercase so keys match up when retrieving on EmailScreen
    const newParameter_LC = newParameter.toLowerCase();

    // TODO: Implement input validation for Front End
    const { error, title, message } = validateParameter(
      newParameter_LC,
      state.parameters
    );

    if (error) {
      Alert.alert(title, message, [
        {
          text: "OK",
          style: "default",
        },
      ]);

      return;
    }

    // Do Backend stuff...
    dispatch({ type: USER_ACTION_TYPES.ADD, payload: newParameter_LC });
    setIsModalVisible(false);
    setNewParameter("");
  };

  return (
    <SettingsContainer header={PARAMETERS.header} info={PARAMETERS.info}>
      <ParameterModal
        isVisible={isModalVisible}
        param={newParameter}
        modalHandler={setIsModalVisible}
        setParam={setNewParameter}
        submitParam={handleAddParam}
      />
      <HeaderInput />
      <Parameters />
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
            color={GlobalStyles.colors.background400}
          />
        </Pressable>
      </View>
    </SettingsContainer>
  );
};

export default EmailDataScreen;

const styles = StyleSheet.create({
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
});
