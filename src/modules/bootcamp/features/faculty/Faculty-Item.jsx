import React from "react";
import { Link } from "react-router-dom";

import FacultyItemWrapper from "../../../../features/course-item/Faculty-Item-Wrapper";
import useResponsive from "../../../../hooks/useResponsive";
import BorderedButton from "../../../../components/button/BorderedButton";
import CustomLink from "../../../../components/nav/CustomLink";

function FacultyItem({ data, ...props }) {
  const media = useResponsive();
  return (
    <FacultyItemWrapper data={data} {...props}>
      <CustomLink to={data.url}>
        <BorderedButton
          title=" Learn More"
          w="100%"
          to={data.url}
          size={media.isMobile ? "sm" : "md"}
        />
      </CustomLink>
    </FacultyItemWrapper>
  );
}

export default FacultyItem;
