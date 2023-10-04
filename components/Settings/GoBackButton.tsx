import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * Component that holds the button to navigate back to the SettingsScreen.
 *
 * TODO: Remove background color
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const GoBackButton = () => {
  const navigation = useNavigation();

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <Pressable
      onPress={goBackHandler}
      style={({ pressed }) => [pressed && styles.pressed, styles.button]}
    >
      <View style={styles.innerContainer}>
        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
        <Text style={styles.buttonText}>Go Back</Text>
      </View>
    </Pressable>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: "33%",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 12,
    borderColor: GlobalStyles.colors.accent300,
    borderWidth: 1,
    margin: 3,
    borderRadius: 35,
    shadowColor: GlobalStyles.colors.accent700,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
