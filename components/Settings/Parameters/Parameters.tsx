import { StyleSheet, Text, View } from "react-native";
import HeaderThree from "../../ui/HeaderThree";
import Chip from "../../ui/Chip";
import { useUserContext } from "../../../store/user-context";
import { USER_ACTION_TYPES } from "../../../constants/words";

/**
 * Component to display and delete parameter chips.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Parameters = () => {
  const { state, dispatch } = useUserContext();

  /**
   * Remove the parameter from the user's parameters array.
   */
  const deleteChipHandler = (parameter: string) => {
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
            onDelete={deleteChipHandler.bind(this, parameter)}
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
    marginTop: 12,
  },
});
