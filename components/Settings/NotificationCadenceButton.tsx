import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { NotificationCadenceStackProps } from "../../util/react-navigation";
import FlatButton from "./FlatButton";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";
import { NOTIFICATION_TITLE } from "../../constants/words";

/**
 * Button used to navigate to the NotificationScreen.
 *
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

const styles = StyleSheet.create({});
