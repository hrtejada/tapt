import { KeyboardAvoidingView, StyleSheet, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  note: string;
  onNoteChange: (note: string) => void;
}

/**
 * NoteDisplay Component.
 *
 * This component renders the input for writing a note to
 * attach to the reply email.
 *
 * @component
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const NoteDisplay = ({ note, onNoteChange }: Props) => {
  return (
    <KeyboardAvoidingView>
      <TextInput
        style={styles.input}
        value={note}
        keyboardType="default"
        maxLength={255}
        multiline
        numberOfLines={4}
        onChangeText={onNoteChange}
        placeholder="Add notes..."
      />
    </KeyboardAvoidingView>
  );
};

export default NoteDisplay;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 255,
    padding: 10,
    margin: 4,
    marginBottom: 16,
    backgroundColor: GlobalStyles.colors.background100,
    fontSize: 18,
    borderWidth: 2,
  },
});
