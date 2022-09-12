import React from "react";
import { BrowserRouter } from "react-router-dom";

import Publics from "./publics";

const Pages = () => {
  // INIT VIEW MODEL
  // const auth = (() => AuthViewModel())();
  // const { dataModel } = auth;
  // const { isLoggedin } = dataModel();

  return (
    <BrowserRouter>
      {/* {isLoggedin ? (
        <>
          <Privates />
        </>
      ) : (
        <Publics />
      )} */}
      <Publics />
    </BrowserRouter>
  );
};

export default Pages;
