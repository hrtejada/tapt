import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  onPress: () => void;
  isFlat?: null | boolean;
  buttonStyle?: null | object;
  textStyle?: null | object;
  children: React.ReactNode;
}

/**
 * Main button component
 *
 * TODO: Refine this. Might be overengineered
 *
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Button = ({
  onPress,
  isFlat,
  buttonStyle,
  textStyle,
  children,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.button,
        buttonStyle,
      ]}
    >
      <View style={[isFlat && styles.flat]}>
        <Text style={[styles.buttonText, textStyle, isFlat && styles.flatText]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    justifyContent: "center",
    minHeight: 60,
    shadowColor: GlobalStyles.colors.secondary500,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.75,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: GlobalStyles.colors.text,
    textAlign: "center",
    fontSize: 18,
  },
  flatText: {
    color: GlobalStyles.colors.primary300,
  },
  pressed: {
    opacity: 0.75,
  },
});
