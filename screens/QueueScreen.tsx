import { useState } from "react";
import { StyleSheet } from "react-native";
import RQ_Info from "../components/Reply-Queue/RQ_Info";
import NoteDisplay from "../components/Reply-Queue/NoteDisplay";
import ParameterDisplay from "../components/Reply-Queue/ParameterDisplay";
import RQ_Buttons from "../components/Reply-Queue/RQ_Buttons";
import RQ_Container from "../components/Reply-Queue/RQ_Container";
import { DUMMY_EMAILS, RANKED_EMAILS } from "../testData/DUMMY_DATA";
import { QueueStackProps } from "../util/react-navigation";
import { useRankedContext } from "../store/ranked-context";
import { RANKED_ACTION_TYPES, USER_ACTION_TYPES } from "../constants/words";
import { useUserContext } from "../store/user-context";
import { toggleParameter } from "../util/parameterHelpers";

/**
 * QueueScreen Component.
 *
 * This component renders a screen that allows the User to select parameters and
 * add a note to the email they want queued.
 *
 * @compnent
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const QueueScreen = ({ navigation, route }: QueueStackProps) => {
  const [note, setNote] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const { dispatch: rankedDispatch } = useRankedContext();
  const { dispatch: userDispatch } = useUserContext();

  const replyType = "Queue";

  /**
   * Handles the queue functionality.
   *
   * Add the email to the Ranked Queue.
   * Navigate back to the Email Screen.
   */
  const handleQueue = () => {
    const payload = {
      messageId: route.params.messageId,
      name: route.params.name,
      email: route.params.email,
      rank: route.params.rank,
      parameters: selected,
      note: note,
    };

    // TODO: Hardcoded Ranked. Remove once backend in place
    RANKED_EMAILS[
      RANKED_EMAILS.findIndex((email) => email.id === payload.messageId)
    ].rank = payload.rank;

    rankedDispatch({ type: RANKED_ACTION_TYPES.ADD_EMAIL, payload: payload });
    DUMMY_EMAILS.shift(); // TODO: Just for testing; Shouldn't need this when retrieving one email at a time from API
    userDispatch({
      type: USER_ACTION_TYPES.UNREAD_COUNT,
      payload: DUMMY_EMAILS.length,
    });
    navigation.navigate("Email", { action: "next" });
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
    <RQ_Container>
      <RQ_Info header={replyType}>
        Optional: Select parameters you liked
      </RQ_Info>
      <ParameterDisplay replyType={replyType} onChipPress={handleChipPress} />
      <NoteDisplay note={note} onNoteChange={handleNote} />
      <RQ_Buttons actionButtonText="Queue" handleAction={handleQueue} />
    </RQ_Container>
  );
};

export default QueueScreen;

const styles = StyleSheet.create({});
