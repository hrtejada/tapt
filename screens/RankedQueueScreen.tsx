import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Button from "../components/ui/Button";
import SenderInfo from "../components/EmailInfo/SenderInfo";
import HeaderOne from "../components/ui/HeaderOne";
import { GlobalStyles } from "../constants/styles";
import {
  DUMMY_EMAILS,
  DUMMY_RANKED,
  RankedProps,
} from "../testData/DUMMY_DATA";
import { RankedStackProps } from "../util/screen-navigation";
import React from "react";

/**
 * Screen that will display the Ranked Queue.
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankedQueueScreen = ({ navigation }: RankedStackProps) => {
  const pressHandler = () => {};

  const emailPressHandler = (id: string) => {
    navigation.navigate("Email", { action: "ranked", id: id });
  };

  const renderRankedItem = ({ item }: { item: RankedProps }) => {
    const message = DUMMY_EMAILS.find((email) => email.id === item.messageId);

    let rankedDisplay = [];
    for (let i = 0; i < item.rank!; i++) {
      rankedDisplay.push(
        <FontAwesome name="star" size={24} color={GlobalStyles.colors.text} />
      );
    }

    return (
      <View style={styles.rankedContainer}>
        <View style={styles.emailInfoContainer}>
          <SenderInfo name={message!.name} email={message!.email} />
          <View style={styles.rankedDisplay}>{rankedDisplay}</View>
          <View>
            <Text style={styles.text} numberOfLines={2}>
              Show the liked/disliked parameters associated to this email
            </Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsInnerContainer}>
            <Button onPress={pressHandler} buttonStyle={styles.acceptButton}>
              <FontAwesome5
                name="check"
                size={24}
                color={GlobalStyles.colors.text}
              />
            </Button>
            <Button onPress={pressHandler} buttonStyle={styles.rejectButton}>
              <FontAwesome5
                name="times"
                size={24}
                color={GlobalStyles.colors.text}
              />
            </Button>
          </View>
          <Button
            onPress={emailPressHandler.bind(this, item.messageId)}
            buttonStyle={styles.emailScreenButton}
          >
            <FontAwesome5
              name="envelope-open-text"
              size={32}
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
        keyExtractor={(item) => item.messageId}
      />
    </View>
  );
};

export default RankedQueueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
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
  acceptButton: {
    backgroundColor: "green",
    flex: 1,
  },
  rejectButton: {
    backgroundColor: "red",
    flex: 1,
  },
  emailScreenButton: {
    flex: 1,
    marginTop: 4,
  },
  rankedDisplay: {
    flexDirection: "row",
  },
});
