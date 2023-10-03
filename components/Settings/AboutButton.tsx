import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { AboutStackProps } from "../../util/screen-navigation";
import FlatButton from "./FlatButton";
import { FontAwesome5 } from "@expo/vector-icons";

/**
 * Button used to navigate to the About app info.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const AboutButton = () => {
  const navigation = useNavigation<AboutStackProps["navigation"]>();

  const leftIcon = <FontAwesome5 name="info-circle" size={28} color="black" />;

  const aboutNavigationHandler = () => {
    navigation.navigate("About");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={aboutNavigationHandler}>
      About
    </FlatButton>
  );
};

export default AboutButton;

const styles = StyleSheet.create({});
