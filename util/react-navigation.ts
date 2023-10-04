import { Route, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  ABOUT_TITLE,
  DATE_RANGE_TITLE,
  DELETE_TITLE,
  EMAIL_LIMIT_TITLE,
  NOTIFICATION_TITLE,
  RANK_MODE_TITLE,
} from "../constants/words";

/**
 * Holds the TypeScript definitions needed for React Navigation.
 *
 * TODO: Refine the difference between NativeStackScreenProps & NativeStackNavigationProps
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
export type HomeStackParamList = {
  Home: undefined;
  Email: { action: string; id?: string } | undefined;
  Ranked: undefined;
  Image: { image: string };
  Login: undefined;
  Reply: { mode: string } | undefined;
  Settings: undefined;
};

export type SettingsStackParamList = {
  Settings: undefined;
  Delete: undefined;
  EmailLimit: undefined;
  DateRange: undefined;
  Parameters: undefined;
  NotificationCadence: undefined;
  RankMode: undefined;
  About: undefined;
};

/***** HomeStackParamList *****/
export type HomeStackProps = NativeStackScreenProps<HomeStackParamList, "Home">;
export type EmailStackProps = NativeStackScreenProps<
  HomeStackParamList,
  "Email"
>;
export type ReplyStackProps = NativeStackScreenProps<
  HomeStackParamList,
  "Reply"
>;
export type ImageStackProps = NativeStackScreenProps<
  HomeStackParamList,
  "Image"
>;
export type RankedStackProps = NativeStackScreenProps<
  HomeStackParamList,
  "Ranked"
>;

/***** SettingsStackParamList *****/
export type SettingsStackProps = NativeStackScreenProps<
  SettingsStackParamList,
  "Settings"
>;
export type DeleteAccountStackProps = NativeStackScreenProps<
  SettingsStackParamList,
  "Delete"
>;
export type EmailLimitStackProps = NativeStackScreenProps<
  SettingsStackParamList,
  "EmailLimit"
>;
export type DateRangeStackProps = NativeStackScreenProps<
  SettingsStackParamList,
  "DateRange"
>;
export type ParametersStackProps = NativeStackScreenProps<
  SettingsStackParamList,
  "Parameters"
>;
export type NotificationCadenceStackProps = NativeStackScreenProps<
  SettingsStackParamList,
  "NotificationCadence"
>;
export type RankModeStackProps = NativeStackScreenProps<
  SettingsStackParamList,
  "RankMode"
>;
export type AboutStackProps = NativeStackScreenProps<
  SettingsStackParamList,
  "About"
>;

// Used to fix the type error when using the useNavigation hook
export type ImageNavigationProps = NativeStackNavigationProp<
  HomeStackParamList,
  "Image"
>;

/**
 * Helper function to change the header title in the SettingsStack.
 */
export const getHeaderTitle = (route: Partial<Route<string>>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Settings";

  switch (routeName) {
    case ABOUT_TITLE:
    case "Parameters":
    case "Settings":
      return routeName;
    case "DateRange":
      return DATE_RANGE_TITLE;
    case "Delete":
      return DELETE_TITLE;
    case "EmailLimit":
      return EMAIL_LIMIT_TITLE;
    case "NotificationCadence":
      return NOTIFICATION_TITLE;
    case "RankMode":
      return RANK_MODE_TITLE;
  }
};