import { StyleSheet, View } from "react-native";
import InfoSection from "../../components/Settings/InfoSection";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import Button from "../../components/ui/Button";
import { GlobalStyles } from "../../constants/styles";
import { DELETE_TITLE, DUMMY_DETAILS } from "../../constants/words";

/**
 * Screen containing the account deletion functionality.
 *
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DeleteAccountScreen = () => {
  const deleteAccountHandler = () => {
    // TODO: Flesh out deletion process on backend
  };

  return (
    <SettingsContainer>
      <InfoSection headerText="Info" details={DUMMY_DETAILS} />
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
