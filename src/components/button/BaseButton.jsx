import { Button } from "@chakra-ui/react";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import useResponsive from "../../hooks/useResponsive";
import { colors } from "../../constants/design";

function BaseButton({ title, ...props }) {
  const media = useResponsive();
  return (
    <Button
      minH={media.isDesktop ? "51px" : "auto"}
      rounded="3px"
      iconSpacing="30px"
      rightIcon={<FiLogIn />}
      fontFamily="mont"
      fontSize={media.isMobile || media.isTablet ? "16px": "20px"}
      size={media.isMobile ? "md" : "lg"}
      bg={colors.accent}
      _hover={{
        bg: colors.accent,
      }}
      {...props}
    >
      {title}
    </Button>
  );
}

export default BaseButton;
