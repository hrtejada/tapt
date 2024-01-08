import { StyleSheet, View } from "react-native";
import { useUserContext } from "../../store/user-context";
import InfoChip from "../ui/InfoChip";
import { EMAIL_ACTIONS } from "../../constants/words";

interface Props {
  replyType: string;
  onChipPress: (param: string) => void;
}

/**
 * ParameterDisplay Component.
 *
 * Thie component renders the parameters for the Reply Screen.
 *
 * @component
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ParameterDisplay = ({ replyType, onChipPress }: Props) => {
  const { state: userState } = useUserContext();
  const parameters = userState.parameters;

  return (
    <View style={styles.container}>
      {parameters.map((parameter) => (
        <InfoChip
          key={parameter}
          text={parameter}
          replyType={replyType}
          onPress={onChipPress}
        />
      ))}
    </View>
  );
};

export default ParameterDisplay;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 4,
    paddingBottom: 32,
  },
});
