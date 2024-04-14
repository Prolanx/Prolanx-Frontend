import { Image } from "@chakra-ui/react";
import React from "react";
import logoBigLeft from "assets/logo-big-left.png";
import logoBigRight from "assets/logo-big-right.png";

function CurvyBackground({ isRight = false, top, ...props }) {
  return (
    <Image
      src={isRight ? logoBigRight : logoBigLeft}
     
      right={isRight && "0px"}
      left={!isRight && "0px"}
      top={top}
     
      opacity="0.8"
      pos="absolute"
      zIndex="50"
      {...props}
    />
  );
}

export default CurvyBackground;
