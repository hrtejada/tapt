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
 * Animated button to give more of a button push feel.
 *
 * TODO: Maybe make different types of animated buttons?
 * TODO: Style disabled
 *
 * @version 0.2.0
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
          ? GlobalStyles.colors.primary700
          : GlobalStyles.colors.secondary700,
    }),
    [type]
  );

  /**
   * Function to scale down the button
   */
  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.975,
      duration: 25,
      easing: Easing.ease,
      useNativeDriver: true, // Use native driver for performance
    }).start();
  };

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
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
  },
  text: {
    color: GlobalStyles.colors.text,
    fontSize: 18,
  },
});
