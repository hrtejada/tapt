import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";
import { DELETE_TITLE } from "../../constants/words";
import { DeleteAccountStackProps } from "../../util/react-navigation";
import FlatButton from "./FlatButton";

/**
 * DeleteAccountButton Component.
 *
 * This component renders a flat button used to navigate to the DeleteAccounScreen.
 *
 * @component
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DeleteAccountButton = () => {
  const navigation = useNavigation<DeleteAccountStackProps["navigation"]>();

  const leftIcon = (
    <MaterialCommunityIcons
      name="account-remove"
      size={FLAT_BUTTON_ICON_SIZE}
      color="black"
    />
  );

  const deleteNavigationHandler = () => {
    navigation.navigate("Delete");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={deleteNavigationHandler}>
      {DELETE_TITLE}
    </FlatButton>
  );
};

export default DeleteAccountButton;
