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
 * Component for the parameters setting.
 *
 * TODO: Determine where to validate TextInput
 * TODO: Restyle this screen 🐱‍👤
 *
 * @version 0.2.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ParametersScreen = () => {
  const { state, dispatch } = useUserContext();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newParameter, setNewParameter] = useState("");

  /**
   * Add the parameter to the user's parameters array.
   *
   * Dismiss the Modal and reset the TextInput
   */
  const addParamHandler = () => {
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
        submitParam={addParamHandler}
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
            color={GlobalStyles.colors.background100}
          />
        </Pressable>
      </View>
    </SettingsContainer>
  );
};

export default ParametersScreen;

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
