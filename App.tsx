import "react-native-gesture-handler"; // LEAVE AT THE TOP OF IMPORTS
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GlobalStyles } from "./constants/styles";
import EmailScreen from "./screens/EmailScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SettingsScreen from "./screens/SettingsScreen";
import RankedQueueScreen from "./screens/RankedQueueScreen";
import ImageScreen from "./screens/ImageScreen";
import ComposeReply from "./screens/ComposeReply";

/**
 * TODO: Need to make a separate file to manage the Navigation Typescript stuff :-)
 */
type StackParamList = {
  Home: undefined;
  Email: { email: string } | undefined;
  Ranked: undefined;
  Image: { image: string };
  Login: undefined;
  Reply: undefined;
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<StackParamList>();

export type StackNavProps = NativeStackScreenProps<StackParamList, "Home">;
export type ImageScreenProps = NativeStackScreenProps<StackParamList, "Image">;

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
      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen name="Email" component={EmailScreen} />
        <Stack.Screen
          name="Ranked"
          component={RankedQueueScreen}
          options={{
            title: "Ranked Queue",
          }}
        />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Reply" component={ComposeReply} />
      </Stack.Group>
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
              drawerActiveTintColor: GlobalStyles.colors.primary500,
              drawerActiveBackgroundColor: GlobalStyles.colors.accent500,
              drawerInactiveTintColor: GlobalStyles.colors.primary500,
              drawerInactiveBackgroundColor: GlobalStyles.colors.background500,
              drawerStyle: {
                backgroundColor: GlobalStyles.colors.background300,
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
