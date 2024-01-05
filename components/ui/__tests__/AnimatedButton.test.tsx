import { fireEvent, render } from "@testing-library/react-native";
import "react-native";
import { Animated, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import AnimatedButton from "../AnimatedButton";
// Mock Animated API
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("AnimatedButton", () => {
  it("renders w/ correct title", () => {
    const { getByText } = render(
      <AnimatedButton title="Press Me" onPress={() => {}} />
    );

    expect(getByText("Press Me")).toBeTruthy();
  });

  it("fires onPress event when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <AnimatedButton title="Press Me" onPress={onPressMock} />
    );

    fireEvent.press(getByText("Press Me"));
    expect(onPressMock).toHaveBeenCalled();
  });

  // TODO: Testing the animation may need a revisit
  // it("triggers scale animation onPressIn and onPressOut", () => {
  //   // Mock Animated.timing to check if it's been called with the right parameters
  //   const timingSpy = jest.spyOn(Animated, "timing");
  //   const { getByText } = render(
  //     <AnimatedButton title="Press Me" onPress={() => {}} />
  //   );
  //   const textElement = getByText("Press Me");

  //   fireEvent(textElement, "pressIn");
  //   expect(timingSpy).toHaveBeenCalledWith(
  //     expect.any(Object),
  //     expect.objectContaining({ toValue: 0.975 })
  //   );

  //   fireEvent(textElement, "pressOut");
  //   expect(timingSpy).toHaveBeenCalledWith(
  //     expect.any(Object),
  //     expect.objectContaining({ toValue: 1 })
  //   );
  // });

  it("has correct background color for primary type", () => {
    const { getByTestId } = render(
      <AnimatedButton title="Press Me" onPress={() => {}} type="primary" />
    );
    const button = getByTestId("animated-button");
    const buttonStyles = StyleSheet.flatten(button.props.style);

    expect(buttonStyles.backgroundColor).toBe(GlobalStyles.colors.primary500);
  });

  it("has correct background color for secondary type", () => {
    const { getByTestId } = render(
      <AnimatedButton title="Press Me" onPress={() => {}} type="secondary" />
    );
    const button = getByTestId("animated-button");
    const buttonStyles = StyleSheet.flatten(button.props.style);

    expect(buttonStyles.backgroundColor).toBe(GlobalStyles.colors.secondary500);
  });

  it("renders children when provided", () => {
    const child = <View testID="child-view" />;
    const { getByTestId } = render(
      <AnimatedButton title="Press Me" onPress={() => {}}>
        {child}
      </AnimatedButton>
    );

    expect(getByTestId("child-view")).toBeTruthy();
  });
});
