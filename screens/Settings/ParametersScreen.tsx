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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GoBackButton from "../../components/Settings/GoBackButton";
import InfoSection from "../../components/Settings/InfoSection";
import Button from "../../components/ui/Button";
import Chip from "../../components/ui/Chip";
import { GlobalStyles } from "../../constants/styles";
import { DUMMY_DETAILS } from "../../constants/words";
import { DUMMY_USER_1 } from "../../testData/DUMMY_DATA";

/**
 * Component for the parameters setting.
 *
 * TODO: Determine where to validate TextInput
 *
 * TODO: Extract "Info Section" into it's own component
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ParametersScreen = () => {
  const insets = useSafeAreaInsets();
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
      <View style={styles.innerContainer}>
        <InfoSection
          headerText="Set data to parse from Emails"
          details={DUMMY_DETAILS}
        />
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
    </View>
  );
};

export default ParametersScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background300,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  infoContainer: {
    flex: 2,
    marginTop: 8,
  },
  infoText: {
    fontSize: 18,
  },
  chipsContainer: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonContainer: {
    flex: 2,
    alignItems: "center",
  },
  addParamButton: {
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 10,
    borderRadius: 25,
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
