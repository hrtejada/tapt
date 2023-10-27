import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RankedBody from "../components/RankedQueue/RankedBody";
import RankedFooter from "../components/RankedQueue/RankedFooter";
import RankedHeader from "../components/RankedQueue/RankedHeader";
import HeaderOne from "../components/ui/HeaderOne";
import { GlobalStyles } from "../constants/styles";
import { RankedEmail, useRankedContext } from "../store/ranked-context";

/**
 * Screen that will display the Ranked Queue.
 *
 * TODO: Add border to separate Screen title and content??
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankedQueueScreen = () => {
  const insets = useSafeAreaInsets();
  const { state } = useRankedContext();

  const renderRankedItem = ({ item }: { item: RankedEmail }) => {
    // const message = DUMMY_EMAILS.find((email) => email.id === item.messageId);
    let rankedDisplay = [];
    for (let i = 0; i < item.rank!; i++) {
      rankedDisplay.push(
        <View key={`star-${i}`} style={styles.rankSpace}>
          <FontAwesome name="star" size={24} color={GlobalStyles.colors.text} />
        </View>
      );
    }

    return (
      <View style={styles.innerContainer}>
        <RankedHeader name={item.name} email={item.email}>
          {rankedDisplay}
        </RankedHeader>
        <RankedBody messageId={item.messageId} />
        <RankedFooter messageId={item.messageId} />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <HeaderOne>Ranked Queue</HeaderOne>
      <FlatList
        keyExtractor={(item) => item.messageId}
        renderItem={renderRankedItem}
        data={state.rankedEmails}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default RankedQueueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: GlobalStyles.colors.secondary400,
  },
  rankSpace: {
    paddingHorizontal: 1,
  },
  innerContainer: {
    backgroundColor: GlobalStyles.colors.primary300,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
  },
});
