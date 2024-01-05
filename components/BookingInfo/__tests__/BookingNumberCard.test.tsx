import { RenderAPI, render } from "@testing-library/react-native";
import BookingNumberCard from "../BookingNumberCard";
import { STATUS } from "../../../constants/words";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

describe("BookingNumberCard", () => {
  const total = 100;
  const value = 50;
  let renderedComponent: RenderAPI;

  describe("ACCEPTED", () => {
    beforeEach(() => {
      renderedComponent = render(
        <BookingNumberCard
          title={STATUS.ACCEPTED}
          value={value}
          total={total}
        />
      );
    });

    it("displays the correct number and percentage for accepted bookings", () => {
      const { getByText } = renderedComponent;

      expect(getByText(STATUS.ACCEPTED + ":")).toBeTruthy();
      expect(getByText(value.toString())).toBeTruthy();
      expect(getByText("50%")).toBeTruthy();
    });

    it("accept styles are applied appropriately", () => {
      const { getByText } = renderedComponent;

      const percentageText = getByText("50%");
      let percentageStyle = StyleSheet.flatten(percentageText.props.style);
      expect(percentageStyle).toMatchObject({
        justifyContent: "flex-end",
        color: GlobalStyles.colors.accent700,
      });
    });

    it("accessibility is present", () => {
      const { getByText, getByA11yHint } = renderedComponent;

      const percentageText = getByText("50%");
      expect(percentageText.parent.parent.props.accessibilityRole).toBe("text");
      expect(
        getByA11yHint(
          `This card shows the number of ${STATUS.ACCEPTED.toLowerCase()} bookings. ${value} accepted`
        )
      ).toBeTruthy();
    });
  });

  describe("REJECCTED", () => {
    beforeEach(() => {
      renderedComponent = render(
        <BookingNumberCard
          title={STATUS.REJECTED}
          value={value}
          total={total}
        />
      );
    });

    it("displays the correct number and percentage for rejected bookings", () => {
      const { getByText } = renderedComponent;

      expect(getByText(STATUS.REJECTED + ":")).toBeTruthy();
      expect(getByText(value.toString())).toBeTruthy();
      expect(getByText("50%")).toBeTruthy();
    });

    it("accept and reject styles are applied appropriately", () => {
      const { getByText } = renderedComponent;

      const percentageText = getByText("50%");
      let percentageStyle = StyleSheet.flatten(percentageText.props.style);
      expect(percentageStyle).toMatchObject({
        justifyContent: "flex-start",
        color: GlobalStyles.colors.accent700,
      });
    });

    it("accessibility is present", () => {
      const { getByText, getByA11yHint } = renderedComponent;

      const percentageText = getByText("50%");
      expect(percentageText.parent.parent.props.accessibilityRole).toBe("text");
      expect(
        getByA11yHint(
          `This card shows the number of ${STATUS.REJECTED.toLowerCase()} bookings. ${value} rejected`
        )
      ).toBeTruthy();
    });
  });
});
