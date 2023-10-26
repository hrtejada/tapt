import { useState } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  title: string;
  onPress: () => void;
  style?: null | object;
  textStyle?: null | object;
  type?: "primary" | "secondary";
  children?: React.ReactNode;
}

/**
 * Animated button to give more of a button push feel.
 *
 * TODO: Maybe make different types of animated buttons?
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const AnimatedButton = ({
  title,
  onPress,
  style,
  textStyle,
  type,
  children,
}: Props) => {
  const [scaleValue] = useState(new Animated.Value(1));

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
    // flex: 1,
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
