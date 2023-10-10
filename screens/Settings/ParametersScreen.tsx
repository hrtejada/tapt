import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import Button from "../../components/ui/Button";
import Chip from "../../components/ui/Chip";
import { GlobalStyles } from "../../constants/styles";
import { PARAMETERS } from "../../constants/words";
import { DUMMY_USER_1 } from "../../testData/DUMMY_DATA";

/**
 * Component for the parameters setting.
 *
 * TODO: Determine where to validate TextInput
 *
 * @version 0.1.4
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ParametersScreen = () => {
  const [parameters, setParameters] = useState<string[]>(
    DUMMY_USER_1.settings.parameters || []
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [newParameter, setNewParameter] = useState("");

  /**
   * Remove the parameter from the user's parameters array.
   */
  const deleteChipHandler = (parameter: string) => {
    setParameters((prevParams) =>
      prevParams.filter((param) => param !== parameter)
    );
  };

  /**
   * Add the parameter to the user's parameters array.
   *
   * Dismiss the Modal and reset the TextInput
   */
  const addParamHandler = () => {
    // TODO: Implement input validation for Front End
    setParameters((prevParams) => {
      const cleanedParam = newParameter.trim();
      return [...prevParams, cleanedParam];
    });
    setModalVisible(false);
    setNewParameter("");
  };

  return (
    <SettingsContainer header={PARAMETERS.header} info={PARAMETERS.info}>
      <View style={styles.chipsContainer}>
        {parameters.map((parameter) => (
          <Chip
            key={parameter}
            text={parameter}
            onDelete={deleteChipHandler.bind(this, parameter)}
          />
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centerModal}>
          <View style={styles.modal}>
            <Text>New Parameter to look for</Text>
            <TextInput
              style={styles.input}
              value={newParameter}
              maxLength={32}
              keyboardType="default"
              inputMode="text"
              textAlign="center"
              onChangeText={setNewParameter}
            />
            <Button onPress={addParamHandler}>Add</Button>
            <Button onPress={() => setModalVisible(false)}>Cancel</Button>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.addParamButton,
            pressed && styles.pressed,
          ]}
          onPress={() => setModalVisible(true)}
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
  chipsContainer: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
  },
  buttonContainer: {
    flex: 2,
    // alignItems: "center",
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
  centerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: GlobalStyles.colors.background200,
    padding: 25,
    width: "80%",
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
