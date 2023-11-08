import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ACCEPT, REJECT } from "../../constants/words";
import { useUserContext } from "../../store/user-context";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import RankButtons from "./RankButtons";
import { useState } from "react";

interface Props {
  onAccept: () => void;
  onReject: () => void;
}

/**
 * Component that will display the accept and reject buttons
 * for the Email Screen.
 *
 * TODO: Figure out 'name' error on icons; Using 'IconProps'. Not sure if temp solution or full.
 *
 * TODO: Rework Rank buttons
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailButtons = ({ onAccept, onReject }: Props) => {
  const { state } = useUserContext();
  const [rank, setRank] = useState(0);

  const rankButtonPress = (value: number) => {
    setRank(value);
  };
  return (
    <View style={styles.rootContainer}>
      {state.isRanking && <RankButtons rank={rank} onPress={rankButtonPress} />}
      <View style={styles.innerContainer}>
        {!state.inRankMode && <IconButton type={ACCEPT} onPress={onAccept} />}
        {state.inRankMode && (
          <Button
            title="QUEUE"
            style={styles.queueButton}
            onPress={onAccept}
            disabled={rank === 0}
            type="secondary"
          />
        )}
        <IconButton type={REJECT} onPress={onReject} />
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
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  queueButton: {
    backgroundColor: GlobalStyles.colors.secondary500,
  },
});
