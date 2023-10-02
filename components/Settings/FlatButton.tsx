import { StyleSheet, Text, View, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  onPress: () => void;
  children: React.ReactNode;
}

const FlatButton = ({ leftIcon, rightIcon, onPress, children }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed, styles.flatButton]}
    >
      <View style={styles.titleContainer}>
        {leftIcon}
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
    backgroundColor: GlobalStyles.colors.accent100,
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
    backgroundColor: GlobalStyles.colors.primary300,
  },
  rightIconContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary500,
  },
  pressed: {
    opacity: 0.75,
  },
});
