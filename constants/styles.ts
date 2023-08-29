import { DefaultTheme } from "@react-navigation/native";

export const GlobalStyles = {
  /**
   * Need the following main colors and then we can build shades/tints off of them
   *  - PRIMARY
   *  - SECONDARY
   *  - TERTIARY
   *  - DISABLED
   *  - ENABLED
   *  - SUCCESS
   *  - WARNING
   *  - ACCENT
   *  - BACKGROUND
   *  - ACTION?
   */
  colors: {
    primary300: "#806064",
    primary500: "#654c4f",
    primary700: "#513d40",
    secondary300: "#4f6955",
    secondary500: "#3c4f40",
    secondary700: "#2c3a2f",
    accent300: "#dad095",
    accent500: "#cec075",
    accent700: "#c5b459",
    background100: "#ffffff",
    background300: "#f5f7f3",
    background500: "#e0e7da",
    background700: "#ccd6c2",
    reject: "#f4442e",
    accept: "#44ffd2",
  },
};
