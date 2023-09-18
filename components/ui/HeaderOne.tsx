import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * Header component to display text. (H1)
 *
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const HeaderOne = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.headingText}>{children}</Text>;
};

export default HeaderOne;

const styles = StyleSheet.create({
  headingText: {
    color: GlobalStyles.colors.text,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginVertical: 8,
    textTransform: "uppercase",
  },
});
