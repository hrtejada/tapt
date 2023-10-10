import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GoBackButton from "./GoBackButton";

interface Props {
  children: React.ReactNode;
}

/**
 * Container for all the Setting subscreens.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const SettingsContainer = ({ children }: Props) => {
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
      <GoBackButton />
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};

export default SettingsContainer;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 48,
  },
});
