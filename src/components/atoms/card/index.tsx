import React from "react";

import { Wrapper } from "./style";

interface Props {
  img: string;
  title: string;
}

const Card = ({ img, title }: Props) => {
  return (
    <Wrapper>
      <img src={img} alt={title} />
      <span>{title}</span>
    </Wrapper>
  );
};

export default Card;
