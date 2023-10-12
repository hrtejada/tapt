import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import { GlobalStyles } from "../../constants/styles";
import { DATE_RANGE, TYPES } from "../../constants/words";
import { UserContext } from "../../store/user-context";

interface Props {
  text: string;
  minDate: Date;
  value: Date;
  onChange: (event: DateTimePickerEvent, date?: Date | undefined) => void;
}

const DatePicker = ({ text, minDate, value, onChange }: Props) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.dateText}>{text}</Text>
      </View>
      <View style={styles.datePickerContainer}>
        <DateTimePicker
          mode="date"
          display="calendar"
          minimumDate={minDate}
          onChange={onChange}
          value={value}
        />
      </View>
    </View>
  );
};

/**
 * Component that holds the datepickers.
 *
 * Using https://github.com/react-native-datetimepicker/datetimepicker.
 *
 * TODO: Should we dismiss picker once use selects a date??
 * TODO: Should we limit how far out users can put the End Date??
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DateRangeScreen = () => {
  const { state, dispatch } = useContext(UserContext);

  // TODO: Review which way is better in the long run: Inline functions or function calls
  // const onStartDateChange = (event: DateTimePickerEvent, date: Date) => {
  //   setStartDate((prevDate) => date);
  // };
  // const onEndDateChange = (_, date: Date) => {
  //   setEndDate(date);
  // };

  const startDate = state.startDate;
  const endDate = state.endDate;
  const today = new Date();
  const minEndDate = startDate < today ? today : startDate;

  return (
    <SettingsContainer header={DATE_RANGE.header} info={DATE_RANGE.info}>
      <DatePicker
        text="Start Date:"
        minDate={today}
        value={startDate}
        onChange={(_, date) =>
          date && dispatch({ type: TYPES.START_DATE, payload: date })
        }
      />
      <DatePicker
        text="End Date:"
        minDate={minEndDate}
        value={endDate}
        onChange={(_, date) =>
          date && dispatch({ type: TYPES.END_DATE, payload: date })
        }
      />
    </SettingsContainer>
  );
};

export default DateRangeScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginVertical: 12,
    minHeight: 50,
    backgroundColor: GlobalStyles.colors.background100,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
  },
  labelContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 8,
    width: "40%",
  },
  datePickerContainer: {
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingRight: 10,
    borderRadius: 15,
  },
  dateText: {
    fontSize: 22,
    textDecorationLine: "underline",
  },
});
