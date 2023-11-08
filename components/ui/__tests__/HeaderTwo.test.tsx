import { RenderAPI, render } from "@testing-library/react-native";
import "react-native";
import { GlobalStyles } from "../../../constants/styles";
import HeaderTwo from "../HeaderTwo";

describe("HeaderTwo", () => {
  let renderedComponent: RenderAPI;

  beforeEach(() => {
    renderedComponent = render(<HeaderTwo>Test Header</HeaderTwo>);
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
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
      textAlign: "center",
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
    const { getByText } = render(<HeaderTwo>{testText}</HeaderTwo>);
    const header = getByText(testText);

    expect(header.props.accessibilityHint).toBe(testText);
  });

  it("accepts and applies custom accessibilityLabel", () => {
    const a11yLabel = "Custom Label";
    const { getByAccessibilityHint } = render(
      <HeaderTwo accessibilityHint={a11yLabel}>Test Header</HeaderTwo>
    );

    expect(getByAccessibilityHint(a11yLabel)).toBeTruthy();
  });
});
