import React from "react";
import BaseButton from "./BaseButton";
import { colors } from "../../constants/design";

function BorderedButton({ title, ...props }) {
  const border = "1px solid " + colors.accent;
  return (
    <BaseButton
      bg="transparent"
      border={border}
      title={title}
      _hover={{
        bg: colors.accent,
        border: "none"
      }}
      {...props}
    />
  );
}

export default BorderedButton;
