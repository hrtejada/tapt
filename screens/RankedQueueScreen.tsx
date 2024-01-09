import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RankedBody from "../components/RankedQueue/RankedBody";
import RankedFooter from "../components/RankedQueue/RankedFooter";
import RankedHeader from "../components/RankedQueue/RankedHeader";
import HeaderOne from "../components/ui/HeaderOne";
import { GlobalStyles } from "../constants/styles";
import { RankedEmail, useRankedContext } from "../store/ranked-context";

/**
 * RankedQueueScreen Component.
 *
 * This component renders a screen that displays the Ranked Queue.
 *
 * TODO: Add border to separate Screen title and content??
 * TODO: See if we need to change how key is generated in renderRankedItem
 *
 * @component
 * @version 0.2.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankedQueueScreen = () => {
  const insets = useSafeAreaInsets();
  const { state } = useRankedContext();

  const isQueueEmpty = state.rankedEmails.length === 0;
  const emptyDisplay = (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No emails in queue</Text>
    </View>
  );

  const renderRankedItem = ({ item }: { item: RankedEmail }) => {
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
      {isQueueEmpty && emptyDisplay}
      {!isQueueEmpty && (
        <FlatList
          keyExtractor={(item) => item.messageId}
          renderItem={renderRankedItem}
          data={state.rankedEmails}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
};

export default RankedQueueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: GlobalStyles.colors.background500,
  },
  rankSpace: {
    paddingHorizontal: 1,
  },
  innerContainer: {
    backgroundColor: GlobalStyles.colors.secondary700,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  emptyContainer: {
    marginTop: 32,
    backgroundColor: GlobalStyles.colors.background300,
    marginHorizontal: 16,
    paddingVertical: 16,
  },
  emptyText: { fontSize: 24, textAlign: "center", fontStyle: "italic" },
});
