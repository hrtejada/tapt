import { StyleSheet, View } from "react-native";
import { USER_ACTION_TYPES } from "../../../constants/words";
import { useUserContext } from "../../../store/user-context";
import Chip from "../../ui/Chip";
import HeaderThree from "../../ui/HeaderThree";

/**
 * ParametersComponent.
 *
 * This component renders the User's parameters as chips.
 *
 * @component
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Parameters = () => {
  const { state, dispatch } = useUserContext();

  /**
   * Handle deleting a chip.
   *
   * This function removes the parameter from the User's parameters array.
   */
  const handleDeleteChip = (parameter: string) => {
    // Do Backend stuff...
    dispatch({ type: USER_ACTION_TYPES.DELETE, payload: parameter });
  };

  return (
    <View style={styles.container}>
      <HeaderThree>Email data to look for:</HeaderThree>
      <View style={styles.chipsContainer}>
        {state.parameters.map((parameter) => (
          <Chip
            key={parameter}
            text={parameter}
            onDelete={handleDeleteChip.bind(this, parameter)}
          />
        ))}
      </View>
    </View>
  );
};

export default Parameters;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  chipsContainer: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
