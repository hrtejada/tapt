import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { RankedStackProps } from "../../util/react-navigation";
import AnimatedButton from "../ui/AnimatedButton";

/**
 * RankedInfo Component.
 *
 * This component renders a button that navigates to the Ranked Queue Screen.
 * It potentially displays additional information related to the Ranked Queue.
 *
 * @component
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankedInfo = () => {
  const navigation = useNavigation<RankedStackProps["navigation"]>();

  /**
   * Handle the press event on the Ranked Queue Button.
   *
   * Navigates the User to the Ranked Queue Screen.
   */
  const rankedQueuePressHandler = () => {
    navigation.navigate("Ranked");
  };

  return (
    <View style={styles.row}>
      <AnimatedButton
        title="View Ranked Queue"
        onPress={rankedQueuePressHandler}
        style={styles.button}
        textStyle={styles.rankedButtontext}
      />
      <View style={styles.rankedContainer}>
        <Text style={styles.rankedInfo}>
          Potentially display some info related to the Ranked Queue
        </Text>
      </View>
    </View>
  );
};

export default RankedInfo;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    marginHorizontal: 24,
    padding: 12,
    borderRadius: 13,
  },
  rankedContainer: {
    marginVertical: 16,
    marginHorizontal: 24,
  },
  rankedButtontext: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  rankedInfo: {
    fontSize: 20,
  },
});
