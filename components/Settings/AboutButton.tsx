import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { AboutStackProps } from "../../util/react-navigation";
import FlatButton from "./FlatButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { ABOUT_TITLE } from "../../constants/words";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";

/**
 * Button used to navigate to the About app info.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const AboutButton = () => {
  const navigation = useNavigation<AboutStackProps["navigation"]>();

  const leftIcon = (
    <FontAwesome5
      name="info-circle"
      size={FLAT_BUTTON_ICON_SIZE}
      color="black"
    />
  );

  const aboutNavigationHandler = () => {
    navigation.navigate("About");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={aboutNavigationHandler}>
      {ABOUT_TITLE}
    </FlatButton>
  );
};

export default AboutButton;

const styles = StyleSheet.create({});