import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  name: string;
  email: string;
  children: React.ReactNode;
}

/**
 * Component that will display the email senders info inside
 * the RankedQueueScreen.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankedHeader = ({ name, email, children }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.emailInfoContainer}>
        <Text style={styles.name}>{name} - </Text>
        <Text style={styles.email} numberOfLines={1}>
          {email}
        </Text>
      </View>
      <View style={styles.bar} />
      <View style={styles.rankedDisplay}>{children}</View>
    </View>
  );
};

export default RankedHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.background200,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent700,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 5,
  },
  bar: {
    width: 3,
    height: "75%",
    backgroundColor: GlobalStyles.colors.accent500,
  },
  emailInfoContainer: {
    flexDirection: "row",
  },
  rankedDisplay: {
    flexDirection: "row",
    paddingVertical: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 18,
  },
});
