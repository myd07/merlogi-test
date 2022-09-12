import React from "react";
import { useLocation } from "react-router-dom";
import Card from "src/components/atoms/card";

import useCharacterAction from "src/redux/character/action";
import useCharacterDataModel from "src/redux/character/data";

import { Wrapper } from "./style";

const CharacterPage = () => {
  // CUSTOM HOOKS
  const { state } = useLocation();
  const { requestCharacter, resetCollection } = useCharacterAction();
  const { collection } = useCharacterDataModel();

  React.useEffect(() => {
    if (state) {
      (state as string[]).forEach((url) => {
        requestCharacter(url);
      });
    }
    return () => {
      resetCollection();
      window.history.replaceState(null, "");
    };
  }, []);

  const canRender = React.useMemo(() => {
    if (state) {
      return true;
    }
    return false;
  }, [state]);

  return (
    <Wrapper>
      {!canRender && (
        <div>no state detected, please go to films page first</div>
      )}
      {canRender &&
        collection.map((chara) => (
          <Card
            key={chara.id}
            img="https://media.istockphoto.com/vectors/missing-rubber-stamp-vector-vector-id1213374148?k=20&m=1213374148&s=612x612&w=0&h=A3_Ku27Jf_XRfsWCZYvwJWQGNR2hbHDh9ViLLaAdJ5w="
            title={chara.name}
          />
        ))}
    </Wrapper>
  );
};

export default CharacterPage;
