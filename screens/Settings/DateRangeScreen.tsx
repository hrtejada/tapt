import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { StyleSheet, Text, View } from "react-native";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import { GlobalStyles } from "../../constants/styles";
import { DATE_RANGE, USER_ACTION_TYPES } from "../../constants/words";
import { useUserContext } from "../../store/user-context";

interface Props {
  text: string;
  minDate: Date;
  value: Date;
  onChange: (event: DateTimePickerEvent, date?: Date | undefined) => void;
}

const DatePicker = ({ text, minDate, value, onChange }: Props) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.dateText}>{text}</Text>
      </View>
      <DateTimePicker
        mode="date"
        display="calendar"
        minimumDate={minDate}
        onChange={onChange}
        value={value}
        style={{
          marginTop: 8,
        }}
      />
    </View>
  );
};

/**
 * DateRangeScreen Component.
 *
 * This component renders the screen that holds the datepickers.
 *
 * Using https://github.com/react-native-datetimepicker/datetimepicker.
 *
 * Using Inline function calls because the typing complains when put into
 * a separate function call. Need to invesitgate more
 *
 * TODO: Should we dismiss picker once use selects a date??
 * TODO: Should we limit how far out users can put the End Date??
 *
 * @component
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DateRangeScreen = () => {
  const { state, dispatch } = useUserContext();

  const startDate = state.startDate;
  const endDate = state.endDate;
  const today = new Date();
  const minEndDate = startDate < today ? today : startDate;

  return (
    <SettingsContainer header={DATE_RANGE.header} info={DATE_RANGE.info}>
      <View style={styles.mainContainer}>
        <DatePicker
          text="Start Date:"
          minDate={today}
          value={startDate}
          onChange={(_, date) => {
            // Do Backend stuff...
            date &&
              dispatch({ type: USER_ACTION_TYPES.START_DATE, payload: date });
          }}
        />
        <DatePicker
          text="End Date:"
          minDate={minEndDate}
          value={endDate}
          onChange={(_, date) => {
            // Do Backend stuff...
            date &&
              dispatch({ type: USER_ACTION_TYPES.END_DATE, payload: date });
          }}
        />
      </View>
    </SettingsContainer>
  );
};

export default DateRangeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.colors.background200,
    borderRadius: 8,
    paddingVertical: 16,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 2,
  },
  labelContainer: {
    marginLeft: 12,
  },
  dateText: {
    fontSize: 22,
    textDecorationLine: "underline",
  },
});
