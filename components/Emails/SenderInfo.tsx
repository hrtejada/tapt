import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  name: string;
  email: string;
}

/**
 * Component that will display the email senders info.
 *
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const SenderInfo = ({ name, email }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name} - </Text>
      <Text style={styles.email} numberOfLines={1}>
        {email}
      </Text>
    </View>
  );
};

export default SenderInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary500,
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.accent700,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 20,
  },
});
