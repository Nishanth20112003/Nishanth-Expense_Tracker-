import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecordProvider } from "./RecordsContext.jsx";

createRoot(document.getElementById("root")).render(
  <RecordProvider>
    <App />
  </RecordProvider>
);
