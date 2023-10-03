import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { RankModeStackProps } from "../../util/screen-navigation";
import FlatButton from "./FlatButton";

/**
 * Button used to navigate to the RankModeScreen.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankModeButton = () => {
  const navigation = useNavigation<RankModeStackProps["navigation"]>();

  const leftIcon = (
    <MaterialCommunityIcons name="star-settings" size={28} color="black" />
  );

  const rankModeNavigationHandler = () => {
    navigation.navigate("RankMode");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={rankModeNavigationHandler}>
      Rank Mode
    </FlatButton>
  );
};

export default RankModeButton;

const styles = StyleSheet.create({});
