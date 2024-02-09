import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { colors } from "../../constants/design";
import CustomLink from "./CustomLink";
import LinkBorderBottom from "./LinkBorderBottom";

function HeaderLink({ name, link, isHideBorder, ...props }) {
  const location = useLocation();

  const [isCurrent, setIsCurrent] = useState(false);
  useEffect(() => {
    if (location.pathname === link) {
      setIsCurrent(true);
    } else {
      setIsCurrent(false);
    }
  }, [location]);

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <CustomLink
      link={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      position="relative"
      {...props}
    >
      {name}
      {!isHideBorder && (
        <LinkBorderBottom isHovered={isHovered} isCurrent={isCurrent} />
      )}
    </CustomLink>
  );
}

export default HeaderLink;
