import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * BackButton Component.
 *
 * This component renders a button that is used to go back one screen.
 *
 * @component
 * @version 0.2.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <View style={styles.innerContainer}>
        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
        <Text style={styles.buttonText}>Back</Text>
      </View>
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.secondary500,
    borderRadius: 4,
    position: "relative",
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.95,
    shadowRadius: 1,
    width: "25%",
  },
  innerContainer: {
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 18,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.secondary700,
  },
});
