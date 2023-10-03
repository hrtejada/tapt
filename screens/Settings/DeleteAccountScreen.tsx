import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";
import Button from "../../components/ui/Button";
import HeaderTwo from "../../components/ui/HeaderTwo";
import { GlobalStyles } from "../../constants/styles";
import { DELETE_TITLE } from "../../constants/words";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Screen containing the account deletion functionality.
 *
 * @version 0.1.0
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
      <View style={styles.infoContainer}>
        <HeaderTwo>Info</HeaderTwo>
        <Text style={styles.infoText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ex
          fuga aut quos amet libero mollitia distinctio, aliquid maiores
          voluptatum ut deleniti accusamus perferendis doloremque veniam cum.
          Illo, laudantium sint.
        </Text>
      </View>
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
    justifyContent: "space-evenly",
  },
  infoContainer: {
    flex: 3,
    padding: 8,
  },
  infoText: {
    fontSize: 18,
  },
  deleteContainer: {
    flex: 2,
    paddingHorizontal: 20,
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
