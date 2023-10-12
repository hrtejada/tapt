import { createContext, useReducer, useState } from "react";
import { OPTIONS, TYPES } from "../constants/words";

interface UserContextProps {
  id: string;
  unreadCount: number;
  accepted: number;
  rejected: number;
  limit: string;
  startDate: Date;
  endDate: Date;
  parameters: string[];
  notifications: string;
  setId: (id: string) => void;
  updateUnreadCount: (count: number) => void;
  updateAccepted: (value: number) => void;
  updateRejected: (value: number) => void;
  setEmailLimit: (limit: string) => void;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
  addParameter: (param: string) => void;
  removeParameter: (param: string) => void;
}

type INIT_USER_TYPE = {
  id: string;
  unreadCount: number;
  accepted: number;
  rejected: number;
  limit: string;
  startDate: Date;
  endDate: Date;
  parameters: string[];
  notifications: string;
};

const INIT_USER_STATE = {
  id: "",
  unreadCount: 0,
  accepted: 50,
  rejected: 50,
  limit: "10",
  startDate: new Date(),
  endDate: new Date(),
  parameters: [""],
  notifications: OPTIONS.OFF.toString(),
};

type ACTION_TYPE =
  | { type: TYPES.USER_ID; payload: string }
  | { type: TYPES.UNREAD_COUNT; payload: number }
  | { type: TYPES.ACCEPTED; payload: number }
  | { type: TYPES.REJECTED; payload: number }
  | { type: TYPES.LIMIT; payload: string }
  | { type: TYPES.START_DATE; payload: Date }
  | { type: TYPES.END_DATE; payload: Date }
  | { type: TYPES.ADD; payload: string }
  | { type: TYPES.DELETE; payload: string };

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
  dispatch: React.Dispatch<ACTION_TYPE>;
}>({ state: INIT_USER_STATE, dispatch: () => {} });

const reducer = (state: INIT_USER_TYPE, action: ACTION_TYPE) => {
  switch (action.type) {
    case TYPES.USER_ID:
      return { ...state, id: action.payload };
    case TYPES.UNREAD_COUNT:
      return { ...state, unreadCount: action.payload };
    case TYPES.ACCEPTED:
      return { ...state, accepted: action.payload };
    case TYPES.REJECTED:
      return { ...state, rejected: action.payload };
    case TYPES.LIMIT:
      return { ...state, limit: action.payload };
    case TYPES.START_DATE:
      return { ...state, startDate: action.payload };
    case TYPES.END_DATE:
      return { ...state, endDate: action.payload };
    case TYPES.ADD:
      return {
        ...state,
        parameters: [...state.parameters, action.payload],
      };
    case TYPES.DELETE:
      const newParams = state.parameters.filter(
        (param) => param !== action.payload
      );
      return {
        ...state,
        parameters: newParams,
      };
    default:
      throw new Error();
  }
};

interface ProviderProps {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INIT_USER_STATE);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
