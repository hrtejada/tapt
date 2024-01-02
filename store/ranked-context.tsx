import { createContext, useContext, useReducer } from "react";
import { RANKED_ACTION_TYPES } from "../constants/words";

export interface RankedEmail {
  messageId: string;
  name: string;
  email: string;
  rank: number;
  parameters: string[];
  note: string;
}

// Structure for data when initializing a new Ranked Email.
type INIT_RANKED_TYPE = {
  userId: string;
  tempRank: number;
  rankedEmails: RankedEmail[];
};

// Data for initializing a new Ranked Email.
const INIT_RANKED_STATE = {
  userId: "u1", // TODO: Just adding init values to help with testing. REMOVE AFTERWARDS
  tempRank: 0,
  rankedEmails: [],
};

// Define the Actions that can occur in this context
type RANK_ACTIONS =
  | { type: RANKED_ACTION_TYPES.USER_ID; payload: string }
  | { type: RANKED_ACTION_TYPES.TEMP_RANK; payload: number }
  | { type: RANKED_ACTION_TYPES.RANKED_EMAILS; payload: RankedEmail[] }
  | { type: RANKED_ACTION_TYPES.ADD_EMAIL; payload: RankedEmail }
  | { type: RANKED_ACTION_TYPES.REMOVE_EMAIL; payload: string };

/**
 * Main ranked state context.
 *
 * TODO: Re-evaluate the data structure
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
export const RankedContext = createContext<{
  state: INIT_RANKED_TYPE;
  dispatch: React.Dispatch<RANK_ACTIONS>;
}>({ state: INIT_RANKED_STATE, dispatch: () => {} });

// Main reducer for this context
const reducer = (
  state: INIT_RANKED_TYPE,
  action: RANK_ACTIONS
): INIT_RANKED_TYPE => {
  switch (action.type) {
    case RANKED_ACTION_TYPES.USER_ID:
      return { ...state, userId: action.payload };
    case RANKED_ACTION_TYPES.TEMP_RANK:
      return { ...state, tempRank: action.payload };
    case RANKED_ACTION_TYPES.ADD_EMAIL:
      return {
        ...state,
        rankedEmails: [...state.rankedEmails, action.payload],
      };
    case RANKED_ACTION_TYPES.REMOVE_EMAIL:
      const newRankedEmails = state.rankedEmails.filter(
        (email) => email.messageId !== action.payload
      );
      return {
        ...state,
        rankedEmails: [...newRankedEmails],
      };
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
};

// Context using a reducer to manage the state.
const RankedContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, INIT_RANKED_STATE);

  return (
    <RankedContext.Provider value={{ state, dispatch }}>
      {children}
    </RankedContext.Provider>
  );
};

export default RankedContextProvider;

/**
 * Custom hook to make sure context is available and wrapping components properly.
 *
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
export const useRankedContext = () => {
  const context = useContext(RankedContext);

  if (context === undefined) {
    throw new Error(
      "useRankedContext has to be used within <RankedContext.Provider>"
    );
  }

  return context;
};
