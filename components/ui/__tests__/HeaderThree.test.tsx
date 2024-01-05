import { RenderAPI, render } from "@testing-library/react-native";
import "react-native";
import { GlobalStyles } from "../../../constants/styles";
import HeaderThree from "../HeaderThree";

describe("HeaderThree", () => {
  let renderedComponent: RenderAPI;

  beforeEach(() => {
    renderedComponent = render(<HeaderThree>Test Header</HeaderThree>);
  });

  it("renders correctly with children", () => {
    const { getByText } = renderedComponent;

    expect(getByText("Test Header")).toBeTruthy();
  });

  it("applies default styles", () => {
    const { getByText } = renderedComponent;
    const header = getByText("Test Header");

    expect(header.props.style).toMatchObject({
      color: GlobalStyles.colors.text,
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 4,
      textAlign: "center",
    });
  });

  it("has accessibilityRole set to header", () => {
    const { getByText } = renderedComponent;
    const header = getByText("Test Header");

    expect(header.props.accessibilityRole).toBe("header");
  });

  it("uses the text as the accessibilityHint if no hint is provided", () => {
    const testText = "Test Header";
    const { getByText } = render(<HeaderThree>{testText}</HeaderThree>);
    const header = getByText(testText);

    expect(header.props.accessibilityHint).toBe(testText);
  });

  it("accepts and applies custom accessibilityHint", () => {
    const a11yHint = "Custom Hint";
    const { getByAccessibilityHint } = render(
      <HeaderThree accessibilityHint={a11yHint}>Test Header</HeaderThree>
    );

    expect(getByAccessibilityHint(a11yHint)).toBeTruthy();
  });
});
