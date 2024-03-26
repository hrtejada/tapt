import { createContext, useContext, useReducer } from "react";
import { NOTIFICATION_OPTIONS, USER_ACTION_TYPES } from "../constants/words";

// Structure for data when initializing a new user.
type INIT_USER_TYPE = {
  id: string;
  unreadCount: number;
  accepted: number;
  rejected: number;
  limit: string;
  startDate: Date;
  endDate: Date;
  header: string;
  parameters: string[];
  notifications: string;
  isRanking: boolean;
  inRankMode: boolean;
};

// Data for initializing a new user.
const INIT_USER_STATE = {
  id: "u1", // TODO: Just adding init values to help with testing. REMOVE AFTERWARDS
  unreadCount: 0,
  accepted: 10,
  rejected: 50,
  limit: "",
  startDate: new Date(2024, 2, 20), // TODO: Remove after testing
  endDate: new Date(2024, 3, 20), // TODO: Remove after testing
  header: "",
  parameters: ["description", "budget", "size", "placement", "images"], // TODO: Just adding init values to help with testing. REMOVE AFTERWARDS
  notifications: NOTIFICATION_OPTIONS.OFF.toString(),
  isRanking: false, // TODO: Just adding init values to help with testing. REMOVE AFTERWARDS
  inRankMode: false, // TODO: Just adding init values to help with testing. REMOVE AFTERWARDS
};

// Define the Actions that can occur in this context
type USER_ACTIONS =
  | { type: USER_ACTION_TYPES.USER_ID; payload: string }
  | { type: USER_ACTION_TYPES.UNREAD_COUNT; payload: number }
  | { type: USER_ACTION_TYPES.ACCEPTED; payload: number }
  | { type: USER_ACTION_TYPES.REJECTED; payload: number }
  | { type: USER_ACTION_TYPES.LIMIT; payload: string }
  | { type: USER_ACTION_TYPES.START_DATE; payload: Date }
  | { type: USER_ACTION_TYPES.END_DATE; payload: Date }
  | { type: USER_ACTION_TYPES.HEADER; payload: string }
  | { type: USER_ACTION_TYPES.ADD; payload: string }
  | { type: USER_ACTION_TYPES.DELETE; payload: string }
  | { type: USER_ACTION_TYPES.NOTIFICATION; payload: string }
  | { type: USER_ACTION_TYPES.RANKING_ON }
  | { type: USER_ACTION_TYPES.RANKING_OFF }
  | { type: USER_ACTION_TYPES.RANK_MODE_ON }
  | { type: USER_ACTION_TYPES.RANK_MODE_OFF };

/**
 * Main user state context.
 *
 * TODO: Re-evaluate the data structure
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
export const UserContext = createContext<{
  state: INIT_USER_TYPE;
  dispatch: React.Dispatch<USER_ACTIONS>;
}>({ state: INIT_USER_STATE, dispatch: () => {} });

const reducer = (state: INIT_USER_TYPE, action: USER_ACTIONS) => {
  switch (action.type) {
    case USER_ACTION_TYPES.USER_ID:
      return { ...state, id: action.payload };
    case USER_ACTION_TYPES.UNREAD_COUNT:
      return { ...state, unreadCount: action.payload };
    case USER_ACTION_TYPES.ACCEPTED:
      return { ...state, accepted: action.payload };
    case USER_ACTION_TYPES.REJECTED:
      return { ...state, rejected: action.payload };
    case USER_ACTION_TYPES.LIMIT:
      return { ...state, limit: action.payload };
    case USER_ACTION_TYPES.START_DATE:
      return { ...state, startDate: action.payload };
    case USER_ACTION_TYPES.END_DATE:
      return { ...state, endDate: action.payload };
    case USER_ACTION_TYPES.HEADER:
      return { ...state, header: action.payload };
    case USER_ACTION_TYPES.ADD:
      return {
        ...state,
        parameters: [...state.parameters, action.payload],
      };
    case USER_ACTION_TYPES.DELETE:
      const newParams = state.parameters.filter(
        (param) => param !== action.payload
      );
      return {
        ...state,
        parameters: newParams,
      };
    case USER_ACTION_TYPES.NOTIFICATION:
      return { ...state, notifications: action.payload };
    case USER_ACTION_TYPES.RANKING_ON:
      return { ...state, isRanking: true };
    case USER_ACTION_TYPES.RANKING_OFF:
      return { ...state, isRanking: false, inRankMode: false };
    case USER_ACTION_TYPES.RANK_MODE_ON:
      return { ...state, inRankMode: true };
    case USER_ACTION_TYPES.RANK_MODE_OFF:
      return { ...state, inRankMode: false };
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
};

// Context using a reducer to manage the state.
const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, INIT_USER_STATE);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

/**
 * Custom hook to make sure context is available and wrapping components properly.
 *
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      "useUserContext has to be used within <UserContext.Provider>"
    );
  }

  return context;
};
