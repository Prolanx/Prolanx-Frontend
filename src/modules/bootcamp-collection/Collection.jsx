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
import RelativeWrapper from "../../components/other/RelativeWrapper";
import CurvyBackground from "../../components/other/CurvyBackground";

function Courses() {
  const { data, faculty, faculties, actions, search } = useCoursesInit();

  return (
    <RelativeWrapper bg={colors.accent2}>
      <CurvyBackground top="125px" />
      <CurvyBackground top="204px" isRight={true} />

      <SecondaryIntro
        title={faculty ? faculty.title : "All Faculties"}
        message="Browse through our bootcamps and filter them by their respective faculties"
      />

      <RelativeWrapper>
        <CurvyBackground top="769px" />
        <CurvyBackground top="1000px" isRight={true} />

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
      </RelativeWrapper>
    </RelativeWrapper>
  );
}

export default Courses;

<React.Fragment></React.Fragment>;
