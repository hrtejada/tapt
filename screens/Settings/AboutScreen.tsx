import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";

/**
 * Component that holds About App information.
 *
 * TODO: Flesh Out
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const AboutScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <GoBackButton />
      <Text>AboutScreen</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
