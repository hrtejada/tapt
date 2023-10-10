import { StyleSheet, Text, View } from "react-native";
import HeaderTwo from "../ui/HeaderTwo";

interface Props {
  headerText: string;
  details: string;
}

/**
 * Component to display the specific setting header and info.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
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
    marginBottom: 24,
  },
  infoText: {
    fontSize: 18,
  },
});
