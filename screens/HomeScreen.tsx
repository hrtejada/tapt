import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GlobalStyles } from "../constants/styles";

/**
 * Home Component
 *
 * TODO: Flesh out component - Will hold the main cards/buttons to deal with the email queue
 */

// TODO: Understand what type 'navigation' is
const HomeScreen = ({ navigation }: { navigation: any }) => {
  const insets = useSafeAreaInsets();

  const pressHandler = () => {
    navigation.navigate("Email");
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={pressHandler}
      >
        <View style={styles.card}>
          <Text style={styles.cardText}>Number of Emails</Text>
          <Text style={styles.cardText}>Go To Emails</Text>
        </View>
      </Pressable>
      <View style={styles.secondRow}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Email Stats</Text>
          <Text style={styles.cardText}>Accepted: 50%</Text>
          <Text style={styles.cardText}>Rejected: 50%</Text>
          <Text style={styles.cardText}>
            Currently Booking: 9/1/2023 - 9/30/2023
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Ranked Queue</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.background500,
    margin: 8,
  },
  cardText: {
    color: GlobalStyles.colors.background500,
    textAlign: "center",
  },
  card: {
    borderRadius: 8,
    elevation: 8,
    backgroundColor: GlobalStyles.colors.secondary500,
    shadowColor: GlobalStyles.colors.accent500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    padding: 24,
    margin: 8,
  },
  text: {
    color: GlobalStyles.colors.primary500,
    fontSize: 24,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
  secondRow: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
