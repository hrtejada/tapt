import { StyleSheet, Text, View } from "react-native";
import Button from "../ui/Button";
import { GlobalStyles } from "../../constants/styles";

const GoBackButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={styles.goBackContainer}>
      <Button onPress={onPress}>Go Back</Button>
    </View>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  goBackContainer: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: GlobalStyles.colors.accent100,
  },
});
