import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { NotificationCadenceStackProps } from "../../util/screen-navigation";
import FlatButton from "./FlatButton";

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
    <MaterialCommunityIcons name="email-alert" size={28} color="black" />
  );

  const dateRangeNavigationHandler = () => {
    navigation.navigate("NotificationCadence");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={dateRangeNavigationHandler}>
      Notification Cadence
    </FlatButton>
  );
};

export default NotificationCadenceButton;

const styles = StyleSheet.create({});
