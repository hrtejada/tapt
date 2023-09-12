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
  Reply: undefined;
};

export type StackNavProps = NativeStackScreenProps<StackParamList, "Home">;
export type ImageScreenProps = NativeStackScreenProps<StackParamList, "Image">;

// Used to fix the type error when using the useNavigation hook
export type ImageNavigationProps = NativeStackNavigationProp<
  StackParamList,
  "Image"
>;
