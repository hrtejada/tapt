import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { RankedStackProps } from "../../util/react-navigation";
import AnimatedButton from "../ui/AnimatedButton";
import { EMAIL_ACTIONS } from "../../constants/words";

interface Props {
  messageId: string;
}

/**
 * RankedFooter Component.
 *
 * This component renders the footer which holds the quick action buttons for
 * a Ranked Queue booking.
 *
 * The buttons are: Accept, View Email, Reject
 *
 * TODO: See about passing the replyType from the Quick Action buttons so the Reply Screen is colored accordingly
 *
 * @component
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const RankedFooter = ({ messageId }: Props) => {
  const navigation = useNavigation<RankedStackProps["navigation"]>();

  /**
   * Navigate to the Reply - Accept template
   */
  const handleAccept = () => {
    navigation.navigate("Reply", {
      mode: EMAIL_ACTIONS.QUEUE_ACCEPT,
      messageId: messageId,
    });
  };

  /**
   * Navigate to the Reply - Reject template
   */
  const handleReject = () => {
    navigation.navigate("Reply", {
      mode: EMAIL_ACTIONS.QUEUE_REJECT,
      messageId: messageId,
    });
  };

  const handleEmailPress = (id: string) => {
    navigation.navigate("Email", { action: "ranked", id: id });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <AnimatedButton
          title="Accept"
          onPress={handleAccept}
          style={[styles.button, styles.acceptButton]}
        >
          <FontAwesome5
            name="check"
            size={24}
            color={GlobalStyles.colors.text}
          />
        </AnimatedButton>
      </View>
      <View style={{ flex: 1 }}>
        <AnimatedButton
          title="Open Email"
          onPress={handleEmailPress.bind(this, messageId)}
          style={[styles.button]}
        >
          <FontAwesome5
            name="envelope-open-text"
            size={24}
            color={GlobalStyles.colors.text}
          />
        </AnimatedButton>
      </View>
      <View style={{ flex: 1 }}>
        <AnimatedButton
          title="Reject"
          onPress={handleReject}
          style={[styles.button, styles.rejectButton]}
        >
          <FontAwesome5
            name="times"
            size={24}
            color={GlobalStyles.colors.text}
          />
        </AnimatedButton>
      </View>
    </View>
  );
};

export default RankedFooter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    paddingVertical: 8,
    shadowOpacity: 0,
    borderRadius: 0,
  },
  acceptButton: {
    backgroundColor: GlobalStyles.colors.success500,
  },
  rejectButton: {
    backgroundColor: GlobalStyles.colors.warning500,
  },
});
