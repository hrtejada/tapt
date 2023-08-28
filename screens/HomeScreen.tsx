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
      <Text style={styles.text}>HomeScreen</Text>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={pressHandler}
      >
        <View style={styles.card}>
          <Text style={styles.cardText}>Emails</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.background,
  },
  cardText: {
    color: GlobalStyles.colors.background,
  },
  card: {
    borderRadius: 8,
    elevation: 8,
    backgroundColor: GlobalStyles.colors.secondary500,
    shadowColor: GlobalStyles.colors.accent,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    padding: 24,
  },
  text: {
    color: GlobalStyles.colors.text,
    fontSize: 24,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
