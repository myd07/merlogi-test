import React from "react";
import { BrowserRouter } from "react-router-dom";

import useAuthDataModel from "src/redux/auth/data";
import useAuthAction from "src/redux/auth/action";

import Publics from "./publics";
import Privates from "./privates";

const Pages = () => {
  // DATA MODEL & ACTION
  const { isLoggedin } = useAuthDataModel();
  const { login } = useAuthAction();

  React.useEffect(() => {
    login();
  }, []);

  return (
    <BrowserRouter>
      {isLoggedin ? (
        <>
          <Privates />
        </>
      ) : (
        <Publics />
      )}
    </BrowserRouter>
  );
};

export default Pages;
