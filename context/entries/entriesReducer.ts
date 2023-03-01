import { EntriesState } from "./";

type EntriesActiontype = { type: "Entries - ActionName" };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActiontype
): EntriesState => {
  switch (action.type) {
    // case "":
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
};
