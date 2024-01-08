import { useMemo, useRef } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  title: string;
  onPress: () => void;
  style?: null | object;
  textStyle?: null | object;
  type?: "primary" | "secondary";
  disabled?: true | false;
  children?: React.ReactNode;
}

/**
 * AnimatedButton Component.
 *
 * This component renders an animated button to give more of a button push feel.
 *
 * TODO: Maybe make different types of animated buttons?
 * TODO: Style disabled
 *
 * @component
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const AnimatedButton = ({
  title,
  onPress,
  style,
  textStyle,
  type = "primary",
  disabled = false,
  children,
}: Props) => {
  const scaleValue = useRef(new Animated.Value(1)).current; // Don't trigger a re-render

  const backgroundColor = useMemo(
    () => ({
      backgroundColor:
        type === "primary"
          ? GlobalStyles.colors.primary500
          : GlobalStyles.colors.secondary500,
    }),
    [type]
  );

  const pressedBG = useMemo(
    () => ({
      backgroundColor:
        type === "primary"
          ? GlobalStyles.colors.primary300
          : GlobalStyles.colors.secondary300,
    }),
    [type]
  );

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
            styles.button,
            backgroundColor,
            { transform: [{ scale: scaleValue }] },
            style,
            pressed && pressedBG,
          ]}
          testID="animated-button"
        >
          {children || <Text style={[styles.text, textStyle]}>{title}</Text>}
        </Animated.View>
      )}
    </Pressable>
  );
};

export default AnimatedButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  text: {
    color: GlobalStyles.colors.text,
    fontSize: 24,
  },
});
