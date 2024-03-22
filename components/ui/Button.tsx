import { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";

import { GlobalStyles } from "../../constants/styles";

interface Props {
  title: string;
  onPress: () => void;
  type?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  isFlat?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

const buttonColors = {
  primary: GlobalStyles.colors.primary500,
  secondary: GlobalStyles.colors.secondary500,
  tertiary: GlobalStyles.colors.accent500,
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
 * @version 0.5.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Button = ({
  title,
  onPress,
  type = "primary",
  size = "medium",
  disabled = false,
  isFlat = false,
  children,
}: Props) => {
  const scale = useRef(new Animated.Value(1)).current; // Don't trigger a re-render

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.93,
      speed: 30,
      useNativeDriver: true,
    }).start();
  };

  const handlePresOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      bounciness: 4,
      useNativeDriver: true,
    }).start();
  };

  const buttonStyles = [
    styles.buttonWrapper,
    !isFlat && styles.button,
    {
      backgroundColor: buttonColors[type],
      padding: paddings[size],
      transform: [{ scale: scale }],
      borderRadius: isFlat ? 0 : 8,
      opacity: disabled ? 0.4 : 1,
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
      onPressIn={handlePressIn}
      onPressOut={handlePresOut}
      disabled={disabled}
    >
      <Animated.View style={[...buttonStyles]}>
        {children || (
          <Text style={[textStyles, { fontWeight: "600" }]}>{title}</Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrapper: {
    minWidth: 44,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 2, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.75,
  },
});
