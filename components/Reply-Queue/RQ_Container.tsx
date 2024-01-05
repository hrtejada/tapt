import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  rootStyle?: {};
}

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
    margin: 6,
    paddingHorizontal: 12,
    paddingVertical: 24,
    backgroundColor: GlobalStyles.colors.background300,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.text,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
});
