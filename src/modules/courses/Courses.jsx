import { Box } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import SecondaryIntro from "../../components/intro/Secondary-Intro";
import Footer from "../../components/footer/Footer";

import { useCoursesInit } from "./hooks/useCoursesInit";
import CourseItem from "./Course-Item";
import SectionWrapper from "../../components/other/SectionWrapper";
import CourseFacultyItem from "./Course-Faculty-Item";
import BootcampQuerySection from "./features/Bootcamp-Query-Section";
import BootcampDisplayWrapper from "./features/Bootcamp-Display-Wrapper";
import NoBootcampSection from "./features/No-Bootcamp-Section";
import FaqSection from "../../features/faqs/Faq-Section";

function Courses() {
  const { data, faculty, actions, isFaculty } = useCoursesInit();

  return (
    <Box bg={colors.accent2}>
      <SecondaryIntro
        title="Courses"
        message="Empowering your journey through cutting edge technogy and expertise"
      />

      <SectionWrapper>
        <BootcampQuerySection faculty={faculty} actions={actions} />

        <React.Fragment>
          {/* check if data is empty or not */}
          {data.length < 1 ? (
            <NoBootcampSection />
          ) : (
            <BootcampDisplayWrapper>
              {data.map((item) => (
                <React.Fragment>
                  {isFaculty ? (
                    <CourseFacultyItem
                      data={item}
                      toggleCourses={actions.toggleCourse}
                    />
                  ) : (
                    <CourseItem data={item} />
                  )}
                </React.Fragment>
              ))}
            </BootcampDisplayWrapper>
          )}
        </React.Fragment>
      </SectionWrapper>

      <FaqSection />
      {/* FAQ SECTION */}

      <Footer />
    </Box>
  );
}

export default Courses;

<React.Fragment></React.Fragment>;
