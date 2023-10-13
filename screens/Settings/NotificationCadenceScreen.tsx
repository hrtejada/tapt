import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import { GlobalStyles } from "../../constants/styles";
import { NOTIFICATION_CADENCE, OPTIONS, TYPES } from "../../constants/words";
import { useUserContext } from "../../store/user-context";

// TODO: Is it worth putting this in its own component?
interface ItemData {
  id: string;
  title: string;
}

// TODO: See if there will be an issue with creating an id this way
const ITEMS: ItemData[] = [
  {
    id: OPTIONS.OFF.toString(),
    title: "OFF",
  },
  {
    id: OPTIONS.ONE_HOUR.toString(),
    title: "HOURLY",
  },
  {
    id: OPTIONS.THREE_HOURS.toString(),
    title: "EVERY 3 HOURS",
  },
  {
    id: OPTIONS.SIX_HOURS.toString(),
    title: "EVERY 6 HOURS",
  },
  {
    id: OPTIONS.TWELVE_HOURS.toString(),
    title: "EVERY 12 HOURS",
  },
];

interface Props {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
}

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
 * Component that holds notification cadence setting.
 *
 * @version 0.1.4
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const NotificationCadenceScreen = () => {
  const { state, dispatch } = useUserContext();

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor =
      item.id === state.notifications
        ? GlobalStyles.colors.primary700
        : GlobalStyles.colors.primary500;

    const selectItemHandler = () => {
      // Do Backend stuff...
      dispatch({ type: TYPES.NOTIFICATION, payload: item.id });
    };

    return (
      <Item
        item={item}
        onPress={selectItemHandler}
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
    backgroundColor: GlobalStyles.colors.primary500,
    marginHorizontal: 8,
    marginVertical: 12,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.accent500,
    borderWidth: 1,
    overflow: "hidden",
  },
  option: {
    backgroundColor: GlobalStyles.colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  optionText: {
    color: GlobalStyles.colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },
  bar: {
    borderBottomColor: GlobalStyles.colors.text,
    borderBottomWidth: 1,
    marginHorizontal: 8,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary600,
  },
});
