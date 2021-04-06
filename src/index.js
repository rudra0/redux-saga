import React from "react";
import { render } from "react-dom";
import { LogIn } from "./Login";
import { store } from "./init-store.js";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <LogIn />
  </Provider>
);

render(<App />, document.getElementById("root"));
