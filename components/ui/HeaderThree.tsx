import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

import { GlobalStyles } from "../../constants/styles";

interface Props {
  style?: undefined | StyleProp<TextStyle>;
  accessibilityHint?: string;
}

/**
 * Header component to display text. (H3)
 *
 * Made to be customizable from the component using it.
 * Updated to be more ADA compliant.
 *
 * @version 0.3.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const HeaderThree = ({
  style,
  accessibilityHint,
  children,
}: React.PropsWithChildren<Props>) => {
  const a11yHint =
    accessibilityHint || (typeof children === "string" ? children : undefined);

  return (
    <Text
      style={[styles.headingText, style]}
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
  },
});
