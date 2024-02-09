import React from "react";
import { colors } from "../../constants/design";

function LinkBorderBottom({ isHovered, isCurrent, }) {

  return (
    <div
      style={{
        position: "absolute",
        bottom: "-7px",
        left: 0,
        height: "1.7px",
        backgroundColor: isHovered || isCurrent ? colors.accent : "transparent",
        transition: "width 0.2s ease-in",
        width: isHovered||   isCurrent   ? "100%" : 0,
      }}
    />
  );
}

export default LinkBorderBottom;
