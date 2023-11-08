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
  const icon = type === ACCEPT ? "check" : "times";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor:
            type === ACCEPT
              ? GlobalStyles.colors.success500
              : GlobalStyles.colors.warning500,
        },
        pressed && {
          backgroundColor:
            type === ACCEPT
              ? GlobalStyles.colors.success700
              : GlobalStyles.colors.warning700,
        },
      ]}
    >
      <FontAwesome5 name={icon} size={48} color={GlobalStyles.colors.text} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 6,
    borderRadius: 50,
    width: "40%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  // pressed: {
  //   opacity: 0.75,
  // },
});
