import { useState } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  title: string;
  onPress: () => void;
  style?: null | object;
  textStyle?: null | object;
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
  children,
}: Props) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 25,
      easing: Easing.bounce,
      useNativeDriver: true, // Use native driver for performance
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 25,
      easing: Easing.bounce,
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
            { transform: [{ scale: scaleValue }] },
            style,
            pressed && styles.pressed,
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
    backgroundColor: GlobalStyles.colors.secondary500,
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.secondary700,
  },
  text: {
    color: GlobalStyles.colors.text,
    fontSize: 18,
  },
});
