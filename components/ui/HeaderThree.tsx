import { StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * Header component to display text. (H3)
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const HeaderThree = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.headingText}>{children}</Text>;
};

export default HeaderThree;

const styles = StyleSheet.create({
  headingText: {
    color: GlobalStyles.colors.text,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
