import { StyleSheet, Text, View } from "react-native";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import Button from "../../components/ui/Button";
import { GlobalStyles } from "../../constants/styles";
import { DELETE_ACCOUNT, DELETE_TITLE } from "../../constants/words";

/**
 * DeleteAccountScreen Component.
 *
 * This component renders a screen containing the account deletion setting.
 *
 * @component
 * @version 0.3.0
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
          title={"Delete Account"}
          type={"primary"}
          onPress={deleteAccountHandler}
          style={styles.deleteButton}
        >
          <Text style={styles.text}>{DELETE_TITLE.toUpperCase()}</Text>
        </Button>
      </View>
    </SettingsContainer>
  );
};

export default DeleteAccountScreen;

const styles = StyleSheet.create({
  deleteContainer: {
    height: 50,
    justifyContent: "center",
    top: "50%",
  },
  deleteButton: {
    backgroundColor: GlobalStyles.colors.warning500,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
