import { StyleSheet, Text, View } from "react-native";
import HeaderTwo from "../ui/HeaderTwo";

interface Props {
  headerText: string;
  details: string;
}

const InfoSection = ({ headerText, details }: Props) => {
  return (
    <View style={styles.infoContainer}>
      <HeaderTwo>{headerText}</HeaderTwo>
      <Text style={styles.infoText}>{details}</Text>
    </View>
  );
};

export default InfoSection;

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 8,
  },
  infoText: {
    fontSize: 18,
  },
});
