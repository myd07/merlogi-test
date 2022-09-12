import { useSelector } from "react-redux";

import { Character } from "src/domains/character";

import type { RootState } from "../index";

const getCollection = (state: RootState) => state.character.collection;

const useCharacterDataModel = () => {
  const collection: Character[] = useSelector(getCollection);

  return {
    collection,
  };
};

export default useCharacterDataModel;
