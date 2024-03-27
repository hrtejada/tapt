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
import EmailDataScreen from "./screens/Settings/EmailDataScreen";
import EmailLimitScreen from "./screens/Settings/EmailLimitScreen";
import NotificationCadenceScreen from "./screens/Settings/NotificationCadenceScreen";
import RankingScreen from "./screens/Settings/RankingScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ButtonsScreen from "./screens/StyleGuide/ButtonsScreen";
import TypographyScreen from "./screens/StyleGuide/TypographyScreen";
import StyleGuideScreen from "./screens/StyleGuideScreen";
import RankedContextProvider from "./store/ranked-context";
import UserContextProvider from "./store/user-context";
import {
  HomeStackParamList,
  QueueStackParamList,
  SettingsStackParamList,
  StyleStackParamList,
  getHeaderTitle,
} from "./util/react-navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/*
  TODO: OVERALL LIST
  
  TODO: Redo the header bar for Drawer Navigation; I don't like the hacky way I put the back button in for each settings option screen
  TODO: Rework imports to separate between libraries and components/functions
  TODO: Make a current email context??
  TODO: Go through styling and make sure all the flexs and appropriate.
  TODO: Go through Context/State and see if it is all needed i.e. Things can be derived
  TODO: Possible closures for the Setting navigation button i.e. DateRangeButton, EmailLimitButton
  TODO: Determine code style for: inline functions, one prop styling, single prop interface
  TODO: Adding "Loading Spinners" where appropriate
  TODO: Visual indicator of saving the Settings
  TODO: Rename RQ_* stuff 🤢
  TODO: Should 'Zero' rank be allowed?
  
  TODO: Before deploy, go through and check all styling
 */

const Drawer = createDrawerNavigator(); // TODO: Do we need type checking for this?
const Tab = createBottomTabNavigator(); // TODO: Do we need type checking for this?
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const QueueStack = createNativeStackNavigator<QueueStackParamList>();
const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();
const StyleStack = createNativeStackNavigator<StyleStackParamList>();

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
      initialRouteName="Home"
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
        {/* <HomeStack.Screen name="Queue" component={QueueScreen} /> */}
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

/**
 * QueueView Component.
 *
 * Thie component renders the QueueStack used in the
 * main Tab navigation.
 *
 * Only accessed if the user is successfully V&V'd
 *
 * @component
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const QueueView = () => {
  return (
    <QueueStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Queue"
    >
      <QueueStack.Screen name="Queue" component={RankedQueueScreen} />
    </QueueStack.Navigator>
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
      <SettingsStack.Screen name="EmailData" component={EmailDataScreen} />
      <SettingsStack.Screen name="Ranking" component={RankingScreen} />
    </SettingsStack.Navigator>
  );
};

/**
 * StyleView Component.
 *
 * This component renders the SettingsStack that is used in the
 * main Drawer navigation.
 *
 * @component
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const StyleView = () => {
  return (
    <StyleStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StyleStack.Screen name="Guide" component={StyleGuideScreen} />
      <StyleStack.Screen name="Typography" component={TypographyScreen} />
      <StyleStack.Screen name="Buttons" component={ButtonsScreen} />
    </StyleStack.Navigator>
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
            <Tab.Navigator
              screenOptions={{
                tabBarShowLabel: false,
              }}
            >
              <Tab.Screen
                name="MainView"
                component={MainView}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="home" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="QueueView"
                component={QueueView}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="list" size={size} color={color} />
                  ),
                  title: "Queue",
                }}
              />
              <Tab.Screen
                name="SettingsStack"
                component={SettingsView}
                options={({ route }) => ({
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="cog" size={size} color={color} />
                  ),
                  headerTitle: getHeaderTitle(route),
                })}
              />
              <Tab.Screen
                name="StyleStack"
                component={StyleView}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5
                      name="file-contract"
                      size={size}
                      color={color}
                    />
                  ),
                  title: "Guide",
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </RankedContextProvider>
      </UserContextProvider>
    </SafeAreaProvider>
  );
}
