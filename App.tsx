import "react-native-gesture-handler"; // LEAVE AT THE TOP OF IMPORTS
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EmailScreen from "./screens/EmailScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainView = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              title: "Home",
            }}
          >
            <Drawer.Screen name="Main" component={MainView} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
