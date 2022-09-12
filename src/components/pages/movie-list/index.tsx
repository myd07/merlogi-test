import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "src/domains/movie";

import useMovieAction from "src/redux/movie/action";
import useMovieDataModel from "src/redux/movie/data";
import { generatePath } from "src/utils/router";

const MovieListPage = () => {
  const { requestCollection } = useMovieAction();
  const { collection } = useMovieDataModel();

  React.useEffect(() => {
    requestCollection();
  }, []);

  return (
    <>
      {collection.map((movie: Movie) => (
        <div>
          <Link key={movie.id} to={generatePath({ name: "CharacterDetail" })}>
            {movie.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieListPage;
