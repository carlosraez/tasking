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
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
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
