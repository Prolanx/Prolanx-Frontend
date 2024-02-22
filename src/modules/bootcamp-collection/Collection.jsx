import { Box } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import SecondaryIntro from "../../components/intro/Secondary-Intro";
import Footer from "../../components/footer/Footer";
import { useCoursesInit } from "./hooks/useCoursesInit";
import CourseItem from "./Course-Item";
import BootcampQuerySection from "./features/Bootcamp-Query-Section";
import BootcampDisplayWrapper from "./features/Bootcamp-Display-Wrapper";
import NoBootcampSection from "./features/No-Bootcamp-Section";
import FaqSection from "../../features/faqs/Faq-Section";
import SectionWrapper2 from "../../components/other/SectionWrapper2";

function Courses() {
  const { data, faculty, faculties, actions, search } =
    useCoursesInit();

  return (
    <Box bg={colors.accent2}>
      <SecondaryIntro
        title={faculty ? faculty.title : "All Faculties"}
        message="Browse throuh our bootcamps available and filter them by their respective faculties"
      />

      <SectionWrapper2>
        <Box w="100%">
          <BootcampQuerySection
            faculty={faculty}
            actions={actions}
            search={search}
            faculties={faculties}
          />

          <React.Fragment>
            {/* check if data is empty or not */}
            {data.length < 1 ? (
              <NoBootcampSection />
            ) : (
              <BootcampDisplayWrapper>
                {data.map((item) => (
                   <CourseItem data={item} />
                
                ))}
              </BootcampDisplayWrapper>
            )}
          </React.Fragment>
        </Box>
      </SectionWrapper2>

      <FaqSection />
      <Footer />
    </Box>
  );
}

export default Courses;

<React.Fragment></React.Fragment>;
