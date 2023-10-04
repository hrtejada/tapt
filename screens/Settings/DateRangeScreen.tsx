import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";
import HeaderTwo from "../../components/ui/HeaderTwo";
import { GlobalStyles } from "../../constants/styles";
import { DUMMY_USER_1 } from "../../testData/DUMMY_DATA";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InfoSection from "../../components/Settings/InfoSection";
import { DUMMY_DETAILS } from "../../constants/words";

/**
 * Component that holds the datepickers.
 *
 * Using https://github.com/react-native-datetimepicker/datetimepicker.
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DateRangeScreen = () => {
  const insets = useSafeAreaInsets();
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
    <View
      style={[
        styles.rootContainer,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <GoBackButton />
      <View style={styles.innerContainer}>
        <InfoSection headerText="Set Date Range" details={DUMMY_DETAILS} />
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
      </View>
    </View>
  );
};

export default DateRangeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background300,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
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
