import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GlobalStyles } from "../../constants/styles";
import BackButton from "./BackButton";
import InfoSection from "./InfoSection";

interface Props {
  header: string;
  info: string;
  children: React.ReactNode;
}

/**
 * SettingsContainer Component.
 *
 * This component renders a container for all the Setting subscreens.
 *
 * @component
 * @version 0.1.2
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
      <BackButton />
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
    backgroundColor: GlobalStyles.colors.background300,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 48,
  },
});
