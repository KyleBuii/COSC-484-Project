import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Layout from "./pages/layout";
import Personalgoals from "./pages/personalgoals/personalgoals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout></Layout>
    <Personalgoals />
  </React.StrictMode>
);
reportWebVitals();
