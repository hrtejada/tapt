import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { RANKED_ACTION_TYPES } from "../../constants/words";
import { useRankedContext } from "../../store/ranked-context";
import AnimatedButton from "../ui/AnimatedButton";

type IconProps = "star" | "star-o";

// TODO: Determine if we should use documentation like this through the app
/**
 * `RankButtons` Component
 *
 * This component renders a series of interactive ranking icons that allow users
 * to rank content. The number of filled icons indicates the current ranking value.
 *
 * Each icon corresponds to a rank value, and tapping an icon will either set or reset the rank.
 * If the tapped icon corresponds to the current rank, the rank will be reset to 0.
 * Otherwise, the rank will be set to the tapped icon's rank value.
 *
 * The current rank is managed by the ranked-context, and this component
 * dispatches actions to update that context based on user interactions.
 *
 * @version 0.3.0
 * @author Ralph Woiwode <https://github.com/RAWoiwode>
 *
 * @example
 * <RankButtons />
 *
 * @returns {JSX.Element} - Rendered component.
 */
const RankButtons = () => {
  const { state, dispatch } = useRankedContext();

  /**
   * Handles the ranking logic when an icon is pressed.
   *
   * When an icon is pressed, this function checks the current temporary rank
   * from the context against the rank value passed as an argument.
   * If the current rank is the same as the pressed icon's value, it resets the rank to 0.
   * Otherwise, it sets the rank to the value of the pressed icon.
   *
   * The function then dispatches an action to the context to update the temporary rank
   * with the new value.
   *
   * @param {number} value - The rank value of the pressed icon.
   *                         Should be 1, 2, or 3, representing the
   *                         first, second, or third icon, left to right, respectively.
   *
   * @example
   * -- Assuming state.tempRank is 0
   * rankHandler(1);  // Sets the temporary rank to 1
   * rankHandler(1);  // Resets the temporary rank to 0
   * rankHandler(2);  // Sets the temporary rank to 2
   */
  const rankHandler = (value: number) => {
    if (state.tempRank === value) {
      dispatch({ type: RANKED_ACTION_TYPES.TEMP_RANK, payload: 0 });
    } else {
      dispatch({ type: RANKED_ACTION_TYPES.TEMP_RANK, payload: value });
    }
    /**
     * TODO -------------------------------------------------------------------
     * - Logic to skip ranked emails in the "regular" EmailScreen
     * - Logic to only show ranked emails when coming from RankedQueueScreen
     * TODO -------------------------------------------------------------------
     */
  };

  /**
   * Determines the type of icon to display based on the current rank.
   *
   * Given a rank value, this function will check if the current ranking
   * from the ranked-context is greater than or equal to that value.
   * If so, it will return a filled icon that will be displayed.
   * Otherwise, it returns an empty icon that will be displayed.
   *
   * @param {number} starValue - The rank value of the star being checked.
   *                             Should be 1, 2, or 3, representing the
   *                             first, second, or third star respectively.
   * @returns {IconProps} - Returns "star" if the current rank is greater than
   *                        or equal to the starValue, else returns "star-o".
   *
   * @example
   * -- Assuming state.tempRank is 2
   * getStarType(1);  // Returns "star"
   * getStarType(2);  // Returns "star"
   * getStarType(3);  // Returns "star-o"
   */
  const getStarType = (starValue: number): IconProps => {
    return state.tempRank >= starValue ? "star" : "star-o";
  };

  return (
    <View style={styles.container}>
      <AnimatedButton
        title="One Star"
        style={styles.starButton}
        onPress={() => rankHandler(1)}
      >
        <FontAwesome
          name={getStarType(1)}
          size={48}
          color={GlobalStyles.colors.text}
        />
      </AnimatedButton>
      <AnimatedButton
        title="Two Star"
        style={styles.starButton}
        onPress={() => rankHandler(2)}
      >
        <FontAwesome
          name={getStarType(2)}
          size={48}
          color={GlobalStyles.colors.text}
        />
      </AnimatedButton>
      <AnimatedButton
        title="Three Star"
        style={styles.starButton}
        onPress={() => rankHandler(3)}
      >
        <FontAwesome
          name={getStarType(3)}
          size={48}
          color={GlobalStyles.colors.text}
        />
      </AnimatedButton>
    </View>
  );
};

export default RankButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary300,
    paddingVertical: 4,
    marginBottom: 4,
  },
  starButton: {
    backgroundColor: "transparent",
    shadowColor: "transparent",
    padding: 2,
  },
});
