import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

type IconProps = "star" | "star-o";

interface Props {
  rank: number;
  onPress: (value: number) => void;
}

/**
 * Component that will display the rank buttons
 *
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankButtons = ({ rank, onPress }: Props) => {
  const [oneStar, setOneStar] = useState<IconProps>("star-o");
  const [twoStar, setTwoStar] = useState<IconProps>("star-o");
  const [threeStar, setThreeStar] = useState<IconProps>("star-o");

  // TODO: Clean this up; Create custom hook?
  const rankHandler = (value: number) => {
    if (value === 1) {
      setOneStar((prev) => {
        if (prev === "star-o") {
          onPress(value);
          return "star";
        } else {
          if (threeStar === "star" || twoStar === "star") {
            setTwoStar("star-o");
            setThreeStar("star-o");
            onPress(0);
            return prev;
          }
          return "star-o";
        }
      });
    }
    if (value === 2) {
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
    if (value === 3) {
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
    <View style={styles.container}>
      <Pressable
        style={styles.oneStarButton}
        onPress={rankHandler.bind(this, 1)}
      >
        <FontAwesome
          name={oneStar}
          size={48}
          color={GlobalStyles.colors.text}
        />
      </Pressable>
      <Pressable
        style={styles.twoStarButton}
        onPress={rankHandler.bind(this, 2)}
      >
        <FontAwesome
          name={twoStar}
          size={48}
          color={GlobalStyles.colors.text}
        />
      </Pressable>
      <Pressable
        style={styles.threeStarButton}
        onPress={rankHandler.bind(this, 3)}
      >
        <FontAwesome
          name={threeStar}
          size={48}
          color={GlobalStyles.colors.text}
        />
      </Pressable>
    </View>
  );
};

export default RankButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary300,
    padding: 8,
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
