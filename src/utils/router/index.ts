import React from "react";
import { useNavigate } from "react-router-dom";

type Name = "MovieList" | "CharacterList";

interface Params {
  name?: Name;
}

export const generatePath = ({ name }: Params): string => {
  let url = "";
  switch (name) {
    case "MovieList":
      url = "/movie";
      break;
    case "CharacterList":
      url = "/movie/character";
      break;
    default:
      break;
  }
  return url;
};

export const useRedirect = () => {
  const navigate = useNavigate();

  const redirect = React.useCallback(({ name }: Params): void => {
    const path = generatePath({ name });
    navigate(path);
  }, []);

  return {
    redirect,
  };
};
