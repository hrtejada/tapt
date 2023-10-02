import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { EmailLimitNavigationProps } from "../../util/screen-navigation";
import FlatButton from "./FlatButton";

/**
 * Component that holds the email limit functionality.
 *
 * TODO: Finish fleshing this out.
 * TODO: Add SafeArewView somewhere to keep input in view properly
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailLimitButton = () => {
  const navigation = useNavigation<EmailLimitNavigationProps>();

  const leftIcon = (
    <MaterialCommunityIcons
      name="email-open-multiple-outline"
      size={28}
      color="black"
      style={{ paddingHorizontal: 10 }}
    />
  );
  const rightIcon = <FontAwesome5 name="angle-right" size={28} color="black" />;

  const emailLimitNavigationHandler = () => {
    navigation.navigate("EmailLimit");
  };

  return (
    <FlatButton
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onPress={emailLimitNavigationHandler}
    >
      Email Limit
    </FlatButton>
  );
};

export default EmailLimitButton;

const styles = StyleSheet.create({});
