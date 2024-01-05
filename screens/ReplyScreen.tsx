import { useState } from "react";
import { StyleSheet } from "react-native";
import RQ_Info from "../components/Reply-Queue/RQ_Info";
import NoteDisplay from "../components/Reply-Queue/NoteDisplay";
import ParameterDisplay from "../components/Reply-Queue/ParameterDisplay";
import RQ_Buttons from "../components/Reply-Queue/RQ_Buttons";
import RQ_Container from "../components/Reply-Queue/RQ_Container";
import { GlobalStyles } from "../constants/styles";
import {
  EMAIL_ACTIONS,
  RANKED_ACTION_TYPES,
  USER_ACTION_TYPES,
} from "../constants/words";
import { DUMMY_EMAILS } from "../testData/DUMMY_DATA";
import { ReplyStackProps } from "../util/react-navigation";
import { useUserContext } from "../store/user-context";
import { useRankedContext } from "../store/ranked-context";

/**
 * Component that will help the user build an simple email reply.
 *
 * TODO: Change how note State works to add validation/cleansing.
 *
 * @version 0.3.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ReplyScreen = ({ route, navigation }: ReplyStackProps) => {
  const mode = route.params?.mode;

  const [note, setNote] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const { state: userState, dispatch: userDispatch } = useUserContext();
  const { state: rankedState, dispatch: rankedDispatch } = useRankedContext();

  let backgroundStyle;

  switch (mode) {
    case EMAIL_ACTIONS.ACCEPT:
    case EMAIL_ACTIONS.RANKED_ACCEPT:
      backgroundStyle = { backgroundColor: GlobalStyles.colors.success500 };
      break;
    case EMAIL_ACTIONS.REJECT:
    case EMAIL_ACTIONS.RANKED_REJECT:
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
    // TODO: Create email template and include the selected parameters and note. Send the email via Gmail API
    console.log("Selected params:", selected); // See the selected params
    console.log("Note:", note); // See the note

    if (mode === EMAIL_ACTIONS.RANKED_ACCEPT && route.params.messageId) {
      rankedDispatch({
        type: RANKED_ACTION_TYPES.REMOVE_EMAIL,
        payload: route.params.messageId,
      });
      navigation.navigate("Ranked");
    } else {
      DUMMY_EMAILS.shift(); // TODO: Just for testing; Shouldn't need this when retrieving one email at a time from API
      userDispatch({
        type: USER_ACTION_TYPES.UNREAD_COUNT,
        payload: DUMMY_EMAILS.length,
      });
      navigation.navigate("Email", { action: "next" });
    }
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
      <RQ_Info header="Modify Reply Message:">
        Optional: Select parameters to mention in message
      </RQ_Info>
      <ParameterDisplay onChipPress={chipPressHandler} />
      <NoteDisplay note={note} onNoteChange={noteHandler} />
      <RQ_Buttons actionButtonText="Send" actionHandler={replyHandler} />
    </RQ_Container>
  );
};

export default ReplyScreen;

const styles = StyleSheet.create({});
