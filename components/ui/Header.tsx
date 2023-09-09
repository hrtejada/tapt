import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * Header component to display header text
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>{children}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headingContainer: {
    backgroundColor: GlobalStyles.colors.background300,
    paddingTop: 24,
  },
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
