import { useState } from "react";
import { StyleSheet } from "react-native";
import HeaderDisplay from "../components/Reply-Queue/HeaderDisplay";
import NoteDisplay from "../components/Reply-Queue/NoteDisplay";
import ParameterDisplay from "../components/Reply-Queue/ParameterDisplay";
import RQ_Buttons from "../components/Reply-Queue/RQ_Buttons";
import RQ_Container from "../components/Reply-Queue/RQ_Container";
import { GlobalStyles } from "../constants/styles";
import { EMAIL_ACTIONS } from "../constants/words";
import { DUMMY_EMAILS } from "../testData/DUMMY_DATA";
import { ReplyStackProps } from "../util/react-navigation";

/**
 * Component that will help the user build an simple email reply.
 *
 * TODO: Change how note State works to add validation/cleansing.
 *
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ReplyScreen = ({ route, navigation }: ReplyStackProps) => {
  const mode = route.params?.mode;

  const [note, setNote] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  let backgroundStyle;

  switch (mode) {
    case EMAIL_ACTIONS.ACCEPT:
      backgroundStyle = { backgroundColor: GlobalStyles.colors.success500 };
      break;
    case EMAIL_ACTIONS.REJECT:
      backgroundStyle = { backgroundColor: GlobalStyles.colors.warning500 };
      break;
    default:
      break;
  }

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

  const noteHandler = (note: string) => {
    setNote(note);
  };

  return (
    <RQ_Container rootStyle={backgroundStyle}>
      <HeaderDisplay header="Modify Reply Message:">
        Optional: Select parameters to mention in message
      </HeaderDisplay>
      <ParameterDisplay onChipPress={chipPressHandler} />
      <NoteDisplay note={note} onNoteChange={noteHandler} />
      <RQ_Buttons actionButtonText="Send" actionHandler={replyHandler} />
    </RQ_Container>
  );
};

export default ReplyScreen;

const styles = StyleSheet.create({});
