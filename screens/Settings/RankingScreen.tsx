import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import { GlobalStyles } from "../../constants/styles";
import { RANKING } from "../../constants/words";

/**
 * Component that holds rank mode setting.
 *
 * TODO: Refine
 * TODO: Add section for 'Rank Mode' description.
 *
 * @version 0.1.3
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankingScreen = () => {
  const [isRanking, setIsRanking] = useState(false);
  const [inRankMode, setInRankMode] = useState(false);

  const toggleIsRanking = () => {
    setIsRanking((prev) => !prev);
    setInRankMode(false);
  };
  const toggleRankMode = () => setInRankMode((prev) => !prev);

  return (
    <SettingsContainer header={RANKING.header} info={RANKING.info}>
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
    </SettingsContainer>
  );
};

export default RankingScreen;

const styles = StyleSheet.create({
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
