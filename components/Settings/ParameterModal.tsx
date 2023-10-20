import { Modal, Pressable, StyleSheet, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from "../ui/Button";
import HeaderThree from "../ui/HeaderThree";

interface Props {
  isVisible: boolean;
  param: string;
  modalHandler: (visibility: boolean) => void;
  setParam: (parameter: string) => void;
  submitParam: () => void;
}

/**
 * Modal for entering new parameters.
 *
 * TODO: Test out different modal stylings
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ParameterModal = ({
  isVisible,
  param,
  modalHandler,
  setParam,
  submitParam,
}: Props) => {
  const setParamHandler = (enteredText: string) => {
    setParam(enteredText);
  };

  const dismissModalHandler = () => {
    modalHandler(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => modalHandler(false)}
    >
      <View style={styles.centerModal}>
        <Pressable style={styles.modalOverlay} onPress={dismissModalHandler} />
        <View style={styles.modal}>
          <HeaderThree>New Parameter to look for:</HeaderThree>
          <TextInput
            style={styles.input}
            value={param}
            maxLength={32}
            keyboardType="default"
            inputMode="text"
            textAlign="center"
            onChangeText={setParamHandler}
          />
          <View style={styles.buttonsContainer}>
            <Button onPress={submitParam}>Add</Button>
            <Button
              buttonStyle={styles.cancelButton}
              onPress={() => modalHandler(false)}
            >
              Cancel
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ParameterModal;

const styles = StyleSheet.create({
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(174, 167, 230,0.75)",
  },
  centerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: GlobalStyles.colors.background300,
    padding: 35,
    width: "85%",
    height: 256,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.accent700,
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    margin: 12,
    height: 50,
    fontSize: 24,
    backgroundColor: GlobalStyles.colors.background200,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: GlobalStyles.colors.secondary500,
  },
});
