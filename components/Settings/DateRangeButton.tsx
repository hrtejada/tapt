import { StyleSheet } from "react-native";
import FlatButton from "./FlatButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DateRangeStackProps } from "../../util/react-navigation";
import { DATE_RANGE_TITLE } from "../../constants/words";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";

/**
 * Button used to navigate to the DateRangeScreen.
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const DateRangeButton = () => {
  const navigation = useNavigation<DateRangeStackProps["navigation"]>();

  const leftIcon = (
    <FontAwesome5
      name="calendar-alt"
      size={FLAT_BUTTON_ICON_SIZE}
      color="black"
    />
  );

  const dateRangeNavigationHandler = () => {
    navigation.navigate("DateRange");
  };

  return (
    <FlatButton leftIcon={leftIcon} onPress={dateRangeNavigationHandler}>
      {DATE_RANGE_TITLE}
    </FlatButton>
  );
};

export default DateRangeButton;

const styles = StyleSheet.create({});
