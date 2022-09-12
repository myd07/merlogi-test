import React from "react";
import { Link } from "react-router-dom";

import { generatePath } from "src/utils/router";

const HomePage = () => {
  return (
    <>
      <Link to={generatePath({ name: "MovieList" })}>Movie List Page</Link>
    </>
  );
};

export default HomePage;
