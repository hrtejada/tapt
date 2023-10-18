import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ACCEPT, REJECT } from "../../constants/words";

interface Props {
  type: typeof ACCEPT | typeof REJECT;
  onPress: () => void;
}

/**
 * Button to display only an Icon.
 *
 * Main use is for the Email Screen.
 *
 * TODO: Look at Expo Icon Docs to see about simpler way to make icon buttons
 *
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const IconButton = ({ type, onPress }: Props) => {
  const icon = type === ACCEPT ? "check-circle" : "times-circle";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.iconContainer,
        {
          backgroundColor:
            type === ACCEPT
              ? GlobalStyles.colors.success
              : GlobalStyles.colors.warning,
        },
      ]}
    >
      <FontAwesome5 name={icon} size={48} color={GlobalStyles.colors.text} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
    borderRadius: 50,
    width: "auto",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
