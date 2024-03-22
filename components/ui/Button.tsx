import { Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  title: string;
  onPress: () => void;
  type: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
  isFlat?: boolean;
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
  primary: GlobalStyles.colors.text,
  secondary: GlobalStyles.colors.text,
  tertiary: GlobalStyles.colors.text,
};
const paddings = {
  small: 8,
  medium: 12,
  large: 16,
};
const fontSizes = {
  small: 15,
  medium: 18,
  large: 21,
};

/**
 * Main button component
 *
 * Moderately customizable button.
 * Use props to determine styling.
 * Can either use a title prop for button text, or pass a child component
 *
 * TODO: Decide if there should be default values for some props
 *
 * @version 0.4.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Button = ({
  title,
  onPress,
  type,
  size,
  disabled = false,
  isFlat = false,
  children,
}: Props) => {
  const buttonStyles = [
    styles.button,
    !isFlat && styles.notFlat,
    disabled && styles.disabled,
    {
      backgroundColor: buttonColors[type],
      padding: paddings[size],
    },
  ];

  const textStyles = [
    {
      color: textColors[type],
      fontSize: fontSizes[size],
    },
  ];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        ...buttonStyles,
        pressed && { backgroundColor: pressedColors[type] },
      ]}
      disabled={disabled}
    >
      {children || <Text style={textStyles}>{title}</Text>}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    minWidth: 44,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  notFlat: {
    borderRadius: 8,
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 2, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.75,
  },
  disabled: {
    opacity: 0.4,
  },
  pressed: {
    opacity: 0.75,
  },
});
