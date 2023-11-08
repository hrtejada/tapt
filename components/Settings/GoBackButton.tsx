import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * Button to navigate back to the SettingsScreen.
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const GoBackButton = () => {
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

export default GoBackButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary500,
    borderBottomColor: GlobalStyles.colors.accent300,
    borderLeftColor: GlobalStyles.colors.accent500,
    borderRadius: 3,
    borderRightColor: GlobalStyles.colors.accent300,
    borderTopColor: GlobalStyles.colors.accent500,
    borderWidth: 1,
    margin: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.75,
    shadowRadius: 1,
    width: "25%",
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 18,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
