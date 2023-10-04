import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";
import Button from "../../components/ui/Button";
import HeaderTwo from "../../components/ui/HeaderTwo";
import { GlobalStyles } from "../../constants/styles";
import { DELETE_TITLE, DUMMY_DETAILS } from "../../constants/words";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InfoSection from "../../components/Settings/InfoSection";

/**
 * Screen containing the account deletion functionality.
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DeleteAccountScreen = () => {
  const insets = useSafeAreaInsets();

  const deleteAccountHandler = () => {
    // TODO: Flesh out deletion process on backend
  };

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <GoBackButton />
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
    </View>
  );
};

export default DeleteAccountScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background300,
  },
  infoContainer: {
    flex: 3,
    paddingHorizontal: 24,
    marginTop: 8,
  },
  infoText: {
    fontSize: 18,
  },
  deleteContainer: {
    flex: 2,
    paddingHorizontal: 24,
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
