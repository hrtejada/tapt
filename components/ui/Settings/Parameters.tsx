import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import HeaderTwo from "../HeaderTwo";
import Chip from "../Chip";
import { DUMMY_SETTING } from "../../../testData/DUMMY_DATA";
import { useState } from "react";

/**
 * Component for the Settings Screen that will hold the parameters setting.
 *
 * TODO: Figure out why the chips aren't wrapping
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Parameters = () => {
  const [parameters, setParameters] = useState<string[]>(
    DUMMY_SETTING.parameters || []
  );
  const deleteChipHandler = () => {};

  return (
    <View style={styles.container}>
      <HeaderTwo>Set data to parse from emails</HeaderTwo>
      <View style={styles.chipsContainer}>
        {parameters.map((parameter) => (
          <Chip text={parameter} onDelete={deleteChipHandler} />
        ))}
      </View>
    </View>
  );
};

export default Parameters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.accent700,
  },
  chipsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
