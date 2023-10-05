import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import GoBackButton from "../../components/Settings/GoBackButton";
import { GlobalStyles } from "../../constants/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InfoSection from "../../components/Settings/InfoSection";
import { useState } from "react";
import { DUMMY_USER_1 } from "../../testData/DUMMY_DATA";
import { NOTIFICATION_DETAILS, OPTIONS } from "../../constants/words";

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
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const NotificationCadenceScreen = () => {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState(DUMMY_USER_1.notifications || "0");

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor =
      item.id === selected
        ? GlobalStyles.colors.primary700
        : GlobalStyles.colors.primary500;

    const selectItemHandler = () => {
      setSelected(item.id);
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
        <InfoSection
          headerText="Set data retrieval cadence"
          details={NOTIFICATION_DETAILS}
        />
        <View style={styles.optionsContainer}>
          <FlatList
            data={ITEMS}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selected}
            ItemSeparatorComponent={() => <View style={styles.bar} />}
          />
        </View>
      </View>
    </View>
  );
};

export default NotificationCadenceScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
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
  },
  bar: {
    borderBottomColor: GlobalStyles.colors.accent300,
    borderBottomWidth: 1,
    marginHorizontal: 8,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary600,
  },
});
