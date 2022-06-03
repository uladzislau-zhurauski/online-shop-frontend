import React from "react";
import { NoImageStyled } from "./styles";

const NoImage = () => (
  <NoImageStyled
    src="/img/no_image_available.png"
    alt="No image available for this product"
    width={600}
    height={600}
  />
);

export default NoImage;
