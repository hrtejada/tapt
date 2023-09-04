import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * @prop  {Function}  onPress - Function to be called when user presses the button
 * @prop  {string}    mode - (optional) - Used to change appearance of the button
 * @prop  {object}    buttonStyle - (optional) - Style object used to passed additional styling to the button
 * @prop  {object}    textStyle - (optional) - Style object used to passed additional styling to the button text
 */
type ButtonProps = {
  onPress: () => void;
  mode?: "isFlat" | "";
  buttonStyle?: object;
  textStyle?: object;
  children: React.ReactNode;
};

/**
 * Main button component
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Button = ({
  onPress,
  mode,
  buttonStyle,
  textStyle,
  children,
}: ButtonProps) => {
  const isFlat = mode === "isFlat";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.pressed,
        buttonStyle,
        styles.button,
      ]}
    >
      <View style={[isFlat && styles.flat]}>
        <Text style={[styles.buttonText, textStyle, isFlat && styles.flatText]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    justifyContent: "center",
    minHeight: 60,
    shadowColor: GlobalStyles.colors.secondary500,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.75,
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
  },
});
