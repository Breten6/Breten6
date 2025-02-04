import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MusicPlayerProvider } from "./MusicPlayerContext";
const basename = process.env.PUBLIC_URL;
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
    <MusicPlayerProvider>
      <App />
    </MusicPlayerProvider>
  </BrowserRouter>
);
