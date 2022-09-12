import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux";

// import { store } from '@/core/redux/store';

// import Pages from './pages';

export default function App() {
  return <ReduxProvider store={store}>{/* <Pages /> */}</ReduxProvider>;
}
