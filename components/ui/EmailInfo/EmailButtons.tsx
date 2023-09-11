import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import Button from "../Button";

interface Props {
  onAccept: () => void;
  onReject: () => void;
}

/**
 * Component that will display the accept and reject buttons
 * for the Email Screen.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailButtons = ({ onAccept, onReject }: Props) => {
  return (
    <View style={styles.buttonsContainer}>
      <Button
        buttonStyle={styles.acceptButton}
        textStyle={styles.acceptText}
        onPress={onAccept}
      >
        Accept
      </Button>
      <Button
        buttonStyle={styles.rejectButton}
        textStyle={styles.rejectText}
        onPress={onReject}
      >
        Reject
      </Button>
    </View>
  );
};

export default EmailButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary300,
    borderWidth: 2,
    borderTopColor: GlobalStyles.colors.accent700,
  },
  acceptButton: {
    backgroundColor: GlobalStyles.colors.secondary700,
  },
  acceptText: {
    color: "black",
    fontWeight: "bold",
  },
  rejectButton: {
    backgroundColor: GlobalStyles.colors.primary700,
  },
  rejectText: {
    fontWeight: "bold",
  },
});
