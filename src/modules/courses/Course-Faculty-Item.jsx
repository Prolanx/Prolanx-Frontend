import React from "react";
import CustomButton from "../../components/button/Custom-Button";
import CourseItemWrapper from "../../features/course-item/Course-Item-Wrapper";
import BorderedButton from "../../components/button/BorderedButton";

function CourseFacultyItem({ data, toggleCourses }) {
  return (
    <CourseItemWrapper pos="relative" data={data} title={data.title} image={data.image} >
     
      <BorderedButton
        title=" Learn More"
        onClick={() => toggleCourses(data.id)}
        pos="absolute"
      //   bottom="0px"
      //  mt="100px"

       
        // size={media.isMobile ? "sm" : "md"}
      />
      {/* <CustomButton title="Learn more" onClick={() => toggleCourses(data.id)} /> */}
    </CourseItemWrapper>
  );
}

export default CourseFacultyItem;
