import { FlatList, StyleSheet, Text, View, StatusBar } from "react-native";
import { GlobalStyles } from "../constants/styles";
import HeaderOne from "../components/ui/HeaderOne";
import { DUMMY_RANKED, RankedProps } from "../testData/DUMMY_DATA";
import SenderInfo from "../components/ui/EmailInfo/SenderInfo";
import Button from "../components/ui/Button";
import { FontAwesome5 } from "@expo/vector-icons";

/**
 * Screen that will display the Ranked Queue.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankedQueueScreen = () => {
  const pressHandler = () => {};

  const renderRankedItem = ({ item }: { item: RankedProps }) => {
    return (
      <View style={styles.rankedContainer}>
        <View style={styles.emailInfoContainer}>
          <SenderInfo name={item.name} email={item.email} />
          <View>
            <Text style={styles.text} numberOfLines={2}>
              {item.description}
            </Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsInnerContainer}>
            <Button onPress={pressHandler}>
              <FontAwesome5
                name="check"
                size={20}
                color={GlobalStyles.colors.text}
              />
            </Button>
            <Button onPress={pressHandler}>
              <FontAwesome5
                name="minus"
                size={20}
                color={GlobalStyles.colors.text}
              />
            </Button>
          </View>
          <Button onPress={pressHandler}>
            <FontAwesome5
              name="envelope-open-text"
              size={20}
              color={GlobalStyles.colors.text}
            />
          </Button>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderOne>Ranked Queue</HeaderOne>
      <FlatList
        renderItem={renderRankedItem}
        data={DUMMY_RANKED}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RankedQueueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    // justifyContent: "flex-start",
    backgroundColor: GlobalStyles.colors.accent100,
  },
  emailInfoContainer: {
    flex: 3,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.secondary400,
    padding: 0,
  },
  buttonsInnerContainer: {
    flexDirection: "row",
  },
  text: {
    color: GlobalStyles.colors.text,
    fontSize: 18,
    marginTop: 4,
  },
  rankedContainer: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.background300,
    marginVertical: 8,
    padding: 12,
    borderRadius: 15,
  },
});
