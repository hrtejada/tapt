import { StyleSheet, Switch, Text, View } from "react-native";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import { GlobalStyles } from "../../constants/styles";
import { RANKING, USER_ACTION_TYPES } from "../../constants/words";
import { useUserContext } from "../../store/user-context";
import { useState } from "react";

interface Props {
  text: string;
  value: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const MainSwitch = ({ text, value, onChange, disabled = false }: Props) => {
  return (
    <>
      <Text style={styles.text}>{text}</Text>
      <Switch
        thumbColor={GlobalStyles.colors.accent300}
        ios_backgroundColor={GlobalStyles.colors.background200}
        trackColor={{
          false: GlobalStyles.colors.background100,
          true: GlobalStyles.colors.black600,
        }}
        onValueChange={onChange}
        value={value}
        disabled={disabled}
        style={{ borderColor: GlobalStyles.colors.accent300 }}
      />
    </>
  );
};

/**
 * RankingScreen Component.
 *
 * Thie component renders a screen that holds ranking settings.
 * Currently the settings are
 *  - Ranking Enable: On/Off
 *    - Ranking Mode: On/Off (Dependent on Ranking Enable)
 *
 * TODO: Refine
 * TODO: Add section for 'Rank Mode' description.
 *
 * @component
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankingScreen = () => {
  const { state, dispatch } = useUserContext();
  const [isRankingEnabled, setIsRankingEnabled] = useState(state.isRanking);

  /**
   * Function to toggle if User would like to Rank emails.
   */
  const toggleIsRanking = () => {
    if (state.isRanking) {
      dispatch({ type: USER_ACTION_TYPES.RANKING_OFF });
    } else {
      dispatch({ type: USER_ACTION_TYPES.RANKING_ON });
    }
    setIsRankingEnabled(!isRankingEnabled);
  };

  /**
   * Function to toggle is User would like to be in Rank Mode.
   */
  const toggleRankMode = () => {
    if (state.inRankMode) {
      dispatch({ type: USER_ACTION_TYPES.RANK_MODE_OFF });
    } else {
      dispatch({ type: USER_ACTION_TYPES.RANK_MODE_ON });
    }
  };

  return (
    <SettingsContainer header={RANKING.header} info={RANKING.info}>
      <View style={styles.baseContainer}>
        <MainSwitch
          text="Ranking Enabled"
          value={state.isRanking}
          onChange={toggleIsRanking}
        />
      </View>
      {state.isRanking && (
        <View style={[styles.baseContainer, styles.rankModeContainer]}>
          <MainSwitch
            text="Rank Mode"
            value={state.inRankMode}
            onChange={toggleRankMode}
            disabled={!state.isRanking}
          />
        </View>
      )}
    </SettingsContainer>
  );
};

export default RankingScreen;

const styles = StyleSheet.create({
  baseContainer: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.background200,
    justifyContent: "space-between",
    padding: 8,
    alignItems: "center",
    borderColor: GlobalStyles.colors.black200,
    borderWidth: 1,
    borderRadius: 8,
  },
  rankModeContainer: {
    marginTop: 24,
  },
  text: {
    fontSize: 20,
  },
});
