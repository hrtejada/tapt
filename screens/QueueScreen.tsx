import { useState } from "react";
import { StyleSheet } from "react-native";
import HeaderDisplay from "../components/Reply-Queue/HeaderDisplay";
import NoteDisplay from "../components/Reply-Queue/NoteDisplay";
import ParameterDisplay from "../components/Reply-Queue/ParameterDisplay";
import RQ_Buttons from "../components/Reply-Queue/RQ_Buttons";
import RQ_Container from "../components/Reply-Queue/RQ_Container";
import { DUMMY_EMAILS } from "../testData/DUMMY_DATA";
import { QueueStackProps } from "../util/react-navigation";

const QueueScreen = ({ navigation, route }: QueueStackProps) => {
  const [note, setNote] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  /**
   * Handles the queue functionality.
   *
   * Add the email to the Ranked Queue.
   * Navigate back to the Email Screen.
   */
  const queueHandler = () => {
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
    <RQ_Container>
      <HeaderDisplay header="Queue Ranked Booking:">
        Optional: Select parameters you liked
      </HeaderDisplay>
      <ParameterDisplay onChipPress={chipPressHandler} />
      <NoteDisplay note={note} onNoteChange={noteHandler} />
      <RQ_Buttons actionButtonText="Queue" actionHandler={queueHandler} />
    </RQ_Container>
  );
};

export default QueueScreen;

const styles = StyleSheet.create({});
