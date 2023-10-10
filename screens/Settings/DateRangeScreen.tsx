import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InfoSection from "../../components/Settings/InfoSection";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import { GlobalStyles } from "../../constants/styles";
import { DATE_RANGE, DUMMY_DETAILS } from "../../constants/words";
import { DUMMY_USER_1 } from "../../testData/DUMMY_DATA";

/**
 * Component that holds the datepickers.
 *
 * Using https://github.com/react-native-datetimepicker/datetimepicker.
 *
 * @version 0.1.3
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DateRangeScreen = () => {
  const [startDate, setStartDate] = useState<Date>(
    new Date(DUMMY_USER_1.settings.startDate) || new Date()
  );
  // TODO: Should we limit how far out users can put the End Date??
  const [endDate, setEndDate] = useState<Date>(
    new Date(DUMMY_USER_1.settings.endDate) || new Date()
  );

  // TODO: Review which way is better in the long run: Inline functions or function calls
  // const onStartDateChange = (event: DateTimePickerEvent, date: Date) => {
  //   setStartDate((prevDate) => date);
  // };

  // const onEndDateChange = (_, date: Date) => {
  //   setEndDate(date);
  // };

  const today = new Date();
  const minEndDate = startDate < today ? today : startDate;

  return (
    <SettingsContainer header={DATE_RANGE.header} info={DATE_RANGE.info}>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.dateText}>Start Date:</Text>
        </View>
        <View style={styles.datePickerContainer}>
          <DateTimePicker
            mode="date"
            display="calendar"
            minimumDate={today}
            onChange={(_, date) => date && setStartDate(date)}
            value={startDate}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.dateText}>End Date:</Text>
        </View>
        <View style={styles.datePickerContainer}>
          <DateTimePicker
            mode="date"
            display="calendar"
            minimumDate={minEndDate}
            onChange={(_, date) => date && setEndDate(date)}
            value={endDate}
          />
        </View>
      </View>
    </SettingsContainer>
  );
};

export default DateRangeScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginVertical: 12,
    minHeight: 50,
  },
  labelContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 8,
    width: "40%",
  },
  datePickerContainer: {
    // TODO: Figure out weird spacing issue with this
    backgroundColor: GlobalStyles.colors.background100,
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingRight: 10,
    borderRadius: 15,
  },
  dateText: {
    fontSize: 22,
    textDecorationLine: "underline",
  },
});
