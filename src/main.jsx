import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Context_dataProvider from "./Components/context_data.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      position="top-center"
      autoClose={10000}
      hideProgressBar={false}
      pauseOnHover={true}
    />
    <Context_dataProvider>
      <App />
    </Context_dataProvider>
  </StrictMode>
);
