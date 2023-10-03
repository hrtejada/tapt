import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";

/**
 * Component that holds rank mode setting.
 *
 * TODO: Flesh Out
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankModeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <GoBackButton />
      <Text>RankModeScreen</Text>
    </View>
  );
};

export default RankModeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
