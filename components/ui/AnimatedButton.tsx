import { useMemo, useRef } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text } from "react-native";

import { GlobalStyles } from "../../constants/styles";

interface Props {
  title: string;
  onPress: () => void;
  type: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
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
 * AnimatedButton Component.
 *
 * This component renders an animated button to give more of a button push feel.
 *
 * TODO: Maybe make different types of animated buttons?
 * TODO: Style disabled
 *
 * @component
 * @version 0.4.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const AnimatedButton = ({
  title,
  onPress,
  type = "primary",
  size,
  disabled = false,
  children,
}: Props) => {
  const scaleValue = useRef(new Animated.Value(1)).current; // Don't trigger a re-render

  const buttonStyles = [
    styles.button,
    disabled && styles.disabled,
    {
      backgroudColor: buttonColors[type],
      padding: paddings[size],
    },
  ];

  const textStyles = [
    {
      color: textColors[type],
      fontSize: fontSizes[size],
    },
  ];

  /**
   * Handle the press in.
   *
   * Scales the button down when the User presses the button.
   */
  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.975,
      duration: 25,
      easing: Easing.ease,
      useNativeDriver: true, // Use native driver for performance
    }).start();
  };

  /**
   * Handle the press out.
   *
   * Scales the button back up when the User releases the button.
   */
  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 25,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      {({ pressed }) => (
        <Animated.View
          style={[
            ...buttonStyles,
            { transform: [{ scale: scaleValue }] },
            pressed && { backgroundColor: pressedColors[type] },
          ]}
          testID="animated-button"
        >
          {children || <Text style={textStyles}>{title}</Text>}
        </Animated.View>
      )}
    </Pressable>
  );
};

export default AnimatedButton;

const styles = StyleSheet.create({
  button: {
    minWidth: 44,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  disabled: {
    opacity: 0.4,
  },
});
