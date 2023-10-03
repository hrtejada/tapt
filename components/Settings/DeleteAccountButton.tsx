import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { DeleteAccountNavigationProps } from "../../util/screen-navigation";
import FlatButton from "./FlatButton";

/**
 * Component that holds the button to navigate to the DeleteAccounScreen.
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DeleteAccountButton = () => {
  const navigation = useNavigation<DeleteAccountNavigationProps>();

  const leftIcon = (
    <MaterialCommunityIcons
      name="account-remove"
      size={28}
      color="black"
      style={{ paddingHorizontal: 10 }}
    />
  );

  const deleteNavigationHandler = () => {
    navigation.navigate("Delete");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={deleteNavigationHandler}>
      Delete Account
    </FlatButton>
  );
};

export default DeleteAccountButton;

const styles = StyleSheet.create({});