import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useUserContext } from "../../store/user-context";
import { EmailStackProps } from "../../util/react-navigation";
import HeaderOne from "../ui/HeaderOne";
import UnreadCountCard from "./UnreadCountCard";

/**
 * Email Info Component.
 *
 * Button that displays the current unread count. Tapping button
 * takes user to the EmailScreen.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailInfo = () => {
  const navigation = useNavigation<EmailStackProps["navigation"]>();
  const { state } = useUserContext();

  // TODO: Is this where we call the Gmail servers periodically to retrieve the new unreadCount??

  /**
   * Navigate to the Email Screen.
   */
  const emailPressHandler = () => {
    navigation.navigate("Email", { action: "new" });
    // TODO: Retrieve email data or handle it in the EmailScreen
  };

  return (
    <View style={styles.row}>
      <HeaderOne>Emails</HeaderOne>
      <Pressable
        onPress={emailPressHandler}
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.innerContainer}>
          <UnreadCountCard unreadCount={state.unreadCount} />
          <View style={styles.iconContainer}>
            <FontAwesome5
              name="envelope-open-text"
              size={64}
              color={GlobalStyles.colors.text}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default EmailInfo;

const styles = StyleSheet.create({
  row: {
    flex: 2,
  },
  buttonContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    marginHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent700,
    shadowColor: GlobalStyles.colors.text,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    // padding: 10,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
