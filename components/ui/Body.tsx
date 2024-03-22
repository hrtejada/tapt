import React from "react";
import { StyleSheet, Text } from "react-native";

import { GlobalStyles } from "../../constants/styles";

interface Props {
  style?: undefined | object;
  accessibilityHint?: string;
}

/**
 * Body component to display text. (P)
 *
 * Made to be customizable from the component using it.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const Body = ({
  style,
  accessibilityHint,
  children,
}: React.PropsWithChildren<Props>) => {
  const a11yHint =
    accessibilityHint || (typeof children === "string" ? children : undefined);

  return (
    <Text
      style={[styles.bodyText, style]}
      accessibilityRole="text"
      accessibilityHint={a11yHint}
    >
      {children}
    </Text>
  );
};

export default Body;

const styles = StyleSheet.create({
  bodyText: {
    color: GlobalStyles.colors.text,
    fontSize: 17,
  },
});
