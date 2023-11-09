import { RenderAPI, render } from "@testing-library/react-native";
import { useUserContext } from "../../../store/user-context";
import BookingStats from "../BookingStats";
import { STATUS } from "../../../constants/words";

// Mock the useUserContext hook
jest.mock("../../../store/user-context.tsx");
const mockUserContext = useUserContext as jest.Mock;

describe("BookingStats", () => {
  const accepted = 50;
  const rejected = 30;
  const mockState = {
    limit: "5",
  };
  let renderedComponent: RenderAPI;

  beforeEach(() => {
    mockUserContext.mockReturnValue({ state: mockState });
    renderedComponent = render(
      <BookingStats accepted={accepted} rejected={rejected} />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders BookingNumberCard components w/ props", () => {
    const { getAllByText } = renderedComponent;

    expect(getAllByText(STATUS.ACCEPTED + ":").length).toBe(1);
    expect(getAllByText(STATUS.REJECTED + ":").length).toBe(1);
  });

  it("displays the current limit", () => {
    const { getByText } = renderedComponent;

    expect(getByText(`Current Limit: ${mockState.limit}`)).toBeTruthy();
  });

  it("has accessibility features", () => {
    const { getByText, getByA11yHint } = renderedComponent;

    const limitText = getByText(`Current Limit: ${mockState.limit}`);
    expect(limitText.parent.parent.props.accessibilityRole).toBe("text");

    expect(getByA11yHint(`Current Limit: ${mockState.limit}`)).toBeTruthy();
  });
});
