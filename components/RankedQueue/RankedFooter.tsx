import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { RankedStackProps } from "../../util/react-navigation";
import AnimatedButton from "../ui/AnimatedButton";

interface Props {
  messageId: string;
}

/**
 * Component to hold the action buttons for a Ranked booking.
 *
 * @version 0.1.1
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
    marginHorizontal: 12,
    marginBottom: 12,
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
