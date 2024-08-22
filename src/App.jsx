import { toast, ToastContainer } from "react-toastify";
import useRoutesCustom from "./hooks/useRoutesCustom";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';

export const NotificationContext = React.createContext();

function App() {
  const handleNotification = (content, type) => {
    toast[type](content, {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      hideProgressBar: false,
    });


  };
  const routes = useRoutesCustom();
  return (
    <NotificationContext.Provider
      value={{
        handleNotification,
      }}
    >
      {routes}
      <ToastContainer />
    </NotificationContext.Provider>
  );
}

export default App;
