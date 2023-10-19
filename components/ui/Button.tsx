import { Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  onPress: () => void;
  buttonStyle?: null | object;
  textStyle?: null | object;
  children: React.ReactNode;
}

/**
 * Main button component
 *
 * TODO: Refine this. Might be overengineered ಠ_ಠ
 *
 * @version 0.2.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Button = ({ onPress, buttonStyle, textStyle, children }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.button,
        buttonStyle,
      ]}
    >
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 6,
    padding: 4,
    marginHorizontal: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    justifyContent: "center",
    minHeight: 40,
    shadowColor: GlobalStyles.colors.accent700,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.75,
  },
  buttonText: {
    color: GlobalStyles.colors.text,
    textAlign: "center",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});
