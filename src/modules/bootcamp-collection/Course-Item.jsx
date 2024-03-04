import { Button } from "@chakra-ui/react";
import React from "react";
import CourseItemWrapper from "../../features/course-item/Course-Item-Wrapper";
import { Link } from "react-router-dom";
import { routesAppend } from "../../constants";
import CustomLink from "../../components/nav/CustomLink";
import BorderedButton from "../../components/button/BorderedButton";
import { colors } from "../../constants/design";

function CourseItem({ data }) {
  return (
    <CourseItemWrapper data={data}>
      <CustomLink to={routesAppend.bootcampInfo + data.id}>
        <BorderedButton title="Enroll now" bg={colors.accent} />
      </CustomLink>
    </CourseItemWrapper>
  );
}

export default CourseItem;
