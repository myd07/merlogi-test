import { loadable } from "src/utils/loadable";

const HomePage = loadable(() => import("./index"));

const config = {
  path: "/",
  key: "home",
  component: <HomePage />,
};

export default config;
