import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { colors } from "../../constants/design";
import CustomLink from "./CustomLink";
import LinkBorderBottom from "./LinkBorderBottom";

function HeaderLink({ name, link, isHideBorder, isFixed, ...props }) {
  const location = useLocation();
  const [isCurrent, setIsCurrent] = useState(false);
  useEffect(() => {
    if (location.pathname === link) {
      setIsCurrent(true);
    } else {
      setIsCurrent(false);
    }
  }, [location]);

  const [color, setColor] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    if (isFixed) {
    
      // if(isHovered) return setColor()
      return
    }
    
    
  }, [isHovered]);
  return (
    <CustomLink
      link={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      color={isCurrent ? colors.accent : colors.whiteText}
      position="relative"
      {...props}
    >
      {name}
      {!isHideBorder && <LinkBorderBottom isHovered={isHovered} />}
    </CustomLink>
  );
}

export default HeaderLink;
