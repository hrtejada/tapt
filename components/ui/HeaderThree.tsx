import { StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  accessibilityHint?: string;
}

/**
 * Header component to display text. (H3)
 *
 * Updated to be more ADA compliant.
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const HeaderThree = ({
  accessibilityHint,
  children,
}: React.PropsWithChildren<Props>) => {
  const a11yHint =
    accessibilityHint || (typeof children === "string" ? children : undefined);

  return (
    <Text
      style={styles.headingText}
      accessibilityRole="header"
      accessibilityHint={a11yHint}
    >
      {children}
    </Text>
  );
};

export default HeaderThree;

const styles = StyleSheet.create({
  headingText: {
    color: GlobalStyles.colors.text,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
});
