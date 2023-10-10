import { StyleSheet, View } from "react-native";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import Button from "../../components/ui/Button";
import { GlobalStyles } from "../../constants/styles";
import { DELETE_ACCOUNT, DELETE_TITLE } from "../../constants/words";

/**
 * Screen containing the account deletion functionality.
 *
 * @version 0.1.3
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DeleteAccountScreen = () => {
  const deleteAccountHandler = () => {
    // TODO: Flesh out deletion process on backend
  };

  return (
    <SettingsContainer
      header={DELETE_ACCOUNT.header}
      info={DELETE_ACCOUNT.info}
    >
      <View style={styles.deleteContainer}>
        <Button
          onPress={deleteAccountHandler}
          buttonStyle={styles.deleteButton}
          textStyle={styles.deleteText}
        >
          {DELETE_TITLE.toUpperCase()}
        </Button>
      </View>
    </SettingsContainer>
  );
};

export default DeleteAccountScreen;

const styles = StyleSheet.create({
  deleteContainer: {
    flex: 2,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  deleteButton: {
    backgroundColor: GlobalStyles.colors.warning,
    paddingVertical: 16,
  },
  deleteText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
