import { Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  title: string;
  onPress: () => void;
  type: "primary" | "secondary";
  style?: null | object;
  textStyle?: null | object;
  disabled?: boolean;
  children?: React.ReactNode;
}

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
  style,
  textStyle,
  disabled = false,
  children,
}: Props) => {
  const backgroundColor = {
    backgroundColor:
      type === "primary"
        ? GlobalStyles.colors.primary500
        : GlobalStyles.colors.secondary500,
  };

  const pressedBG = {
    backgroundColor:
      type === "primary"
        ? GlobalStyles.colors.primary700
        : GlobalStyles.colors.secondary700,
  };
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        backgroundColor,
        style,
        pressed && pressedBG,
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
  text: {
    color: GlobalStyles.colors.text,
    textAlign: "center",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});
