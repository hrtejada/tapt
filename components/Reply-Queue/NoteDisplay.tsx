import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  note: string;
  onNoteChange: (note: string) => void;
}

const NoteDisplay = ({ note, onNoteChange }: Props) => {
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
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
      </View>
    </KeyboardAvoidingView>
  );
};

export default NoteDisplay;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.secondary700,
    marginVertical: 16,
  },
  input: {
    flex: 1,
    height: 255,
    padding: 10,
    margin: 4,
    backgroundColor: GlobalStyles.colors.background100,
    fontSize: 18,
  },
});
