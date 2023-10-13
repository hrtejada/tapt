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
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Chip = ({ text, onDelete }: Props) => {
  return (
    <View style={styles.chip}>
      <Text style={styles.text}>{text}</Text>
      <Pressable
        style={({ pressed }) => [pressed && styles.pressed, styles.button]}
        onPress={onDelete}
      >
        <FontAwesome5
          name="times"
          size={20}
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
    backgroundColor: GlobalStyles.colors.primary300,
    margin: 4,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: GlobalStyles.colors.text,
    height: 30,
  },
  text: {
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingRight: 6,
    fontSize: 16,
  },
  button: {
    backgroundColor: GlobalStyles.colors.accent300,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
