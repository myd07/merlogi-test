import { useDispatch } from "react-redux";

import axios from "src/utils/axios";

import { movieActions } from "./slice";

const useMovieAction = () => {
  const dispatch = useDispatch();

  const requestCollection = async () => {
    try {
      const response = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_BASE_API_URL,
        url: "/films",
      });
      dispatch(movieActions.setCollection(response.data));
    } catch (error) {
      alert(error);
    }
  };

  return {
    requestCollection,
  };
};

export default useMovieAction;
