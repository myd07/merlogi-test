import React from "react";
import { Link } from "react-router-dom";
import Card from "src/components/atoms/card";

import { Movie } from "src/domains/movie";
import useMovieAction from "src/redux/movie/action";
import useMovieDataModel from "src/redux/movie/data";
import { generatePath } from "src/utils/router";

import { Wrapper } from "./style";

const MovieListPage = () => {
  const { requestCollection } = useMovieAction();
  const { collection } = useMovieDataModel();

  React.useEffect(() => {
    requestCollection();
  }, []);

  return (
    <Wrapper data-testid="movie-list">
      {collection.map((movie: Movie) => (
        <Link
          key={movie.id}
          to={generatePath({ name: "CharacterList" })}
          state={movie.people}
        >
          <Card img={movie.movie_banner} title={movie.original_title} />
        </Link>
      ))}
    </Wrapper>
  );
};

export default MovieListPage;
