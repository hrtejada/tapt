import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

interface Props {
  parameter: string;
  info: string;
}

/**
 * Component that will display a text parameter and info.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const TextParameter = ({ parameter, info }: Props) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.parameter}>{parameter.toUpperCase()}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

export default TextParameter;

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: GlobalStyles.colors.secondary400,
    marginVertical: 4,
    width: "auto",
  },
  parameter: {
    color: GlobalStyles.colors.text,
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 4,
    textDecorationLine: "underline",
  },
  info: {
    fontSize: 20,
    color: GlobalStyles.colors.text,
    margin: 4,
    paddingLeft: 24,
    paddingBottom: 8,
  },
});
