import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";

import BackButton from "../../components/Settings/BackButton";
import Button from "../../components/ui/Button";
import HeaderOne from "../../components/ui/HeaderOne";
import { GlobalStyles } from "../../constants/styles";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";

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

  const rightIcon = <FontAwesome5 name="angle-right" size={24} color="black" />;
  const leftIcon = <FontAwesome5 name="angle-left" size={24} color="black" />;
  const icon = <FontAwesome5 name="coffee" size={28} color="black" />;

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
        <HeaderOne style={{ textAlign: "center" }}>STANDARD</HeaderOne>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Small</Text>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress} size="small" />
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="small"
            />
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="small"
            />
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Medium</Text>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress} />
            <Button title="Secondary" onPress={handlePress} type="secondary" />
            <Button title="Tertiary" onPress={handlePress} type="tertiary" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress}>
              <View style={styles.buttonContent}>
                <Text style={styles.textRightIcon}>Icon</Text>
                {rightIcon}
              </View>
            </Button>
            <Button title="Secondary" onPress={handlePress} type="secondary">
              <View style={styles.buttonContent}>
                <Text style={styles.textRightIcon}>Icon</Text>
                {rightIcon}
              </View>
            </Button>
            <Button title="Tertiary" onPress={handlePress} type="tertiary">
              <View style={styles.buttonContent}>
                <Text style={styles.textRightIcon}>Icon</Text>
                {rightIcon}
              </View>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress}>
              <View style={styles.buttonContent}>
                {leftIcon}
                <Text style={styles.textleftIcon}>Icon</Text>
              </View>
            </Button>
            <Button title="Secondary" onPress={handlePress} type="secondary">
              <View style={styles.buttonContent}>
                {leftIcon}
                <Text style={styles.textleftIcon}>Icon</Text>
              </View>
            </Button>
            <Button title="Tertiary" onPress={handlePress} type="tertiary">
              <View style={styles.buttonContent}>
                {leftIcon}
                <Text style={styles.textleftIcon}>Icon</Text>
              </View>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress}>
              {icon}
            </Button>
            <Button title="Secondary" onPress={handlePress} type="secondary">
              {icon}
            </Button>
            <Button title="Tertiary" onPress={handlePress} type="tertiary">
              {icon}
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress} disabled />
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              disabled
            />
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              disabled
            />
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Large</Text>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress} size="large" />
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="large"
            />
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="large"
            />
          </View>
        </View>
        <HeaderOne style={{ textAlign: "center" }}>FLAT</HeaderOne>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Small</Text>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress} size="small" isFlat />
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="small"
              isFlat
            />
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="small"
              isFlat
            />
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Medium</Text>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress} isFlat />
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              isFlat
            />
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              isFlat
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress} isFlat>
              <View style={styles.buttonContent}>
                <Text style={styles.textRightIcon}>Icon</Text>
                {rightIcon}
              </View>
            </Button>
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              isFlat
            >
              <View style={styles.buttonContent}>
                <Text style={styles.textRightIcon}>Icon</Text>
                {rightIcon}
              </View>
            </Button>
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              isFlat
            >
              <View style={styles.buttonContent}>
                <Text style={styles.textRightIcon}>Icon</Text>
                {rightIcon}
              </View>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress} isFlat>
              <View style={styles.buttonContent}>
                {leftIcon}
                <Text style={styles.textleftIcon}>Icon</Text>
              </View>
            </Button>
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              isFlat
            >
              <View style={styles.buttonContent}>
                {leftIcon}
                <Text style={styles.textleftIcon}>Icon</Text>
              </View>
            </Button>
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              isFlat
            >
              <View style={styles.buttonContent}>
                {leftIcon}
                <Text style={styles.textleftIcon}>Icon</Text>
              </View>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress} isFlat>
              {icon}
            </Button>
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              isFlat
            >
              {icon}
            </Button>
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              isFlat
            >
              {icon}
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress} isFlat disabled />
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              isFlat
              disabled
            />
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              isFlat
              disabled
            />
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Large</Text>
          <View style={styles.buttonContainer}>
            <Button title="Primary" onPress={handlePress} size="large" isFlat />
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="large"
              isFlat
            />
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="large"
              isFlat
            />
          </View>
        </View>
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
    justifyContent: "space-around",
    marginVertical: 4,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    fontSize: 18,
    textAlign: "center",
  },
  textRightIcon: {
    fontSize: 18,
    marginRight: 8,
    fontWeight: "600",
  },
  textleftIcon: {
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "600",
  },
  textLg: {
    fontSize: 21,
    fontWeight: "600",
  },
});
