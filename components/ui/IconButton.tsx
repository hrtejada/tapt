import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ACCEPT, REJECT } from "../../constants/words";

// TODO: Look into issue with using constants in the Prop Types for a component
interface Props {
  type: typeof ACCEPT | typeof REJECT;
  onPress: () => void;
}

/**
 * Button to display only an Icon.
 *
 * Main use is for the Email Screen.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const IconButton = ({ type, onPress }: Props) => {
  const icon = type === ACCEPT ? "check-circle" : "times";
  const extraStyles =
    type === ACCEPT ? { backgroundColor: "green" } : { backgroundColor: "red" };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.iconContainer,
        extraStyles,
      ]}
    >
      <FontAwesome5 name={icon} size={56} color={GlobalStyles.colors.text} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconContainer: {
    padding: 18,
    borderRadius: 50,
    width: 92,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
