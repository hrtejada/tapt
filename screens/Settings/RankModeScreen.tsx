import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Component that holds rank mode setting.
 *
 * TODO: Flesh Out
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankModeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
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
