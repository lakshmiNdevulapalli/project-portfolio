import React from "react";
import ReactDOM from "react-dom/client"; // Use React 18's createRoot API
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Optional: Measure performance in your app
// Pass a function to log results (e.g., reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();