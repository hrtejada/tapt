import { Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  title: string;
  onPress: () => void;
  type: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
  textStyle?: null | object;
  disabled?: boolean;
  children?: React.ReactNode;
}

const buttonColors = {
  primary: GlobalStyles.colors.primary500,
  secondary: GlobalStyles.colors.secondary500,
  tertiary: GlobalStyles.colors.accent500,
};
const pressedColors = {
  primary: GlobalStyles.colors.primary700,
  secondary: GlobalStyles.colors.secondary700,
  tertiary: GlobalStyles.colors.accent700,
};
const textColors = {
  primary: GlobalStyles.colors.primary500,
  secondary: GlobalStyles.colors.secondary500,
  tertiary: GlobalStyles.colors.accent500,
};
const paddings = {
  small: 8,
  medium: 12,
  large: 16,
};
const fontSizes = {
  small: 14,
  medium: 18,
  large: 22,
};

/**
 * Main button component
 *
 * TODO: Refine this. Might be overengineered ಠ_ಠ
 *
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Button = ({
  title,
  onPress,
  type,
  size,
  textStyle,
  disabled = false,
  children,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: buttonColors[type],
        },
        pressed && { backgroundColor: pressedColors[type] },
      ]}
      disabled={disabled}
    >
      {children || <Text style={[styles.text, textStyle]}>{title}</Text>}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    minWidth: 44,
    minHeight: 44,
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    shadowColor: GlobalStyles.colors.accent700,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.75,
    textAlign: "center",
  },
  text: {
    color: GlobalStyles.colors.text,
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});
