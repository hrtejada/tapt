import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { GlobalStyles } from "../../constants/styles";
import Button from "../../components/ui/Button";
import BackButton from "../../components/Settings/BackButton";

/**
 * ButtonsScreen Component.
 *
 * This component renders the buttons style guide.
 *
 * @component
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ButtonsScreen = () => {
  const insets = useSafeAreaInsets();

  const handlePress = () => {};

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <BackButton />
      <ScrollView>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Medium Buttons</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="medium"
            />
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="medium"
            />
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="medium"
            />
          </View>
        </View>
        <View style={styles.innerContainer}></View>
        <View style={styles.innerContainer}></View>
        <View style={styles.innerContainer}></View>
      </ScrollView>
    </View>
  );
};

export default ButtonsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.accent700,
    borderWidth: 2,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background200,
    margin: 2,
    padding: 12,
    borderWidth: 2,
    flexDirection: "column",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info: {
    fontSize: 18,
    textAlign: "center",
  },
});
