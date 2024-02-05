import { Heading } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import useResponsive from "../../hooks/useResponsive";

function SectionTitle({ name, ...props }) {
  const media = useResponsive();
  return (
    <Heading
      pb="8px"
      display="inline-block"
      fontSize={media.isMobile ? "16px" : "32px"}
      fontWeight="500"
      borderBottom="1px solid #000000"
      color={colors.accent2}
      borderBottomColor={colors.accent2}
      fontFamily="nexa"
      {...props}
    >
      {name}
    </Heading>
  );
}

export default SectionTitle;
