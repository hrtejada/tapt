import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { DeleteAccountStackProps } from "../../util/react-navigation";
import FlatButton from "./FlatButton";
import { DELETE_TITLE } from "../../constants/words";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";

/**
 * Component that holds the button to navigate to the DeleteAccounScreen.
 *
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

const styles = StyleSheet.create({});
