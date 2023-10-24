import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { RankedStackProps } from "../../util/react-navigation";
import AnimatedButton from "../ui/AnimatedButton";

/**
 * Ranked Info Component.
 *
 * Button to view Ranked Queue and displays info related to Ranked Queue
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankedInfo = () => {
  const navigation = useNavigation<RankedStackProps["navigation"]>();

  /**
   * Navigate to the Ranked Queue Screen
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
    borderColor: GlobalStyles.colors.accent500,
    alignItems: "center",
    marginHorizontal: 24,
    padding: 12,
    borderWidth: 1,
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
