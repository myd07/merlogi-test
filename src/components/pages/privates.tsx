import { Routes, Route } from "react-router-dom";

import HomeConfig from "./home/loadable";
import MovieListConfig from "./movie-list/loadable";

const Privates = () => {
  return (
    <>
      <Routes>
        <Route key="not-found" path="*" element={<div>Page not found</div>} />
        {[HomeConfig, MovieListConfig].map(({ key, path, component }) => (
          <Route key={key} path={path} element={component} />
        ))}
      </Routes>
    </>
  );
};

export default Privates;