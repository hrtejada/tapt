import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { EmailLimitStackProps } from "../../util/screen-navigation";
import FlatButton from "./FlatButton";

/**
 * Button used to navigate to the EmailLimitScreen.
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailLimitButton = () => {
  const navigation = useNavigation<EmailLimitStackProps["navigation"]>();

  const leftIcon = (
    <MaterialCommunityIcons
      name="email-open-multiple-outline"
      size={28}
      color="black"
    />
  );

  const emailLimitNavigationHandler = () => {
    navigation.navigate("EmailLimit");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={emailLimitNavigationHandler}>
      Email Limit
    </FlatButton>
  );
};

export default EmailLimitButton;

const styles = StyleSheet.create({});
