import "react-native-gesture-handler"; // LEAVE AT THE TOP OF IMPORTS
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EmailScreen from "./screens/EmailScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { GlobalStyles } from "./constants/styles";
import LoginScreen from "./screens/LoginScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

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
              drawerActiveTintColor: GlobalStyles.colors.background700,
              drawerActiveBackgroundColor: GlobalStyles.colors.secondary300,
              drawerInactiveTintColor: GlobalStyles.colors.primary300,
              drawerInactiveBackgroundColor: GlobalStyles.colors.accent300,
              drawerStyle: {
                backgroundColor: GlobalStyles.colors.background500,
              },
              headerStyle: {
                backgroundColor: GlobalStyles.colors.background700,
              },
            }}
          >
            <Drawer.Screen
              name="Main"
              component={MainView}
              options={{
                title: "Home",
              }}
            />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
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
