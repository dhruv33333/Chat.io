import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [notifications, setNotifications] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);

    if (!user) {
      console.log(
        "No user present in local storage redirecting to login page..."
      );
      history.push("/login");
    }
  }, [history]);

  return (
    <AppContext.Provider
      value={{ user, setUser, notifications, setNotifications }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
