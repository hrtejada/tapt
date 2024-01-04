import { StyleSheet, Text, View } from "react-native";
import BackButton from "../../components/Settings/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * AboutScreen Component.
 *
 * This component renders the screen that holds About information.
 *
 * TODO: Flesh Out
 *
 * @component
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const AboutScreen = () => {
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
      <Text>AboutScreen</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
