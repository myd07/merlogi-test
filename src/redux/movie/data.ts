import { useSelector } from "react-redux";

import { Movie } from "src/domains/movie";

import type { RootState } from "../index";

const getCollection = (state: RootState) => state.movie.collection;

const useMovieDataModel = () => {
  const collection: Movie[] = useSelector(getCollection);

  return {
    collection,
  };
};

export default useMovieDataModel;
