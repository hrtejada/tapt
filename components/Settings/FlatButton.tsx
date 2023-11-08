import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  leftIcon: React.ReactNode;
  onPress: () => void;
  children: React.ReactNode;
}

/**
 * Flat button component.
 *
 * Used on SettingsScreen
 *
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const FlatButton = ({ leftIcon, onPress, children }: Props) => {
  const rightIcon = (
    <FontAwesome5
      name="angle-right"
      size={FLAT_BUTTON_ICON_SIZE}
      color="black"
    />
  );

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.flatButton, pressed && styles.pressed]}
    >
      <View style={styles.titleContainer}>
        <View style={styles.leftIconContainer}>{leftIcon}</View>
        <Text style={styles.text}>{children}</Text>
      </View>
      <View style={styles.rightIconContainer}>{rightIcon}</View>
    </Pressable>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  flatButton: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.background100,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },
  titleContainer: {
    flex: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  leftIconContainer: {
    paddingRight: 20,
    minWidth: 60,
    alignItems: "flex-end",
  },
  rightIconContainer: {
    flex: 1,
    alignItems: "center",
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.background200,
  },
});
