import { createContext, useContext, useReducer } from "react";
import { RANKED_ACTION_TYPES } from "../constants/words";

interface RankedEmail {
  messageId: string;
  rank: string;
  parameters: string[];
}

// Structure for data when initializing a new user.
type INIT_RANKED_TYPE = {
  userId: string;
  rankedEmails: RankedEmail[];
};

// Data for initializing a new user.
const INIT_RANKED_STATE = {
  userId: "u1",
  rankedEmails: [],
};

// Define the Actions that can occur in this context
type RANK_ACTIONS =
  | { type: RANKED_ACTION_TYPES.USER_ID; payload: string }
  | { type: RANKED_ACTION_TYPES.RANKED_EMAILS; payload: RankedEmail[] };

/**
 * Main user state context.
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

const reducer = (state: INIT_RANKED_TYPE, action: RANK_ACTIONS) => {
  switch (action.type) {
    case RANKED_ACTION_TYPES.USER_ID:
      return { ...state, userId: action.payload };
    case RANKED_ACTION_TYPES.RANKED_EMAILS:
      return { ...state, rankedEmails: action.payload };
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
};

interface ProviderProps {
  children: React.ReactNode;
}

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
