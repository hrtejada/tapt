import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

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

// Used to fix the type error when using the useNavigation hook
export type ImageNavigationProps = NativeStackNavigationProp<
  HomeStackParamList,
  "Image"
>;
export type DeleteAccountNavigationProps = NativeStackNavigationProp<
  SettingsStackParamList,
  "Delete"
>;
export type EmailLimitNavigationProps = NativeStackNavigationProp<
  SettingsStackParamList,
  "EmailLimit"
>;
