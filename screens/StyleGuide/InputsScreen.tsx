import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GlobalStyles } from "../../constants/styles";
import BackButton from "../../components/Settings/BackButton";
import HeaderOne from "../../components/ui/HeaderOne";
import Input from "../../components/ui/Input";

const InputsScreen = () => {
  const insets = useSafeAreaInsets();

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
        <HeaderOne style={{ textAlign: "center" }}>Value Input</HeaderOne>
        <View style={styles.innerContainer}>
          <Input />
        </View>
      </ScrollView>
    </View>
  );
};

export default InputsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    backgroundColor: GlobalStyles.colors.accent700,
    borderWidth: 2,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background200,
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 2,
    padding: 12,
    borderWidth: 2,
  },
});
