import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";
import { PARAMETERS_TITLE } from "../../constants/words";
import { ParametersStackProps } from "../../util/react-navigation";
import FlatButton from "./FlatButton";

/**
 * Component to navigate to the ParametersScreen.
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ParametersButton = () => {
  const navigation = useNavigation<ParametersStackProps["navigation"]>();

  const leftIcon = (
    <FontAwesome5 name="keyboard" size={FLAT_BUTTON_ICON_SIZE} color="black" />
  );

  const parametersNavigationHandler = () => {
    navigation.navigate("Parameters");
  };
  return (
    <FlatButton leftIcon={leftIcon} onPress={parametersNavigationHandler}>
      {PARAMETERS_TITLE}
    </FlatButton>
  );
};

export default ParametersButton;
