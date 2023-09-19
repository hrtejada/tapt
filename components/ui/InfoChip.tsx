import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ACCEPT } from "../../constants/words";

interface Props {
  text: string;
  mode: null | string | undefined;
  onPress: (param: string) => void;
}

/**
 * Component to display text and have a pressable functionality.
 *
 * TODO: Check to see if Chip can be combined
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const InfoChip = ({ text, mode, onPress }: Props) => {
  const [modeStyle, setModeStyle] = useState({});

  /**
   * Change the backgroundColor on press.
   *
   * Change the backgroundColor of the InfoChip depending on the mode.
   */
  const pressHandler = () => {
    setModeStyle((prevModeStyle) => {
      if (!prevModeStyle.hasOwnProperty("backgroundColor")) {
        return {
          ...prevModeStyle,
          backgroundColor: mode === ACCEPT ? "#00CC00" : "#CC0000",
        };
      }
      return {
        ...prevModeStyle,
        backgroundColor: GlobalStyles.colors.primary300,
      };
    });
    onPress(text);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.chip,
        modeStyle,
      ]}
      onPress={pressHandler}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default InfoChip;

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary300,
    margin: 4,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: GlobalStyles.colors.text,
    height: 30,
  },
  text: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});
