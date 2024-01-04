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
import QueueScreen from "./screens/QueueScreen";
import RankedQueueScreen from "./screens/RankedQueueScreen";
import ReplyScreen from "./screens/ReplyScreen";
import AboutScreen from "./screens/Settings/AboutScreen";
import DateRangeScreen from "./screens/Settings/DateRangeScreen";
import DeleteAccountScreen from "./screens/Settings/DeleteAccountScreen";
import EmailLimitScreen from "./screens/Settings/EmailLimitScreen";
import NotificationCadenceScreen from "./screens/Settings/NotificationCadenceScreen";
import ParametersScreen from "./screens/Settings/ParametersScreen";
import RankingScreen from "./screens/Settings/RankingScreen";
import SettingsScreen from "./screens/SettingsScreen";
import RankedContextProvider from "./store/ranked-context";
import UserContextProvider from "./store/user-context";
import {
  HomeStackParamList,
  SettingsStackParamList,
  getHeaderTitle,
} from "./util/react-navigation";

/*
  TODO: OVERALL LIST
  
  TODO: Make a current email context??
  TODO: Go through styling and make sure all the flexs and appropriate.
  TODO: Go through Context/State and see if it is all needed i.e. Things can be derived
  TODO: Possible closures for the Setting navigation button i.e. DateRangeButton, EmailLimitButton
 */

const Drawer = createDrawerNavigator(); // TODO: Do we need type checking for this?
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

/**
 * LoginStack Component.
 *
 * This component renders the LogingStack.
 *
 * Users who are not logged in will be navigated here.
 *
 * @component
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const LoginStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Login" component={LoginScreen} />
    </HomeStack.Navigator>
  );
};

/**
 * MainView Component.
 *
 * Thie component renders the MainStack used in the
 * main Drawer navigation.
 *
 * Only accessed if the user is successfully V&V'd
 *
 * @component
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
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
        <HomeStack.Screen name="Queue" component={QueueScreen} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

/**
 * SettingsView Component.
 *
 * This component renders the SettingsStack that is used in the
 * main Drawer navigation.
 *
 * @component
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
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
      <SettingsStack.Screen name="Ranking" component={RankingScreen} />
    </SettingsStack.Navigator>
  );
};

/**
 * App Component.
 *
 * This component render the main screen depending on the sessoin.
 * Holds the Drawer and Stack navigators. (https://reactnavigation.org/)
 *
 * TODO: Should SettingsStack use 'modal' as well to keep a theme going??
 * TODO: Make sure when navigating from Home to Settings, that it shows the SettingsScreen
 *
 * @version 0.2.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <UserContextProvider>
        <RankedContextProvider>
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{
                drawerActiveTintColor: GlobalStyles.colors.text,
                drawerActiveBackgroundColor: GlobalStyles.colors.secondary700,
                drawerInactiveTintColor: GlobalStyles.colors.text,
                drawerInactiveBackgroundColor:
                  GlobalStyles.colors.background200,
                drawerType: "front",
                drawerLabelStyle: {
                  fontSize: 22,
                },
                drawerStyle: {
                  backgroundColor: GlobalStyles.colors.primary700,
                },

                headerStyle: {
                  backgroundColor: GlobalStyles.colors.background300,
                  borderBottomColor: GlobalStyles.colors.accent500,
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
        </RankedContextProvider>
      </UserContextProvider>
    </SafeAreaProvider>
  );
}
