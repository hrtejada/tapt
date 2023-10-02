import "react-native-gesture-handler"; // LEAVE AT THE TOP OF IMPORTS

import { FontAwesome5 } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, Route } from "@react-navigation/native";
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
import {
  HomeStackParamList,
  SettingsStackParamList,
} from "./util/screen-navigation";
import DeleteAccountScreen from "./screens/Settings/DeleteAccountScreen";

/**
 * Main app component.
 *
 * TODO: Figure out how to style the bottom bar on iOS
 * @version 0.1.5
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */

const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const getHeaderTitle = (route: Partial<Route<string>>) => {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Settings";

  switch (routeName) {
    case "Settings":
      return routeName;
    case "Delete":
      return "Delete Account";
  }
};

/**
 * Stack to hold the Login Screens.
 *
 * Will be used to ensure screen protection when logging in is implemented
 */
const LoginStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Login" component={LoginScreen} />
    </HomeStack.Navigator>
  );
};

/**
 * Stack to hold the Main Screens.
 *
 * Will be used to ensure screen protection when logging in is implemented
 */
const MainView = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <HomeStack.Screen name="Email" component={EmailScreen} />
        <HomeStack.Screen
          name="Ranked"
          component={RankedQueueScreen}
          options={{
            title: "Ranked Queue",
          }}
        />
        <HomeStack.Screen name="Image" component={ImageScreen} />
        <HomeStack.Screen name="Reply" component={ReplyScreen} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

const SettingsView = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen
        name="Delete"
        component={DeleteAccountScreen}
        options={{
          title: "Delete Account",
        }}
      />
    </SettingsStack.Navigator>
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
              name="MainView"
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
              component={SettingsView}
              options={({ route }) => ({
                drawerIcon: () => (
                  <FontAwesome5
                    name="cogs"
                    size={20}
                    color={GlobalStyles.colors.text}
                  />
                ),
                headerRight: () => <LogoutButton />,
                headerTitle: getHeaderTitle(route),
              })}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
