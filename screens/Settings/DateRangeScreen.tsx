import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";
import HeaderTwo from "../../components/ui/HeaderTwo";
import { GlobalStyles } from "../../constants/styles";
import { DUMMY_USER_1 } from "../../testData/DUMMY_DATA";

/**
 * Component that holds the datepickers.
 *
 * Using https://github.com/react-native-datetimepicker/datetimepicker.
 *
 * @version 0.1.0
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
    <View style={styles.container}>
      <GoBackButton />
      <HeaderTwo>Set Date Range</HeaderTwo>
      <View style={styles.innerContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Start Date</Text>
          <DateTimePicker
            mode="date"
            display="calendar"
            minimumDate={today}
            onChange={(_, date) => date && setStartDate(date)}
            value={startDate}
          />
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>End Date</Text>
          <DateTimePicker
            mode="date"
            display="calendar"
            minimumDate={minEndDate}
            onChange={(_, date) => date && setEndDate(date)}
            value={endDate}
          />
        </View>
      </View>
    </View>
  );
};

export default DateRangeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.accent700,
  },
  innerContainer: {
    flexDirection: "row",
  },
  dateContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background200,
    alignItems: "center",
    padding: 8,
    marginHorizontal: 6,
  },
  dateText: {
    fontSize: 18,
    padding: 4,
  },
});
