import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InfoSection from "../../components/Settings/InfoSection";
import { DUMMY_DETAILS } from "../../constants/words";

/**
 * Component that holds rank mode setting.
 *
 * TODO: Flesh Out
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankingScreen = () => {
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
      <View style={styles.innerContainer}>
        <InfoSection headerText="Ranking" details={DUMMY_DETAILS} />
      </View>
      <Text>RankModeScreen</Text>
    </View>
  );
};

export default RankingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
