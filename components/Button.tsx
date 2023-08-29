import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

type ButtonProps = {
  onPress: () => void;
  mode?: string;
  style?: object;
  children: React.ReactNode;
};

const Button = ({ onPress, mode, style, children }: ButtonProps) => {
  const isFlat = mode === "isFlat";

  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, isFlat && styles.flat]}>
          <Text style={[styles.buttonText, isFlat && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary300,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary700,
    borderRadius: 4,
  },
});
