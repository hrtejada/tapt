import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";
import { GlobalStyles } from "../../constants/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Component that holds notification cadence setting.
 *
 * TODO: Flesh Out
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const NotificationCadenceScreen = () => {
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
      <Text>NotificationCadenceScreen</Text>
      <Text style={styles.text}>Set data retrieval cadence</Text>
      <Text>Determine how to represent this</Text>
    </View>
  );
};

export default NotificationCadenceScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  text: {
    color: GlobalStyles.colors.text,
    fontSize: 24,
    fontWeight: "bold",
  },
});
