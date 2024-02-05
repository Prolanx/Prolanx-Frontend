import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { colors } from "../../constants/design";

function CustomButton({ title, children, customIcon, customHoverIcon, ...props }) {


  const [isHover, setIsHover] = useState(false)
  const toggleHover = () => setIsHover(!isHover);


  return (
    <Button
      bg="transparent"
      variant="outline"
      rounded="2px"
      h="51px"
      borderColor={colors.accent}
      color={colors.accent2}
      onMouseOver={toggleHover}
      onMouseOut={toggleHover}
      _hover={{
        background: props?.borderColor || colors.accent,
        color: props?.color || colors.accent2,
      }}
      {...props}
    >
      {title}

      {/* {customIcon}
      {customHoverIcon} */}
      {/* if isHover: show customHoverIcon else show customIcon*/}

      {/* {customIcon && (
 <Image ms="5px" src={iconSignin} />
    )}
     */}

      {children}
    </Button>
  );
}

export default CustomButton;
