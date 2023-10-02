import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

/**
 * Holds the TypeScript definitions needed for React Navigation.
 *
 * @version 0.1.0
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
};

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
export type SettingsStackProps = NativeStackScreenProps<
  SettingsStackParamList,
  "Settings"
>;

// Used to fix the type error when using the useNavigation hook
export type ImageNavigationProps = NativeStackNavigationProp<
  HomeStackParamList,
  "Image"
>;
