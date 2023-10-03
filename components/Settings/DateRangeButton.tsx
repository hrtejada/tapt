import { StyleSheet } from "react-native";
import FlatButton from "./FlatButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DateRangeStackProps } from "../../util/screen-navigation";

/**
 * Component to navigate to the DateRangeScreen.
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DateRangeButton = () => {
  const navigation = useNavigation<DateRangeStackProps["navigation"]>();

  const leftIcon = <FontAwesome5 name="calendar-alt" size={28} color="black" />;

  const dateRangeNavigationHandler = () => {
    navigation.navigate("DateRange");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={dateRangeNavigationHandler}>
      Date Range
    </FlatButton>
  );
};

export default DateRangeButton;

const styles = StyleSheet.create({});
