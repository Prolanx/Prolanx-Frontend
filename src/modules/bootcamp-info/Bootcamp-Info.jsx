import { Flex, Text, Box, Image, Button } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import SecondaryIntro from "../../components/intro/Secondary-Intro";
import Footer from "../../components/footer/Footer";
import { useInitBootcampInfo } from "./hooks/useInitBootcampInfo";
import CustomHeading from "../../components/heading/Custom-Heading";
import { FiLogOut } from "react-icons/fi";
import CourseScheduleSection from "./features/Course-Schedule-Section";
import { useCoursePrice } from "./hooks/useCoursePrice";
import { Link } from "react-scroll";
import useResponsive from "../../hooks/useResponsive";
import BootcampPriceSection from "./features/Bootcamp-Price-Section";
import CoursePlanSection from "./features/Course-Plan-Section";
import CourseFaqSection from "./features/Course-Faq-Section";
import SectionWrapper2 from "../../components/other/SectionWrapper2";
import FaqSection from "../../features/faqs/Faq-Section";

function BootcampInfo() {
  const priceProps = useCoursePrice();

  const data = useInitBootcampInfo();

  const scrollSections = {
    curriculum: "Curriculum",
    schedule: "Schedule",
    price: "Price",
    faq: "FAQ",
  };
  const scrollMenus = Object.values(scrollSections);
  const borderStyle = ".5px solid " + colors.primary + "80";
  const media = useResponsive();

  return (
    <Box bg={colors.whiteText}>
      
      <SecondaryIntro
        title={data.bootcamp?.title}
        // message="Empowering your journey through cutting edge technogy and expertise"
      />

      <SectionWrapper2 pb="0px">
        <Flex
          flexDir={media.isMobile || media.isTablet ? "column" : "row"}
          justifyContent="space-between"
        >
          <Box
            maxW={media.isMobile || media.isTablet ? "100%" : "590px"}
            me={media.isDesktop && "104px"}
            // mb={!media.isDesktop && "36px"}
            mb={media.isMobile || media.isTablet ? "40px" : "0px"}
          >
            <Text mb="36px">Live bootcamp - {data.bootcamp?.title}</Text>
            <CustomHeading
              title={data.bootcamp?.title}
              fontSize="40px"
              mb="36px"
            />
            <Text fontFamily="mont" mb="36px" w>
              {data.bootcamp?.desc}
            </Text>

            <Button size="md" h="50px" rightIcon={<FiLogOut />}>
              Enroll
            </Button>
          </Box>

          <Image
            bg="purple.400"
            rounded="8px"
            h={media.isMobile ? "230px" : media.isTablet ? "350px" : "477px"}
            w={media.isMobile || media.isTablet ? "100%" : "50%"}
            // 505px
            objectFit="cover"
            src={data.bootcamp?.image}
          />
        </Flex>
      </SectionWrapper2>

      <SectionWrapper2>
        <Flex flexDir={media.isMobile || media.isTablet ? "column" : "row"}>
          <div>
            <Box
              border={borderStyle}
              bg={colors.primaryAccent}
              position={media.isMobile || media.isTablet ? "static" : "sticky"}
              top="80px"
              p="36px 30px"
              rounded="8px"
              minW={media.isMobile || media.isTablet ? "100%" : "278px"}
              me={media.isMobile || media.isTablet ? "0px" : "35px"}
              mb={media.isMobile || media.isTablet ? "0px" : "50px"}
            >
              <Box w="100%" borderLeft={borderStyle} ps={3} pt={3}>
                {scrollMenus.map((item, index) => (
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <Text
                      mb={index !== scrollMenus.length - 1 && "30px"}
                      fontFamily="mont"
                      cursor="pointer"
                    >
                      {item}
                    </Text>
                  </Link>
                ))}
              </Box>
              <Button
                w="100%"
                mt="36px"
                minH="50px"
                bg={colors.primary}
                color={colors.accent2}
                fontFamily="mont"
              >
                Enroll
              </Button>
            </Box>
          </div>

          <div>
            <Box name={scrollSections.curriculum}>
              <CoursePlanSection data={  data.bootcamp} />
            </Box>
            <Box name={scrollSections.schedule}>
              <CourseScheduleSection />
            </Box>

            <Box name={scrollSections.price}>
              <BootcampPriceSection data={priceProps} />
            </Box>
            <Box name={scrollSections.faq}>
              <CourseFaqSection name={scrollSections.faq} />
            </Box>
          </div>
        </Flex>
      </SectionWrapper2>

      <Footer />
    </Box>
  );
}

export default BootcampInfo;
