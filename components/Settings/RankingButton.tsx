import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";
import { RANKING_TITLE } from "../../constants/words";
import { RankModeStackProps } from "../../util/react-navigation";
import FlatButton from "./FlatButton";

/**
 * RankingButton Component.
 *
 * This component renders a flat button used to navigate to the RankingScreen.
 *
 * @component
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
    navigation.navigate("Ranking");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={rankModeNavigationHandler}>
      {RANKING_TITLE}
    </FlatButton>
  );
};

export default RankModeButton;
