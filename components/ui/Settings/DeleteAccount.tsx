import { StyleSheet, Text, View } from "react-native";
import Button from "../Button";
import { GlobalStyles } from "../../../constants/styles";
import HeaderTwo from "../HeaderTwo";

/**
 * Component that holds the delete account functionality.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DeleteAccount = () => {
  // TODO: Implement
  const deleteHandler = () => {};

  return (
    <View style={styles.container}>
      <HeaderTwo>DELETE ACCOUNT</HeaderTwo>
      <Button
        buttonStyle={styles.deleteButton}
        textStyle={styles.deleteButtonText}
        onPress={deleteHandler}
      >
        DELETE
      </Button>
    </View>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.accent700,
    backgroundColor: GlobalStyles.colors.secondary700,
  },
  deleteButton: {
    backgroundColor: "red",
  },
  deleteButtonText: {
    color: GlobalStyles.colors.background100,
  },
});
