import { loadable } from "src/utils/loadable";

const LoginPage = loadable(() => import("./index"));

const config = {
  path: "/",
  key: "login",
  component: <LoginPage />,
};

export default config;
