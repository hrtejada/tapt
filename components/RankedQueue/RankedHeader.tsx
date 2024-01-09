import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  name: string;
  email: string;
  children: React.ReactNode;
}

/**
 * RankedHeader Component.
 *
 * This component renders a header that will display the email senders info.
 *
 * @component
 * @version 0.1.2
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
      <View style={styles.rankedDisplay}>{children}</View>
    </View>
  );
};

export default RankedHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.background200,
    paddingHorizontal: 8,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    minHeight: 36,
  },
  emailInfoContainer: {
    flexDirection: "row",
  },
  rankedDisplay: {
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 18,
  },
});
