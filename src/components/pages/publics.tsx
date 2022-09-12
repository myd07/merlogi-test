import { Routes, Route } from "react-router-dom";

import LoginConfig from "./login/loadable";

const Publics = () => {
  return (
    <>
      <Routes>
        <Route
          key="not-found"
          path="*"
          element={<div>Page not found, back to homepage to login</div>}
        />
        {[LoginConfig].map(({ key, path, component }) => (
          <Route key={key} path={path} element={component} />
        ))}
      </Routes>
    </>
  );
};

export default Publics;
