import axios from "axios";

import store from "src/redux";
import { authActions } from "src/redux/auth/slice";

import { getSession } from "../session";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((reques) => {
  if (!getSession()) {
    store.dispatch(authActions.logout());
    window.location.href = "/";
  }
  return reques;
});

export default axiosInstance;
