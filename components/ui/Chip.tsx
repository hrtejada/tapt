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
 * @version 0.1.0
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
          color={GlobalStyles.colors.accent900}
        />
      </Pressable>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: GlobalStyles.colors.primary300,
    margin: 4,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: GlobalStyles.colors.text,
    width: "auto",
  },
  text: {
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingRight: 6,
    fontSize: 16,
  },
  button: {
    backgroundColor: GlobalStyles.colors.accent100,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});