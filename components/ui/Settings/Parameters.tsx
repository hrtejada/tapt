import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../../constants/styles";
import { DUMMY_SETTING } from "../../../testData/DUMMY_DATA";
import Button from "../Button";
import Chip from "../Chip";
import HeaderTwo from "../HeaderTwo";

/**
 * Component for the Settings Screen that will hold the parameters setting.
 *
 * TODO: Determine where to validate TextInput
 *
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Parameters = () => {
  const [parameters, setParameters] = useState<string[]>(
    DUMMY_SETTING.parameters || []
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
    setParameters((prevParams) => [...prevParams, newParameter]);
    setModalVisible(false);
    setNewParameter("");
  };

  return (
    <View style={styles.container}>
      <HeaderTwo>Set data to parse from emails</HeaderTwo>
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
            pressed && styles.pressed,
            styles.addParamButton,
          ]}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesome5
            name="plus"
            size={32}
            color={GlobalStyles.colors.background100}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Parameters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.accent700,
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonContainer: {
    marginTop: 12,
  },
  addParamButton: {
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 10,
    borderRadius: 50,
  },
  pressed: {
    opacity: 0.75,
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
