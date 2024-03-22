import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { GlobalStyles } from "../../constants/styles";
import Button from "../../components/ui/Button";
import BackButton from "../../components/Settings/BackButton";
import AnimatedButton from "../../components/ui/AnimatedButton";

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
          <Text style={styles.info}>Small</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="small"
            />
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
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="small"
            >
              <Text style={styles.textSm}>Primary</Text>
            </Button>
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="small"
            >
              <Text style={styles.textSm}>Secondary</Text>
            </Button>
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="small"
            >
              <Text style={styles.textSm}>Tertiary</Text>
            </Button>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Medium</Text>
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
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="medium"
            >
              <Text style={styles.textMed}>Primary</Text>
            </Button>
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="medium"
            >
              <Text style={styles.textMed}>Secondary</Text>
            </Button>
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="medium"
            >
              <Text style={styles.textMed}>Tertiary</Text>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="medium"
              disabled
            />
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="medium"
              disabled
            />
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="medium"
              disabled
            />
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Large</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="large"
            />
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
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="large"
            >
              <Text style={styles.textLg}>Primary</Text>
            </Button>
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="large"
            >
              <Text style={styles.textLg}>Secondary</Text>
            </Button>
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="large"
            >
              <Text style={styles.textLg}>Tertiary</Text>
            </Button>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Small</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="small"
              isFlat
            />
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
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="small"
              isFlat
            >
              <Text style={styles.textSm}>Primary</Text>
            </Button>
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="small"
              isFlat
            >
              <Text style={styles.textSm}>Secondary</Text>
            </Button>
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="small"
              isFlat
            >
              <Text style={styles.textSm}>Tertiary</Text>
            </Button>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Medium</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="medium"
              isFlat
            />
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="medium"
              isFlat
            />
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="medium"
              isFlat
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="medium"
              isFlat
            >
              <Text style={styles.textMed}>Primary</Text>
            </Button>
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="medium"
              isFlat
            >
              <Text style={styles.textMed}>Secondary</Text>
            </Button>
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="medium"
              isFlat
            >
              <Text style={styles.textMed}>Tertiary</Text>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="medium"
              isFlat
              disabled
            />
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="medium"
              isFlat
              disabled
            />
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="medium"
              isFlat
              disabled
            />
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.info}>Large</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="large"
              isFlat
            />
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
          <View style={styles.buttonContainer}>
            <Button
              title="Primary"
              onPress={handlePress}
              type="primary"
              size="large"
              isFlat
            >
              <Text style={styles.textLg}>Primary</Text>
            </Button>
            <Button
              title="Secondary"
              onPress={handlePress}
              type="secondary"
              size="large"
              isFlat
            >
              <Text style={styles.textLg}>Secondary</Text>
            </Button>
            <Button
              title="Tertiary"
              onPress={handlePress}
              type="tertiary"
              size="large"
              isFlat
            >
              <Text style={styles.textLg}>Tertiary</Text>
            </Button>
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
    justifyContent: "space-evenly",
    marginVertical: 4,
  },
  info: {
    fontSize: 18,
    textAlign: "center",
  },
  textSm: {
    fontSize: 15,
    fontWeight: "600",
  },
  textMed: {
    fontSize: 18,
    fontWeight: "600",
  },
  textLg: {
    fontSize: 21,
    fontWeight: "600",
  },
});
