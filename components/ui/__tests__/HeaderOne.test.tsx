import { RenderAPI, render } from "@testing-library/react-native";
import "react-native";
import { GlobalStyles } from "../../../constants/styles";
import HeaderOne from "../HeaderOne";

describe("HeaderOne", () => {
  let renderedComponent: RenderAPI;

  beforeEach(() => {
    renderedComponent = render(<HeaderOne>Test Header</HeaderOne>);
  });

  it("renders corrextly with children", () => {
    const { getByText } = renderedComponent;

    expect(getByText("Test Header")).toBeTruthy();
  });

  it("applies default styles", () => {
    const { getByText } = renderedComponent;
    const header = getByText("Test Header");

    expect(header.props.style).toMatchObject({
      color: GlobalStyles.colors.text,
      textAlign: "center",
      fontSize: 32,
      fontWeight: "bold",
      textDecorationLine: "underline",
      marginVertical: 8,
      textTransform: "uppercase",
    });
  });

  it("has accessibilityRole set to header", () => {
    const { getByText } = renderedComponent;
    const header = getByText("Test Header");

    expect(header.props.accessibilityRole).toBe("header");
  });

  it("uses the text as the accessibilityLabel if no label is provided", () => {
    const testText = "Test Header";
    const { getByText } = render(<HeaderOne>{testText}</HeaderOne>);
    const header = getByText(testText);

    expect(header.props.accessibilityHint).toBe(testText);
  });

  it("accepts and applies custom accessibilityLabel", () => {
    const a11yLabel = "Custom Label";
    const { getByAccessibilityHint } = render(
      <HeaderOne accessibilityHint={a11yLabel}>Test Header</HeaderOne>
    );

    expect(getByAccessibilityHint(a11yLabel)).toBeTruthy();
  });
});
