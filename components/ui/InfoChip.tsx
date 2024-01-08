import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { EMAIL_ACTIONS } from "../../constants/words";

interface Props {
  text: string;
  replyType: string;
  onPress: (param: string) => void;
}

/**
 * InfoChip Component.
 *
 * This component renders the parameter text and has a pressable functionality.
 *
 * TODO: Check to see if Chip can be combined
 * TODO: See about different chip background colors depend on flow
 *
 * @component
 * @version 0.1.4
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const InfoChip = ({ text, replyType, onPress }: Props) => {
  const [modeStyle, setModeStyle] = useState({
    backgroundColor: GlobalStyles.colors.background500,
  });

  const pressedBackground = {
    backgroundColor:
      replyType === EMAIL_ACTIONS.ACCEPT
        ? GlobalStyles.colors.primary300
        : GlobalStyles.colors.secondary300,
  };

  /**
   * Handle chip press.
   *
   * Change the backgroundColor of the InfoChip depending on the mode.
   */
  const handlePress = () => {
    setModeStyle((prevModeStyle) => {
      let bg = {
        backgroundColor:
          replyType === EMAIL_ACTIONS.ACCEPT
            ? GlobalStyles.colors.primary500
            : GlobalStyles.colors.secondary500,
      };

      return prevModeStyle["backgroundColor"] ===
        GlobalStyles.colors.background500
        ? bg
        : { backgroundColor: GlobalStyles.colors.background500 };
    });

    onPress(text);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.chip,
        modeStyle,
        pressed && pressedBackground,
      ]}
      onPress={handlePress}
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
    backgroundColor: GlobalStyles.colors.primary300,
  },
});
