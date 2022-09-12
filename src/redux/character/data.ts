import { useSelector } from "react-redux";

import type { RootState } from "../index";

const getCollection = (state: RootState) => state.character.collections;

const useDataModel = () => {
  const collections = useSelector(getCollection);

  return {
    collections,
  };
};

export default useDataModel;
