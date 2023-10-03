import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { ParametersStackProps } from "../../util/screen-navigation";
import FlatButton from "./FlatButton";

/**
 * Component to navigate to the ParametersScreen.
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ParametersButton = () => {
  const navigation = useNavigation<ParametersStackProps["navigation"]>();

  const leftIcon = <FontAwesome5 name="keyboard" size={24} color="black" />;

  const parametersNavigationHandler = () => {
    navigation.navigate("Parameters");
  };
  return (
    <FlatButton leftIcon={leftIcon} onPress={parametersNavigationHandler}>
      Data Parameters
    </FlatButton>
  );
};

export default ParametersButton;

const styles = StyleSheet.create({});
