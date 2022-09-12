import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import "normalize.css";

import store from "src/redux";

import Pages from "./pages";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Pages />
    </ReduxProvider>
  );
}
