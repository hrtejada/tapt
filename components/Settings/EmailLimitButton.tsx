import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";
import { EMAIL_LIMIT_TITLE } from "../../constants/words";
import { EmailLimitStackProps } from "../../util/react-navigation";
import FlatButton from "./FlatButton";

/**
 * EmailLimitButton Component.
 *
 * This component renders a flat button used to navigate to the EmailLimitScreen.
 *
 * @component
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailLimitButton = () => {
  const navigation = useNavigation<EmailLimitStackProps["navigation"]>();

  const leftIcon = (
    <MaterialCommunityIcons
      name="email-open-multiple-outline"
      size={FLAT_BUTTON_ICON_SIZE}
      color="black"
    />
  );

  const emailLimitNavigationHandler = () => {
    navigation.navigate("EmailLimit");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={emailLimitNavigationHandler}>
      {EMAIL_LIMIT_TITLE}
    </FlatButton>
  );
};

export default EmailLimitButton;
