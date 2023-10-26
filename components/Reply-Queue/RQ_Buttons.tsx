import { StyleSheet, Text, View } from "react-native";
import AnimatedButton from "../ui/AnimatedButton";
import { useNavigation } from "@react-navigation/native";
import { RankedStackProps } from "../../util/react-navigation";

interface Props {
  actionButtonText: string;
  actionHandler: () => void;
}

const RQ_Buttons = ({ actionButtonText, actionHandler }: Props) => {
  const navigation = useNavigation<RankedStackProps["navigation"]>();

  /**
   * Navigate back one screen on the Stack
   */
  const cancleHandler = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <AnimatedButton
        title={actionButtonText}
        onPress={actionHandler}
        type="primary"
      />
      <AnimatedButton title="Cancel" onPress={cancleHandler} type="secondary" />
    </View>
  );
};

export default RQ_Buttons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
