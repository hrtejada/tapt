import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { StyleSheet, ScrollView, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { StyleStackProps } from "../util/react-navigation";

const StyleGuideScreen = ({ navigation }: StyleStackProps) => {
  const insets = useSafeAreaInsets();

  const handleTypography = () => {
    navigation.navigate("Typography");
  };
  const handleButtons = () => {
    navigation.navigate("Buttons");
  };

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
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.buttonContainer}>
          <Button onPress={handleTypography} title="Typography" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleButtons} title="Buttons" />
        </View>
      </ScrollView>
    </View>
  );
};

export default StyleGuideScreen;

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    backgroundColor: GlobalStyles.colors.background300,
    justifyContent: "space-between",
  },
  scrollContainer: {
    backgroundColor: GlobalStyles.colors.secondary700,
    borderWidth: 1,
    paddingHorizontal: 4,
  },
  buttonContainer: {
    paddingVertical: 8,
  },
});
