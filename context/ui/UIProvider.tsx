import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDraggin: boolean;
}
const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDraggin: false,
};

interface UIProviderProps {
  children: React.ReactNode;
}

const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ type: "UI - Set isAddingEntry", payload: isAddingEntry });
  };

  const startDragging = () => {
    dispatch({ type: "UI - Start dragging" });
  };

  const endDraggin = () => {
    dispatch({ type: "UI - End dragging" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging,
        endDraggin,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
