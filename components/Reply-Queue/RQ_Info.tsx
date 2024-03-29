import { StyleSheet, Text } from "react-native";
import HeaderTwo from "../ui/HeaderTwo";

interface Props {
  header: string;
}

// TODO: Is this the 'best practice' for typing children with extra props???
const RQ_Info = ({ header, children }: React.PropsWithChildren<Props>) => {
  return (
    <>
      <HeaderTwo>{header}</HeaderTwo>
      <Text style={styles.text}>{children}</Text>
    </>
  );
};

export default RQ_Info;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 8,
    fontStyle: "italic",
  },
});
