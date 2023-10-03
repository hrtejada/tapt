import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from "../ui/Button";

/**
 * Component that holds the button to navigate back to the SettingsScreen.
 *
 * TODO: Remove background color
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const GoBackButton = () => {
  const navigation = useNavigation();

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.goBackContainer}>
      <Button onPress={goBackHandler}>Go Back</Button>
    </View>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  goBackContainer: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: GlobalStyles.colors.accent100,
  },
});
