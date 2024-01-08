import { StyleSheet, Text } from "react-native";
import HeaderOne from "../ui/HeaderOne";
import HeaderTwo from "../ui/HeaderTwo";

interface Props {
  header: string;
}

/**
 * RQ_Info Component.
 *
 * This component renders the header info for the Reply Screen.
 *
 * @component
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RQ_Info = ({ header, children }: React.PropsWithChildren<Props>) => {
  return (
    <>
      <HeaderOne>{header}</HeaderOne>
      <HeaderTwo>Modify Message:</HeaderTwo>
      <Text style={styles.text}>{children}</Text>
    </>
  );
};

export default RQ_Info;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: 16,
    paddingBottom: 4,
    fontStyle: "italic",
  },
});
