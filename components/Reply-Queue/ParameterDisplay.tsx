import { StyleSheet, View } from "react-native";
import { useUserContext } from "../../store/user-context";
import InfoChip from "../ui/InfoChip";

interface Props {
  onChipPress: (param: string) => void;
}

const ParameterDisplay = ({ onChipPress }: Props) => {
  const { state: userState } = useUserContext();

  const parameters = userState.parameters;

  return (
    <View style={styles.container}>
      {parameters.map((parameter) => (
        <InfoChip key={parameter} text={parameter} onPress={onChipPress} />
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
    margin: 16,
  },
});
