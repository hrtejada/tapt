import "react-native-gesture-handler"; // LEAVE AT THE TOP OF IMPORTS

import { FontAwesome5 } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutButton from "./components/ui/LogoutButton";
import { GlobalStyles } from "./constants/styles";
import EmailScreen from "./screens/EmailScreen";
import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";
import LoginScreen from "./screens/LoginScreen";
import RankedQueueScreen from "./screens/RankedQueueScreen";
import ReplyScreen from "./screens/ReplyScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { StackParamList } from "./util/screen-navigation";

/**
 * Main app component.
 *
 * TODO: Figure out how to style the bottom bar on iOS
 * TODO: Go through and take out SafeAreaView and use the useSafeAreaInsets hook instead
 * @version 0.1.5
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<StackParamList>();

/**
 * Stack to hold the Login Screens.
 *
 * Will be used to ensure screen protection when logging in is implemented
 */
const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

/**
 * Stack to hold the Main Screens.
 *
 * Will be used to ensure screen protection when logging in is implemented
 */
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
        <Stack.Screen name="Reply" component={ReplyScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              drawerActiveTintColor: GlobalStyles.colors.text,
              drawerActiveBackgroundColor: GlobalStyles.colors.secondary700,
              drawerInactiveTintColor: GlobalStyles.colors.text,
              drawerInactiveBackgroundColor: GlobalStyles.colors.background200,
              drawerType: "front",
              drawerLabelStyle: {
                fontSize: 22,
              },
              drawerStyle: {
                backgroundColor: GlobalStyles.colors.primary700,
              },

              headerStyle: {
                backgroundColor: GlobalStyles.colors.background300,
              },
              headerTintColor: GlobalStyles.colors.text,
            }}
          >
            <Drawer.Screen
              name="Main"
              component={MainView}
              options={{
                headerTitle: "",
                title: "Home",
                headerTransparent: true,
                drawerIcon: () => (
                  <FontAwesome5
                    name="home"
                    size={20}
                    color={GlobalStyles.colors.text}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                drawerIcon: () => (
                  <FontAwesome5
                    name="cogs"
                    size={20}
                    color={GlobalStyles.colors.text}
                  />
                ),
                headerRight: () => <LogoutButton />,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
