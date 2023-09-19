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
export type StackParamList = {
  Home: undefined;
  Email: { email: string } | undefined;
  Ranked: undefined;
  Image: { image: string };
  Login: undefined;
  Reply: { mode: string } | undefined;
};

export type HomeStackProps = NativeStackScreenProps<StackParamList, "Home">;
export type EmailStackProps = NativeStackScreenProps<StackParamList, "Email">;
export type ReplyStackProps = NativeStackScreenProps<StackParamList, "Reply">;
export type ImageStackProps = NativeStackScreenProps<StackParamList, "Image">;

// Used to fix the type error when using the useNavigation hook
export type ImageNavigationProps = NativeStackNavigationProp<
  StackParamList,
  "Image"
>;
