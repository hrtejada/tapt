import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  text: string;
  onDelete: () => void;
}

/**
 * Component to display text and have a delete funcitonality.
 *
 * TODO: Extract generic Chip Component and have one for Pressable and one with Deleting
 *
 * @version 0.1.3
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Chip = ({ text, onDelete }: Props) => {
  return (
    <View style={styles.chip}>
      <Text style={styles.text}>{text}</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onDelete}
      >
        <FontAwesome5
          name="times"
          size={22}
          color={GlobalStyles.colors.accent700}
        />
      </Pressable>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.secondary500,
    margin: 4,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: GlobalStyles.colors.text,
    height: 32,
  },
  text: {
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingRight: 6,
    fontSize: 16,
  },
  button: {
    backgroundColor: GlobalStyles.colors.primary500,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
