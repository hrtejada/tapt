import { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../components/ui/Button";
import HeaderTwo from "../components/ui/HeaderTwo";
import InfoChip from "../components/ui/InfoChip";
import { GlobalStyles } from "../constants/styles";
import { ACCEPT } from "../constants/words";
import { useUserContext } from "../store/user-context";
import { DUMMY_EMAILS } from "../testData/DUMMY_DATA";
import { ReplyStackProps } from "../util/react-navigation";

/**
 * Component that will help the user build an simple email reply.
 *
 * TODO: Change how note State works to add validation/cleansing.
 *
 * @version 0.2.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ReplyScreen = ({ route, navigation }: ReplyStackProps) => {
  const insets = useSafeAreaInsets();
  const { state } = useUserContext();
  const mode = route.params?.mode;

  const [note, setNote] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const parameters = state.parameters;

  /**
   * Handles the reply functionality.
   *
   * Send the reply email.
   * Navigate back to the Email Screen.
   */
  const replyHandler = () => {
    /*
    Create email template and include the selected parameters and note.
    Send the email via Gmail API
    */
    console.log("Selected params:", selected); // See the selected params
    console.log("Note:", note); // See the note
    DUMMY_EMAILS.shift(); // TODO: Just for testing; Shouldn't need this when retrieving one email at a time from API
    navigation.navigate("Email", { action: "next" });
  };

  /**
   * Navigate back one screen on the Stack
   */
  const cancleHandler = () => {
    navigation.pop();
  };

  /**
   * Check the parameter of the pressed InfoChip.
   *
   * If the parameter is already selected, remove it.
   * If the parameter is not in selected, add it.
   */
  const chipPressHandler = (param: string) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(param)) {
        return prevSelected.filter((s) => s !== param);
      } else {
        return [...prevSelected, param];
      }
    });
  };

  return (
    <View
      style={[
        styles.rootContainer,
        {
          backgroundColor:
            mode === ACCEPT
              ? GlobalStyles.colors.success500
              : GlobalStyles.colors.warning500,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <ScrollView style={styles.innerContainer}>
        <HeaderTwo>Modify Reply Message:</HeaderTwo>
        <Text style={styles.paramText}>
          Select parameters to mention in message
        </Text>
        <View style={styles.chipContainer}>
          {parameters.map((parameter) => (
            <InfoChip
              key={parameter}
              text={parameter}
              onPress={chipPressHandler}
            />
          ))}
        </View>
        <KeyboardAvoidingView>
          <View style={styles.noteContainer}>
            <TextInput
              style={styles.noteInput}
              value={note}
              keyboardType="default"
              maxLength={255}
              multiline
              numberOfLines={4}
              onChangeText={setNote}
              placeholder="Add notes..."
            />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonsContainer}>
          <Button title="Send" onPress={replyHandler} type="primary" />
          <Button title="Cancel" onPress={cancleHandler} type="secondary" />
        </View>
      </ScrollView>
    </View>
  );
};

export default ReplyScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  innerContainer: {
    margin: 6,
    paddingHorizontal: 12,
    paddingVertical: 24,
    backgroundColor: GlobalStyles.colors.background300,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.text,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  paramText: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 8,
    fontStyle: "italic",
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  noteContainer: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.secondary700,
    marginVertical: 16,
  },
  noteInput: {
    flex: 1,
    height: 255,
    padding: 10,
    margin: 4,
    backgroundColor: GlobalStyles.colors.background100,
    fontSize: 18,
  },
});
