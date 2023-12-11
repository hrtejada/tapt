import { render } from "@testing-library/react-native";
import { GlobalStyles } from "../../../constants/styles";
import { ACTIVE, INACTIVE } from "../../../constants/words";
import BookingStatus from "../BookingStatus";
import { StyleSheet } from "react-native";

describe("BookingStatus", () => {
  const startDate = "2023-01-01";
  const endDate = "2023-01-31";
  const dateRangeText = `${startDate} - ${endDate}`;

  it("renders the ACTIVE status and date range when status is true", () => {
    const { getByText, getByA11yHint } = render(
      <BookingStatus status={true} startDate={startDate} endDate={endDate} />
    );

    expect(getByText(ACTIVE)).toBeTruthy();
    expect(getByText(dateRangeText)).toBeTruthy();
    expect(
      getByA11yHint(`Booking Status: ${ACTIVE}. ${dateRangeText}`)
    ).toBeTruthy();
  });

  it("renders the INACTIVE status and no date range when status is false", () => {
    const { getByText, getByA11yHint, queryByText } = render(
      <BookingStatus status={false} startDate={startDate} endDate={endDate} />
    );

    expect(getByText(INACTIVE)).toBeTruthy();
    expect(queryByText(dateRangeText)).toBeNull();
    expect(getByA11yHint(`Booking Status: ${INACTIVE}.`)).toBeTruthy();
  });

  it("has the correct styles for ACTIVE status", () => {
    const { getByText } = render(
      <BookingStatus status={true} startDate={startDate} endDate={endDate} />
    );

    const statusText = getByText(ACTIVE);
    const statusStyle = StyleSheet.flatten(
      statusText.parent.parent.props.style
    );

    expect(statusStyle.backgroundColor).toBe(GlobalStyles.colors.success500);
  });

  it("has the correct styles for INACTIVE status", () => {
    const { getByText } = render(
      <BookingStatus status={false} startDate={startDate} endDate={endDate} />
    );

    const statusText = getByText(INACTIVE);
    const statusStyle = StyleSheet.flatten(
      statusText.parent.parent.props.style
    );

    expect(statusStyle.backgroundColor).toBe(GlobalStyles.colors.warning500);
  });
});
