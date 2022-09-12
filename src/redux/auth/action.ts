import { useDispatch } from "react-redux";

import type { LoginPayload } from "src/domains/auth";
import { saveSession } from "src/utils/session";

import { authActions } from "./slice";

const mockLogin: LoginPayload = {
  username: "username",
  password: "password",
};

const useAuthAction = () => {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(authActions.login());
  };
  const requestLogin = ({ username, password }: LoginPayload) => {
    try {
      if (mockLogin.username === username && mockLogin.password === password) {
        saveSession("loggedin");
      } else {
        alert("username or password is wrong");
      }
    } catch (error) {
      alert("login error");
    }
  };

  return {
    login,
    requestLogin,
  };
};

export default useAuthAction;
