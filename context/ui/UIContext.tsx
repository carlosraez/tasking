import { createContext } from "react";

interface ContextProps {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDraggin: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
  startDragging: () => void;
  endDraggin: () => void;
}
export const UIContext = createContext({} as ContextProps);
