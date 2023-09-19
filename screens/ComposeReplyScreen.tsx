import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Button from "../components/ui/Button";
import { GlobalStyles } from "../constants/styles";
import { DUMMY_EMAILS, DUMMY_SETTING } from "../testData/DUMMY_DATA";
import { ReplyStackProps } from "../util/screen-navigation";
import InfoChip from "../components/ui/InfoChip";
import HeaderTwo from "../components/ui/HeaderTwo";
import { useState } from "react";

/**
 * Component that will help the user build an simple email reply.
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ComposeReplyScreen = ({ route, navigation }: ReplyStackProps) => {
  const [note, setNote] = useState("");
  const parameters = DUMMY_SETTING.parameters;
  const mode = route.params?.mode;

  /**
   * Handles the reply functionality.
   *
   * Send the reply email.
   * Navigate back to the Email Screen.
   */
  const replyHandler = () => {
    DUMMY_EMAILS.shift();
    navigation.navigate("Email", { email: "next" });
  };

  /**
   * Navigate back one screen on the Stack
   */
  const cancleHandler = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderTwo>Select parameters:</HeaderTwo>
        <View style={styles.chipContainer}>
          {parameters.map((parameter) => (
            <InfoChip key={parameter} text={parameter} mode={mode} />
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
          <Button onPress={replyHandler}>Reply</Button>
          <Button onPress={cancleHandler}>Cancel</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ComposeReplyScreen;

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
