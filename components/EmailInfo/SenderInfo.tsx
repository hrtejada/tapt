import { StyleSheet, Text, View } from "react-native";

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
    <View style={styles.titleContainer}>
      <Text style={styles.titleName}>{name} - </Text>
      <Text style={styles.titleEmail} numberOfLines={1}>
        {email}
      </Text>
    </View>
  );
};

export default SenderInfo;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
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
