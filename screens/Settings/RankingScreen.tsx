import { StyleSheet, Switch, Text, View } from "react-native";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import { GlobalStyles } from "../../constants/styles";
import { RANKING, TYPES } from "../../constants/words";
import { useUserContext } from "../../store/user-context";

/**
 * Component that holds rank mode setting.
 *
 * TODO: Refine
 * TODO: Add section for 'Rank Mode' description.
 *
 * @version 0.1.4
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankingScreen = () => {
  const { state, dispatch } = useUserContext();

  const toggleIsRanking = () => {
    if (state.isRanking) {
      dispatch({ type: TYPES.RANKING_OFF });
    } else {
      dispatch({ type: TYPES.RANKING_ON });
    }
  };
  const toggleRankMode = () => {
    if (state.inRankMode) {
      dispatch({ type: TYPES.RANK_MODE_OFF });
    } else {
      dispatch({ type: TYPES.RANK_MODE_ON });
    }
  };

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
          value={state.isRanking}
        />
      </View>
      {state.isRanking && (
        <View style={styles.rankModeContainer}>
          <Text style={styles.rankModeText}>Rank Mode</Text>
          <Switch
            thumbColor={GlobalStyles.colors.primary500}
            trackColor={{
              true: GlobalStyles.colors.accent500,
              false: GlobalStyles.colors.secondary500,
            }}
            onValueChange={toggleRankMode}
            value={state.inRankMode}
            disabled={!state.isRanking}
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
