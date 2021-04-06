import React from "react";
import { render } from "react-dom";
import { Counter } from "./Counter";
import { store } from "./init-store.js";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
