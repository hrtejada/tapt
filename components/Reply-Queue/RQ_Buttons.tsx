import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { RankedStackProps } from "../../util/react-navigation";
import AnimatedButton from "../ui/AnimatedButton";

interface Props {
  actionButtonText: string;
  handleAction: () => void;
}

/**
 * RQ_Buttons Component.
 *
 * This component renders the button for the reply screen.
 * Two buttons, Send and Cancel.
 *
 * @component
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RQ_Buttons = ({ actionButtonText, handleAction }: Props) => {
  const navigation = useNavigation<RankedStackProps["navigation"]>();

  /**
   * Handle cancel press.
   *
   * Navigate back one screen on the Stack.
   */
  const handleCancel = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <AnimatedButton
        title={actionButtonText}
        onPress={handleAction}
        type="primary"
      />
      <AnimatedButton title="Cancel" onPress={handleCancel} type="secondary" />
    </View>
  );
};

export default RQ_Buttons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
