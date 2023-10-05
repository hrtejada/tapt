import { StyleSheet, Switch, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InfoSection from "../../components/Settings/InfoSection";
import { DUMMY_DETAILS } from "../../constants/words";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";

/**
 * Component that holds rank mode setting.
 *
 * TODO: Refine
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankingScreen = () => {
  const insets = useSafeAreaInsets();
  const [isRanking, setIsRanking] = useState(false);
  const [inRankMode, setInRankMode] = useState(false);

  const toggleIsRanking = () => {
    setIsRanking((prev) => !prev);
    setInRankMode(false);
  };
  const toggleRankMode = () => setInRankMode((prev) => !prev);

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
        <View style={styles.rankingContainer}>
          <Text style={styles.rankingText}>Ranking Enabled</Text>
          <Switch
            thumbColor={GlobalStyles.colors.primary500}
            trackColor={{
              true: GlobalStyles.colors.accent500,
              false: GlobalStyles.colors.secondary500,
            }}
            onValueChange={toggleIsRanking}
            value={isRanking}
          />
        </View>
        {isRanking && (
          <View style={styles.rankModeContainer}>
            <Text style={styles.rankModeText}>Rank Mode</Text>
            <Switch
              thumbColor={GlobalStyles.colors.primary500}
              trackColor={{
                true: GlobalStyles.colors.accent500,
                false: GlobalStyles.colors.secondary500,
              }}
              onValueChange={toggleRankMode}
              value={inRankMode}
              disabled={!isRanking}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default RankingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background300,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  rankingContainer: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.background200,
    justifyContent: "space-between",
    marginTop: 24,
    padding: 8,
    alignItems: "center",
    borderColor: GlobalStyles.colors.accent500,
    borderWidth: 1,
    borderRadius: 8,
  },
  rankingText: {
    fontSize: 20,
  },
  rankModeContainer: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.background200,
    justifyContent: "space-between",
    marginTop: 16,
    padding: 8,
    alignItems: "center",
    borderColor: GlobalStyles.colors.accent500,
    borderWidth: 1,
    borderRadius: 8,
  },
  rankModeText: {
    fontSize: 20,
  },
});
