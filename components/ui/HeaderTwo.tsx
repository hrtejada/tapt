import { StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * Header component to display text. (H2)
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const HeaderTwo = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.headingText}>{children}</Text>;
};

export default HeaderTwo;

const styles = StyleSheet.create({
  headingText: {
    color: GlobalStyles.colors.text,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "uppercase",
  },
});
