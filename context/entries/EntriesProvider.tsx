import { FC, useReducer } from "react";
import { Entry } from "@/interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}
const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface EntriesProviderProps {
  children: React.ReactNode;
}

const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{ entries: [] }}>
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
