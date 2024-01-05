import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FLAT_BUTTON_ICON_SIZE } from "../../constants/sizes";
import { DATE_RANGE_TITLE } from "../../constants/words";
import { DateRangeStackProps } from "../../util/react-navigation";
import FlatButton from "./FlatButton";

/**
 * DateRangeButton Component.
 *
 * This component renders a flat button used to navigate to the DateRangeScreen.
 *
 * @component
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
