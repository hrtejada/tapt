import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  rootStyle?: {};
}

/**
 * RQ_Container Component.
 *
 * This component renders the container for the Reply Screen content.
 *
 * @component
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RQ_Container = ({
  rootStyle,
  children,
}: React.PropsWithChildren<Props>) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        rootStyle,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <ScrollView style={styles.innerContainer}>{children}</ScrollView>
    </View>
  );
};

export default RQ_Container;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  innerContainer: {
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: GlobalStyles.colors.background300,
  },
});
