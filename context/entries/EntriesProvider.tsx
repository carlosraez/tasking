import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { Entry } from "@/interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}
const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: "pending",
      createdAt: 1674154355069,
    },
    {
      _id: uuidv4(),
      description:
        "InProgress: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: "in-progress",
      createdAt: 1674154355069 - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Finisihed: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: "finished",
      createdAt: 1674154355069 - 100000,
    },
  ],
};

interface EntriesProviderProps {
  children: React.ReactNode;
}

const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={state}>{children}</EntriesContext.Provider>
  );
};

export default EntriesProvider;
