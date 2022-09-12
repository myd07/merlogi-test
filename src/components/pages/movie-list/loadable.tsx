import { loadable } from "src/utils/loadable";

const MoviePage = loadable(() => import("./index"));

const config = {
  path: "/movie",
  key: "movie-list",
  component: <MoviePage />,
};

export default config;
