import "react-native-gesture-handler"; // LEAVE AT THE TOP OF IMPORTS

import { FontAwesome5 } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LogoutButton from "./components/ui/LogoutButton";
import { GlobalStyles } from "./constants/styles";
import EmailScreen from "./screens/EmailScreen";
import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";
import LoginScreen from "./screens/LoginScreen";
import RankedQueueScreen from "./screens/RankedQueueScreen";
import ReplyScreen from "./screens/ReplyScreen";
import AboutScreen from "./screens/Settings/AboutScreen";
import DateRangeScreen from "./screens/Settings/DateRangeScreen";
import DeleteAccountScreen from "./screens/Settings/DeleteAccountScreen";
import EmailLimitScreen from "./screens/Settings/EmailLimitScreen";
import NotificationCadenceScreen from "./screens/Settings/NotificationCadenceScreen";
import ParametersScreen from "./screens/Settings/ParametersScreen";
import RankModeScreen from "./screens/Settings/RankModeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import {
  HomeStackParamList,
  SettingsStackParamList,
  getHeaderTitle,
} from "./util/react-navigation";

/**
 * Main app component.
 *
 * TODO: Figure out how to style the bottom bar on iOS
 * TODO: Should SettingsStack use 'modal' as well to keep a theme going??
 * TODO: Make sure when navigating from Home to Settings, that it shows the SettingsScreen
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */

const Drawer = createDrawerNavigator(); // TODO: Do we need type checking for this?
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

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
      screenOptions={{
        headerShown: false,
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="About" component={AboutScreen} />
      <SettingsStack.Screen name="DateRange" component={DateRangeScreen} />
      <SettingsStack.Screen name="Delete" component={DeleteAccountScreen} />
      <SettingsStack.Screen name="EmailLimit" component={EmailLimitScreen} />
      <SettingsStack.Screen
        name="NotificationCadence"
        component={NotificationCadenceScreen}
      />
      <SettingsStack.Screen name="Parameters" component={ParametersScreen} />
      <SettingsStack.Screen name="RankMode" component={RankModeScreen} />
    </SettingsStack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
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
              borderBottomColor: GlobalStyles.colors.secondary700,
              borderBottomWidth: 1,
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
            name="SettingsStack"
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
              title: "Settings",
            })}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
