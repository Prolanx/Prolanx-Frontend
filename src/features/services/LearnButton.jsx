import { Button } from "@chakra-ui/react";
import React from "react";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import useResponsive from "../../hooks/useResponsive";

function LearnButton({ title, ...props }) {
  const media = useResponsive();
  return (
    <Button
      minH={media.isDesktop ?"51px" :"auto"}
      rounded="3px"
      iconSpacing="30px"
      rightIcon={<FiLogIn />}
      fontFamily="mont"
      size={media.isDesktop ? "md" : "sm"}
      //   fontSize="18px"
      //   alignItems="center"
      {...props}
    >
      {title}
    </Button>
  );
}

export default LearnButton;
