// Import: Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Import: Styling
import "./index.css";

// Import: Components
import App from "./App";

// Import: Service Worker
import * as serviceWorker from "./serviceWorker";

// Import: StateProvider
import { StateProvider } from "./StateProvider";

// Import: Reducer
import reducer, { initialState } from "./reducer";

// Render: App
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
