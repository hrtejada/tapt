import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";
import { EMAIL_DATA_TITLE } from "../../constants/words";
import { EmailDataStackProps } from "../../util/react-navigation";
import FlatButton from "./FlatButton";

/**
 * EmailDataButton Component.
 *
 * This component renders a flat button used to navigate to the ParametersScreen.
 *
 * @component
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailDataButton = () => {
  const navigation = useNavigation<EmailDataStackProps["navigation"]>();

  const leftIcon = (
    <FontAwesome5 name="keyboard" size={FLAT_BUTTON_ICON_SIZE} color="black" />
  );

  const parametersNavigationHandler = () => {
    navigation.navigate("EmailData");
  };
  return (
    <FlatButton leftIcon={leftIcon} onPress={parametersNavigationHandler}>
      {EMAIL_DATA_TITLE}
    </FlatButton>
  );
};

export default EmailDataButton;
