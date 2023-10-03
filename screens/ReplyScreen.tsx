import { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Button from "../components/ui/Button";
import HeaderTwo from "../components/ui/HeaderTwo";
import InfoChip from "../components/ui/InfoChip";
import { GlobalStyles } from "../constants/styles";
import { DUMMY_EMAILS, DUMMY_USER_1 } from "../testData/DUMMY_DATA";
import { ReplyStackProps } from "../util/react-navigation";

/**
 * Component that will help the user build an simple email reply.
 *
 * TODO: Change how note State works to add validation/cleansing.
 *
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ReplyScreen = ({ route, navigation }: ReplyStackProps) => {
  const [note, setNote] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const parameters = DUMMY_USER_1.settings.parameters;
  const mode = route.params?.mode;

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
    DUMMY_EMAILS.shift();
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
      if (param in prevSelected) {
        return prevSelected.filter((s) => s !== param);
      } else {
        return [...prevSelected, param];
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderTwo>Select parameters:</HeaderTwo>
        <View style={styles.chipContainer}>
          {parameters.map((parameter) => (
            <InfoChip
              key={parameter}
              text={parameter}
              mode={mode}
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
          <Button onPress={replyHandler}>Send</Button>
          <Button onPress={cancleHandler}>Cancel</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReplyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    margin: 12,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  noteContainer: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.accent300,
    marginVertical: 16,
  },
  noteInput: {
    flex: 1,
    height: 255,
    borderWidth: 1,
    padding: 10,
    margin: 4,
    backgroundColor: GlobalStyles.colors.background200,
    fontSize: 18,
  },
});
