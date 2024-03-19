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
        <Button
          onPress={handleTypography}
          title="Typography"
          type="primary"
        ></Button>
      </ScrollView>
    </View>
  );
};

export default StyleGuideScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background300,
  },
  scrollContainer: {
    marginHorizontal: 16,
    marginTop: 8,
  },
});
