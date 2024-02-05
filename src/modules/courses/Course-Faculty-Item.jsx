import React from "react";
import CustomButton from "../../components/button/Custom-Button";
import CourseItemWrapper from "../../features/course-item/Course-Item-Wrapper";

function CourseFacultyItem({ data, toggleCourses }) {
  return (
    <CourseItemWrapper  data={data} title={data.title} image={data.image}>
      <CustomButton
        title="Learn more"
        onClick={() => toggleCourses(data.id)}
      />
    </CourseItemWrapper>
  );
}

export default CourseFacultyItem;
