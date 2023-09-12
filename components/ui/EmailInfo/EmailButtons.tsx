import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import { ACCEPT, REJECT } from "../../../constants/words";
import IconButton from "../IconButton";

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
      <IconButton type={ACCEPT} onPress={onAccept} />
      <IconButton type={REJECT} onPress={onReject} />
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
});
