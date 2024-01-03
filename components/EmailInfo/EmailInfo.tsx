import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { USER_ACTION_TYPES } from "../../constants/words";
import { useUserContext } from "../../store/user-context";
import { DUMMY_EMAILS } from "../../testData/DUMMY_DATA";
import { EmailStackProps } from "../../util/react-navigation";
import AnimatedButton from "../ui/AnimatedButton";
import HeaderOne from "../ui/HeaderOne";
import UnreadCountCard from "./UnreadCountCard";

/**
 * EmailInfo Component.
 *
 * This component renders a button the displays the current Unread Count and
 * navigates to the Email Screen when pressed.
 *
 * @component
 * @version 0.2.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailInfo = () => {
  const navigation = useNavigation<EmailStackProps["navigation"]>();
  const { state, dispatch } = useUserContext();

  // TODO: Is this where we call the Gmail servers periodically to retrieve the new unreadCount??
  useEffect(() => {
    dispatch({
      type: USER_ACTION_TYPES.UNREAD_COUNT,
      payload: DUMMY_EMAILS.length,
    });
  }, [dispatch, DUMMY_EMAILS.length]);

  /**
   * Handle the press event on the Email button.
   *
   * Navigate the User to the Email Screen.
   */
  const emailPressHandler = () => {
    navigation.navigate("Email", { action: "new" });
    // TODO: Retrieve email data or handle it in the EmailScreen
  };

  return (
    <View style={styles.row}>
      <HeaderOne>Emails</HeaderOne>
      <AnimatedButton
        title="Open Emails"
        onPress={emailPressHandler}
        type="primary"
        style={styles.buttonContainer}
        disabled={state.unreadCount === 0}
      >
        <View style={styles.innerContainer}>
          <UnreadCountCard unreadCount={state.unreadCount} />
          <View style={styles.iconContainer}>
            <FontAwesome5
              name="envelope-open-text"
              size={72}
              color={GlobalStyles.colors.text}
            />
          </View>
        </View>
      </AnimatedButton>
    </View>
  );
};

export default EmailInfo;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    marginHorizontal: 24,
    borderRadius: 8,
    width: "70%",
  },
  innerContainer: {
    flexDirection: "row",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
