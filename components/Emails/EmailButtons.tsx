import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useUserContext } from "../../store/user-context";
import AnimatedButton from "../ui/AnimatedButton";
import RankButtons from "./RankButtons";

interface Props {
  // rank: number;
  onAccept: () => void;
  onReject: () => void;
  onQueue: () => void;
  // onRank: (value: number) => void;
}

/**
 * Component that will display the accept and reject buttons
 * for the Email Screen.
 *
 * TODO: Figure out 'name' error on icons; Using 'IconProps'. Not sure if temp solution or full.
 *
 * TODO: Rework Rank buttons
 *
 * TODO: Come back and fix the buttons. Something going on with containers and flex
 *
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailButtons = ({ onAccept, onReject, onQueue }: Props) => {
  const { state } = useUserContext();

  // const rankButtonPress = (value: number) => {
  //   onRank(value);
  // };

  // Using this because using StyleSheet wasn't working properly
  const windowWidth = Dimensions.get("window").width;
  const buttonWidth = { width: windowWidth / 3 };

  const acceptButton = (
    <AnimatedButton
      title="Accept"
      onPress={onAccept}
      style={[styles.button, styles.acceptButton, buttonWidth]}
    >
      <FontAwesome5 name="check" size={72} color={GlobalStyles.colors.text} />
    </AnimatedButton>
  );

  const rejectButton = (
    <AnimatedButton
      title="Reject"
      onPress={onReject}
      style={[styles.button, styles.rejectButton, buttonWidth]}
    >
      <FontAwesome5 name="times" size={72} color={GlobalStyles.colors.text} />
    </AnimatedButton>
  );

  return (
    <View style={styles.rootContainer}>
      {state.isRanking && <RankButtons />}
      <View style={styles.innerContainer}>
        {!state.inRankMode && acceptButton}
        {state.inRankMode && (
          <AnimatedButton
            title="QUEUE"
            onPress={onQueue}
            style={[styles.button, styles.queueButton, buttonWidth]}
          >
            <MaterialIcons name="queue" size={64} color="black" />
          </AnimatedButton>
        )}
        {rejectButton}
      </View>
    </View>
  );
};

export default EmailButtons;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.colors.accent500,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 4,
  },
  button: {
    borderRadius: 25,
  },
  queueButton: {
    backgroundColor: GlobalStyles.colors.secondary500,
  },
  acceptButton: {
    backgroundColor: GlobalStyles.colors.success500,
  },
  rejectButton: {
    backgroundColor: GlobalStyles.colors.warning500,
  },
});
