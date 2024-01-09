import { useState } from "react";
import { StyleSheet } from "react-native";
import NoteDisplay from "../components/Reply-Queue/NoteDisplay";
import ParameterDisplay from "../components/Reply-Queue/ParameterDisplay";
import RQ_Buttons from "../components/Reply-Queue/RQ_Buttons";
import RQ_Container from "../components/Reply-Queue/RQ_Container";
import RQ_Info from "../components/Reply-Queue/RQ_Info";
import { GlobalStyles } from "../constants/styles";
import {
  EMAIL_ACTIONS,
  RANKED_ACTION_TYPES,
  USER_ACTION_TYPES,
} from "../constants/words";
import { useRankedContext } from "../store/ranked-context";
import { useUserContext } from "../store/user-context";
import { DUMMY_EMAILS } from "../testData/DUMMY_DATA";
import { ReplyStackProps } from "../util/react-navigation";
import { toggleParameter } from "../util/parameterHelpers";

/**
 * ReplyScreenComponent.
 *
 * This component renders the screen that will help the user build an simple email reply.
 *
 * TODO: Change how note State works to add validation/cleansing.
 * TODO: Look into the selected state. State isn't used but the set function is.
 * TODO: Check prop drilling on replyType
 *
 * @component
 * @version 0.3.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ReplyScreen = ({ route, navigation }: ReplyStackProps) => {
  const mode = route.params?.mode;

  const [note, setNote] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const { dispatch: userDispatch } = useUserContext();
  const { dispatch: rankedDispatch } = useRankedContext();

  let backgroundStyle = { backgroundColor: GlobalStyles.colors.background400 };
  let replyType = "";

  switch (mode) {
    case EMAIL_ACTIONS.ACCEPT:
    case EMAIL_ACTIONS.RANKED_ACCEPT:
      backgroundStyle = { backgroundColor: GlobalStyles.colors.success500 };
      replyType = EMAIL_ACTIONS.ACCEPT;
      break;
    case EMAIL_ACTIONS.REJECT:
    case EMAIL_ACTIONS.RANKED_REJECT:
      backgroundStyle = { backgroundColor: GlobalStyles.colors.warning500 };
      replyType = EMAIL_ACTIONS.REJECT;
      break;
    default:
      break;
  }

  /**
   * Handles the reply functionality.
   *
   * Send the reply email.
   * Navigate back to the Email Screen.
   * TODO: Create email template and include the selected parameters and note. Send the email via Gmail API
   */
  const handleReply = () => {
    // Ranked Queue actions
    if (
      (mode === EMAIL_ACTIONS.RANKED_ACCEPT ||
        mode === EMAIL_ACTIONS.RANKED_REJECT ||
        mode == EMAIL_ACTIONS.QUEUE_ACCEPT ||
        mode === EMAIL_ACTIONS.QUEUE_REJECT) &&
      route.params.messageId
    ) {
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
   * Handle a chip being pressed.
   *
   * Check the parameter of the pressed InfoChip.
   * If the parameter is already selected, remove it.
   * If the parameter is not in selected, add it.
   */
  const handleChipPress = (param: string) => {
    setSelected((prevSelected) => toggleParameter(param, prevSelected));
  };

  const handleNote = (note: string) => {
    setNote(note);
  };

  return (
    <RQ_Container rootStyle={backgroundStyle}>
      <RQ_Info header={replyType}>
        Optional: Select parameters to mention in message
      </RQ_Info>
      <ParameterDisplay replyType={replyType} onChipPress={handleChipPress} />
      <NoteDisplay note={note} onNoteChange={handleNote} />
      <RQ_Buttons actionButtonText="Send" handleAction={handleReply} />
    </RQ_Container>
  );
};

export default ReplyScreen;

const styles = StyleSheet.create({});
