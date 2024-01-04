import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";
import { NOTIFICATION_TITLE } from "../../constants/words";
import { NotificationCadenceStackProps } from "../../util/react-navigation";
import FlatButton from "./FlatButton";

/**
 * NotificationCadenceButton Component.
 *
 * This component renders a flat button used to navigate to the NotificationCadenceScreen.
 *
 * @component
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const NotificationCadenceButton = () => {
  const navigation =
    useNavigation<NotificationCadenceStackProps["navigation"]>();

  const leftIcon = (
    <MaterialCommunityIcons
      name="email-alert"
      size={FLAT_BUTTON_ICON_SIZE}
      color="black"
    />
  );

  const dateRangeNavigationHandler = () => {
    navigation.navigate("NotificationCadence");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={dateRangeNavigationHandler}>
      {NOTIFICATION_TITLE}
    </FlatButton>
  );
};

export default NotificationCadenceButton;
