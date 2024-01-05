import { render } from "@testing-library/react-native";
import { ACTIVE, INACTIVE, STATUS } from "../../../constants/words";
import { useUserContext } from "../../../store/user-context";
import BookingInfo from "../BookingInfo";

const mockUserContext = useUserContext as jest.Mock;
jest.mock("../../../store/user-context");

describe("BookingInfo", () => {
  const mockState = {
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-01-31"),
    accepted: 10,
    rejected: 5,
    limit: "20",
  };

  beforeEach(() => {
    mockUserContext.mockReturnValue({ state: mockState });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the correct child components", () => {
    const { getAllByText } = render(<BookingInfo />);

    expect(getAllByText("Booking Info").length).toBe(1);
    expect(getAllByText(STATUS.ACCEPTED + ":").length).toBe(1);
    expect(getAllByText(STATUS.REJECTED + ":").length).toBe(1);
    expect(getAllByText(mockState.accepted.toString()).length).toBe(1);
    expect(getAllByText(mockState.rejected.toString()).length).toBe(1);
    expect(getAllByText(`Current Limit: ${mockState.limit}`).length).toBe(1);
  });

  it("renders BookingInfo and child components w/ props", () => {
    const { getByText } = render(<BookingInfo />);

    expect(getByText("Booking Info")).toBeTruthy();

    const isBooking =
      new Date() >= mockState.startDate && new Date() < mockState.endDate;

    expect(getByText(isBooking ? ACTIVE : INACTIVE)).toBeTruthy();

    expect(getByText(STATUS.ACCEPTED + ":")).toBeTruthy();
    expect(getByText(STATUS.REJECTED + ":")).toBeTruthy();
    expect(getByText(mockState.accepted.toString())).toBeTruthy();
    expect(getByText(mockState.rejected.toString())).toBeTruthy();
    expect(getByText(`Current Limit: ${mockState.limit}`)).toBeTruthy();
  });
});
