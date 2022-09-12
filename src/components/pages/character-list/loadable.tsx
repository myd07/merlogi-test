import { loadable } from "src/utils/loadable";

const CharacterPage = loadable(() => import("./index"));

const config = {
  path: "/movie/character",
  key: "character",
  component: <CharacterPage />,
};

export default config;
