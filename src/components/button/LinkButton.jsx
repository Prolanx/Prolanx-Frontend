import React from "react";
import BaseButton from "./BaseButton";
import { Link } from "react-router-dom";

function LinkButton({ title, link, ...props }) {
  return <BaseButton title={title} {...props} />;
}

export default LinkButton;
