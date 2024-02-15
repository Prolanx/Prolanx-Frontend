import React from "react";
import { Link } from "react-router-dom";

import FacultyItemWrapper from "../../../../features/course-item/Faculty-Item-Wrapper";
import useResponsive from "../../../../hooks/useResponsive";
import BorderedButton from "../../../../components/button/BorderedButton";

function FacultyItem({ data, ...props }) {
  const media = useResponsive();
  return (
    <FacultyItemWrapper data={data} {...props}>
      <BorderedButton
        title=" Learn More"
        as={Link}
        w="100%"
        to={data.url}
        size={media.isMobile ? "sm" : "md"}
      />
    </FacultyItemWrapper>
  );
}

export default FacultyItem;
