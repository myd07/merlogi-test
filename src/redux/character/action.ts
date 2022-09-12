import { useDispatch } from "react-redux";
import axios from "src/utils/axios";

import { characterActions } from "./slice";

const useCharacterAction = () => {
  const dispatch = useDispatch();

  const requestCharacter = async (url: string) => {
    try {
      const response = await axios({
        method: "GET",
        url,
      });
      dispatch(characterActions.setCollectionFromId(response.data));
    } catch (error) {
      alert(error);
    }
  };

  const resetCollection = async () => {
    try {
      dispatch(characterActions.setCollection([]));
    } catch (error) {
      alert(error);
    }
  };

  return {
    requestCharacter,
    resetCollection,
  };
};

export default useCharacterAction;
