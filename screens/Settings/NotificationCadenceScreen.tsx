import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import { GlobalStyles } from "../../constants/styles";
import {
  NOTIFICATION_CADENCE,
  NOTIFICATION_OPTIONS,
  USER_ACTION_TYPES,
} from "../../constants/words";
import { useUserContext } from "../../store/user-context";

// TODO: Is it worth putting this in its own component?
interface ItemData {
  id: string;
  title: string;
}

// If NOTIFICATION_OPTIONS are used in other places, then we need a different ID system e.g. uuid
const ITEMS: ItemData[] = [
  {
    id: NOTIFICATION_OPTIONS.OFF.toString(),
    title: "OFF",
  },
  {
    id: NOTIFICATION_OPTIONS.ONE_HOUR.toString(),
    title: "HOURLY",
  },
  {
    id: NOTIFICATION_OPTIONS.THREE_HOURS.toString(),
    title: "EVERY 3 HOURS",
  },
  {
    id: NOTIFICATION_OPTIONS.SIX_HOURS.toString(),
    title: "EVERY 6 HOURS",
  },
  {
    id: NOTIFICATION_OPTIONS.TWELVE_HOURS.toString(),
    title: "EVERY 12 HOURS",
  },
];

interface Props {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
}

/**
 * Item Component.
 *
 * This minor component is used to help render the buttons
 * representing the notification options.
 *
 * @component
 */
const Item = ({ item, onPress, backgroundColor }: Props) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.option,
      { backgroundColor },
      pressed && styles.pressed,
    ]}
  >
    <Text style={styles.optionText}>{item.title}</Text>
  </Pressable>
);

/**
 * NotificationCadenceScreen Component.
 *
 * This component renders a screen that holds notification cadence settings.
 * The User can pick from a predetermined set of options.
 *
 * @component
 * @version 0.1.4
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const NotificationCadenceScreen = () => {
  const { state, dispatch } = useUserContext();

  /**
   * Function to render the option items.
   *
   * This function helps to render the option items.
   */
  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor =
      item.id === state.notifications
        ? GlobalStyles.colors.primary300
        : GlobalStyles.colors.background400;

    /**
     * Function to handle item selection.
     */
    const handleSelectItem = () => {
      // Do Backend stuff...
      dispatch({ type: USER_ACTION_TYPES.NOTIFICATION, payload: item.id });
    };

    return (
      <Item
        item={item}
        onPress={handleSelectItem}
        backgroundColor={backgroundColor}
      />
    );
  };

  return (
    <SettingsContainer
      header={NOTIFICATION_CADENCE.header}
      info={NOTIFICATION_CADENCE.info}
    >
      <View style={styles.optionsContainer}>
        <FlatList
          data={ITEMS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={state.notifications}
          ItemSeparatorComponent={() => <View style={styles.bar} />}
          scrollEnabled={false}
        />
      </View>
    </SettingsContainer>
  );
};

export default NotificationCadenceScreen;

const styles = StyleSheet.create({
  optionsContainer: {
    backgroundColor: GlobalStyles.colors.background400,
    marginVertical: 12,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: GlobalStyles.colors.text,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  optionText: {
    color: GlobalStyles.colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },
  bar: {
    borderBottomColor: GlobalStyles.colors.accent500,
    // borderBottomWidth: 1,
    marginHorizontal: 8,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary400,
  },
});
