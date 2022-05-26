import React, { createContext, useContext, useReducer } from "react";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";
import reducer from "./reducer";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const [state, setstate] = useState(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  // ----------Dispatching Actions------------- //
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook for importing state
const useAppContext = () => useContext(AppContext);

export { AppProvider, initialState, useAppContext };
