import { Heading } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import useResponsive from "../../hooks/useResponsive";

function SectionTitle({ name, title, ...props }) {
  const media = useResponsive();
  const border = "1px solid "+ colors.black+"70"
  return (
    <Heading
      pb="22px"
      display="inline-block"
      fontSize={media.isMobile ? "16px" : "32px"}
      fontWeight="700"
      borderBottom={border}
      color={colors.black}
      fontFamily="nexa"
      {...props}
    >
      {name || title}
    </Heading>
  );
}

export default SectionTitle;
