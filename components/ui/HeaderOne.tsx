import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/**
 * Header component to display text. (H1)
 *
 * TODO: Look into getting rid of the heading container. Background color should probably be set by the outside container
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const HeaderOne = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>{children}</Text>
    </View>
  );
};

export default HeaderOne;

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
