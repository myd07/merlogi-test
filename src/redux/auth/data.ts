import { useSelector } from "react-redux";

import type { RootState } from "../index";

const getIsLoggedin = (state: RootState) => state.auth.isLoggedin;

const useAuthDataModel = () => {
  const isLoggedin = useSelector(getIsLoggedin);

  return {
    isLoggedin,
  };
};

export default useAuthDataModel;
