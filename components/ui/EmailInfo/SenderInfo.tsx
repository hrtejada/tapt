import { StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
  email: string;
}

/**
 * Component that will display the email senders info.
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const SenderInfo = ({ name, email }: Props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleName}>{name} - </Text>
      <Text style={styles.titleEmail}>{email}</Text>
    </View>
  );
};

export default SenderInfo;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: "center",
  },
  titleName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleEmail: {
    fontSize: 20,
  },
});
