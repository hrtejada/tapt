import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ACCEPT, REJECT } from "../../constants/words";
import IconButton from "../ui/IconButton";
import Button from "../ui/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

interface Props {
  onAccept: () => void;
  onReject: () => void;
}

type IconProps = "star" | "star-o";

/**
 * Component that will display the accept and reject buttons
 * for the Email Screen.
 *
 * TODO: Figure out 'name' error on icons; Using 'IconProps'. Not sure if temp solution or full.
 *
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const EmailButtons = ({ onAccept, onReject }: Props) => {
  const [oneStar, setOneStar] = useState<IconProps>("star-o");
  const [twoStar, setTwoStar] = useState<IconProps>("star-o");
  const [threeStar, setThreeStar] = useState<IconProps>("star-o");

  // TODO: Clean this up; Create custom hook?
  const rankHandler = (rank: number) => {
    if (rank === 1) {
      setOneStar((prev) => {
        if (prev === "star-o") {
          return "star";
        } else {
          if (threeStar === "star" || twoStar === "star") {
            setTwoStar("star-o");
            setThreeStar("star-o");
            return prev;
          }
          return "star-o";
        }
      });
    }
    if (rank === 2) {
      setTwoStar((prev) => {
        if (prev === "star-o") {
          setOneStar("star");
          return "star";
        } else {
          if (threeStar === "star") {
            setThreeStar("star-o");
            return prev;
          }
          setOneStar("star-o");
          return "star-o";
        }
      });
    }
    if (rank === 3) {
      setThreeStar((prev) => {
        if (prev === "star-o") {
          setOneStar("star");
          setTwoStar("star");
          return "star";
        } else {
          setOneStar("star-o");
          setTwoStar("star-o");
          return "star-o";
        }
      });
    }
    /**
     * TODO -------------------------------------------------------------------
     * - Pass the ranked email to the user's queue
     * - Assign rank to the email
     * - Logic to skip ranked emails in the "regular" EmailScreen
     * - Logic to only show ranked emails when coming from RankedQueueScreen
     * TODO -------------------------------------------------------------------
     */
  };

  return (
    <>
      <View style={styles.buttonsContainer}>
        <IconButton type={ACCEPT} onPress={onAccept} />
        <View style={styles.rankContainer}>
          <Button
            buttonStyle={styles.oneStarButton}
            onPress={rankHandler.bind(this, 1)}
          >
            <FontAwesome
              name={oneStar}
              size={48}
              color={GlobalStyles.colors.text}
            />
          </Button>
          <Button
            buttonStyle={styles.twoStarButton}
            onPress={rankHandler.bind(this, 2)}
          >
            <FontAwesome
              name={twoStar}
              size={48}
              color={GlobalStyles.colors.text}
            />
          </Button>
          <Button
            buttonStyle={styles.threeStarButton}
            onPress={rankHandler.bind(this, 3)}
          >
            <FontAwesome
              name={threeStar}
              size={48}
              color={GlobalStyles.colors.text}
            />
          </Button>
        </View>
        <IconButton type={REJECT} onPress={onReject} />
      </View>
    </>
  );
};

export default EmailButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary300,
    borderWidth: 2,
    borderTopColor: GlobalStyles.colors.accent700,
  },
  rankContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: GlobalStyles.colors.accent300,
  },
  oneStarButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "transparent",
    shadowColor: "transparent",
  },
  twoStarButton: {
    borderRadius: 0,
    backgroundColor: "transparent",
    shadowColor: "transparent",
  },
  threeStarButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "transparent",
    shadowColor: "transparent",
  },
});
