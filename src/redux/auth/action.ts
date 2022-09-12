import { useDispatch } from "react-redux";

import type { LoginPayload } from "src/domains/auth";
import { saveSession, getSession, removeSession } from "src/utils/session";

import { authActions } from "./slice";

const mockLogin: LoginPayload = {
  username: "username",
  password: "password",
};

const useAuthAction = () => {
  const dispatch = useDispatch();

  const login = () => {
    if (getSession()) {
      dispatch(authActions.login());
    }
  };

  const requestLogin = ({ username, password }: LoginPayload) => {
    try {
      if (mockLogin.username === username && mockLogin.password === password) {
        saveSession("loggedin");
        login();
      } else {
        alert("username or password is wrong");
      }
    } catch (error) {
      alert("login error");
    }
  };

  const logout = () => {
    if (getSession()) {
      removeSession();
    }
    dispatch(authActions.logout());
  };

  return {
    login,
    requestLogin,
    logout,
  };
};

export default useAuthAction;
