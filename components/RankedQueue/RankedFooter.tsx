import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import AnimatedButton from "../ui/AnimatedButton";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { RankedStackProps } from "../../util/react-navigation";
import { RankedProps } from "../../testData/DUMMY_DATA";

interface Props {
  messageId: string;
}

/**
 * Component to hold the action buttons for a Ranked booking.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankedFooter = ({ messageId }: Props) => {
  const navigation = useNavigation<RankedStackProps["navigation"]>();

  const pressHandler = () => {};

  const emailPressHandler = (id: string) => {
    navigation.navigate("Email", { action: "ranked", id: id });
  };

  return (
    <View style={styles.container}>
      <AnimatedButton
        title="Accept"
        onPress={pressHandler}
        style={[styles.button, styles.acceptButton]}
      >
        <FontAwesome5 name="check" size={24} color={GlobalStyles.colors.text} />
      </AnimatedButton>
      <AnimatedButton
        title="Open Email"
        onPress={emailPressHandler.bind(this, messageId)}
        style={[styles.button]}
      >
        <FontAwesome5
          name="envelope-open-text"
          size={24}
          color={GlobalStyles.colors.text}
        />
      </AnimatedButton>
      <AnimatedButton
        title="Reject"
        onPress={pressHandler}
        style={[styles.button, styles.rejectButton]}
      >
        <FontAwesome5 name="times" size={24} color={GlobalStyles.colors.text} />
      </AnimatedButton>
    </View>
  );
};

export default RankedFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: GlobalStyles.colors.background100,
  },
  button: {
    paddingHorizontal: "12%",
  },
  acceptButton: {
    backgroundColor: GlobalStyles.colors.success500,
  },
  rejectButton: {
    backgroundColor: GlobalStyles.colors.warning500,
  },
});
