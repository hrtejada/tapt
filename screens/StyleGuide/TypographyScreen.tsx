import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Body from "../../components/ui/Body";
import HeaderOne from "../../components/ui/HeaderOne";
import HeaderThree from "../../components/ui/HeaderThree";
import HeaderTwo from "../../components/ui/HeaderTwo";
import { GlobalStyles } from "../../constants/styles";
import BackButton from "../../components/Settings/BackButton";

/**
 * TypographyScreen Component.
 *
 * This component renders the typograpy style guide.
 *
 * TODO: Add ScrollView to make sure all spacing is still good
 *
 * @component
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const TypographyScreen = () => {
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
      <View style={styles.innerContainer}>
        <Text style={styles.info}>H1 (24)</Text>
        <View style={styles.lineContainer}>
          <HeaderOne>Lorem ipsum</HeaderOne>
          <HeaderOne style={styles.uppercase}>Lorem ipsum</HeaderOne>
        </View>
        <View style={styles.lineContainer}>
          <HeaderOne style={styles.bold}>Lorem ipsum</HeaderOne>
          <HeaderOne style={[styles.bold, styles.uppercase]}>
            Lorem ipsum
          </HeaderOne>
        </View>
        <View style={styles.lineContainer}>
          <HeaderOne style={styles.underlined}>Lorem ipsum</HeaderOne>
          <HeaderOne style={[styles.underlined, styles.uppercase]}>
            Lorem ipsum
          </HeaderOne>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.info}>H2 (22)</Text>
        <View style={styles.lineContainer}>
          <HeaderTwo>Lorem ipsum</HeaderTwo>
          <HeaderTwo style={styles.uppercase}>Lorem ipsum</HeaderTwo>
        </View>
        <View style={styles.lineContainer}>
          <HeaderTwo style={styles.bold}>Lorem ipsum</HeaderTwo>
          <HeaderTwo style={[styles.bold, styles.uppercase]}>
            Lorem ipsum
          </HeaderTwo>
        </View>
        <View style={styles.lineContainer}>
          <HeaderTwo style={styles.underlined}>Lorem ipsum</HeaderTwo>
          <HeaderTwo style={[styles.underlined, styles.uppercase]}>
            Lorem ipsum
          </HeaderTwo>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.info}>H3 (20)</Text>
        <View style={styles.lineContainer}>
          <HeaderThree>Lorem ipsum</HeaderThree>
          <HeaderThree style={styles.uppercase}>Lorem ipsum</HeaderThree>
        </View>
        <View style={styles.lineContainer}>
          <HeaderThree style={styles.bold}>Lorem ipsum</HeaderThree>
          <HeaderThree style={[styles.bold, styles.uppercase]}>
            Lorem ipsum
          </HeaderThree>
        </View>
        <View style={styles.lineContainer}>
          <HeaderThree style={styles.underlined}>Lorem ipsum</HeaderThree>
          <HeaderThree style={[styles.underlined, styles.uppercase]}>
            Lorem ipsum
          </HeaderThree>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.info}>P (17)</Text>
        <View style={styles.lineContainer}>
          <Body>Lorem ipsum</Body>
          <Body style={styles.uppercase}>Lorem ipsum</Body>
        </View>
        <View style={styles.lineContainer}>
          <Body style={styles.bold}>Lorem ipsum</Body>
          <Body style={[styles.bold, styles.uppercase]}>Lorem ipsum</Body>
        </View>
        <View style={styles.lineContainer}>
          <Body style={styles.underlined}>Lorem ipsum</Body>
          <Body style={[styles.underlined, styles.uppercase]}>Lorem ipsum</Body>
        </View>
      </View>
    </View>
  );
};

export default TypographyScreen;

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    backgroundColor: GlobalStyles.colors.accent700,
    borderWidth: 2,
  },
  innerContainer: {
    backgroundColor: GlobalStyles.colors.background200,
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 2,
    padding: 12,
    borderWidth: 2,
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    fontSize: 18,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  underlined: {
    textDecorationLine: "underline",
  },
  uppercase: {
    textTransform: "uppercase",
  },
});
