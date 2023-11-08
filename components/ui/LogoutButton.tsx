import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * Button to logout of the app.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const LogoutButton = () => {
  // TODO: Implement logout when the time comes
  const logoutHandler = () => {};

  return (
    <Pressable
      onPress={logoutHandler}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>LOGOUT</Text>
      <FontAwesome5
        name="sign-out-alt"
        size={18}
        color={GlobalStyles.colors.text}
      />
    </Pressable>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colors.secondary500,
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 0,
  },
  text: {
    padding: 4,
    fontSize: 16,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.secondary700,
  },
});
