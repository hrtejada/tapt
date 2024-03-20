import { StyleSheet, Text } from "react-native";

import { GlobalStyles } from "../../constants/styles";

interface Props {
  style?: undefined | object;
  accessibilityHint?: string;
}

/**
 * Header component to display text. (H1)
 *
 * Made to be customizable from the component using it.
 * Updated to be more ADA compliant.
 *
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const HeaderOne = ({
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

export default HeaderOne;

const styles = StyleSheet.create({
  headingText: {
    color: GlobalStyles.colors.text,
    fontSize: 24,
  },
});
