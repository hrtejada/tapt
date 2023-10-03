import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { RankModeStackProps } from "../../util/react-navigation";
import FlatButton from "./FlatButton";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";
import { RANK_MODE_TITLE } from "../../constants/words";

/**
 * Button used to navigate to the RankModeScreen.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankModeButton = () => {
  const navigation = useNavigation<RankModeStackProps["navigation"]>();

  const leftIcon = (
    <MaterialCommunityIcons
      name="star-settings"
      size={FLAT_BUTTON_ICON_SIZE}
      color="black"
    />
  );

  const rankModeNavigationHandler = () => {
    navigation.navigate("RankMode");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={rankModeNavigationHandler}>
      {RANK_MODE_TITLE}
    </FlatButton>
  );
};

export default RankModeButton;

const styles = StyleSheet.create({});
