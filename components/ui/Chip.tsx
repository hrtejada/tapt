import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  text: string;
  onDelete: () => void;
}

/**
 * Chip Component.
 *
 * This component renders a rounded rectangle that contains text
 * and has an 'X' button on the right side to serve as a delete funciton.
 *
 * TODO: Extract generic Chip Component and have one for Pressable and one with Deleting
 *
 * @component
 * @version 0.2.0
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
        <FontAwesome5 name="times" size={22} color={GlobalStyles.colors.text} />
      </Pressable>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.secondary700,
    margin: 4,
    paddingLeft: 10,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.text,
    overflow: "hidden",
  },
  text: {
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingRight: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: GlobalStyles.colors.primary400,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
