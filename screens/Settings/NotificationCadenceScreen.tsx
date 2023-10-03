import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";
import { GlobalStyles } from "../../constants/styles";

/**
 * Component that holds notification cadence setting.
 *
 * TODO: Flesh Out
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const NotificationCadenceScreen = () => {
  return (
    <View style={styles.rootContainer}>
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
