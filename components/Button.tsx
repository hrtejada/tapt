import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

/**
 * @prop  {Function}  onPress - Function to be called when user presses the button
 * @prop  {string}    mode - (optional) - Used to change appearance of the button
 * @prop  {object}    style - (optional) - Style object used to passed additional styling to the button
 */
type ButtonProps = {
  onPress: () => void;
  mode?: "isFlat" | "";
  style?: object;
  children: React.ReactNode;
};

/**
 * Main button component
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Button = ({ onPress, mode, style, children }: ButtonProps) => {
  const isFlat = mode === "isFlat";

  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, isFlat && styles.flat]}>
          <Text style={[styles.buttonText, isFlat && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    minHeight: 50,
    minWidth: 100,
    justifyContent: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  flatText: {
    color: GlobalStyles.colors.primary300,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary700,
    borderRadius: 4,
  },
});
