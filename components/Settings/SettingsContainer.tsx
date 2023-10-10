import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GoBackButton from "./GoBackButton";
import InfoSection from "./InfoSection";

interface Props {
  header: string;
  info: string;
  children: React.ReactNode;
}

/**
 * Container for all the Setting subscreens.
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const SettingsContainer = ({ header, info, children }: Props) => {
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
      <View style={styles.innerContainer}>
        <InfoSection headerText={header} info={info} />
        {children}
      </View>
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
