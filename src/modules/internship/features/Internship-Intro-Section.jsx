import React from 'react'
import IntroWrapper from '../../home/features/Intro-Wrapper'
import { Box, Flex } from '@chakra-ui/react'
import SectionWrapper2 from '../../../components/other/SectionWrapper2'
import CustomHeading from '../../../components/heading/Custom-Heading'
import { colors } from '../../../constants/design'
import LinkButton from '../../../components/button/LinkButton'
import useResponsive from '../../../hooks/useResponsive'

function InternshipIntroSection({formLink, word, introBg}) {

   const media =  useResponsive();

  return (
 
       <IntroWrapper height={"845px"} mobileHeight="100vh">
        <Flex
          backgroundImage={introBg}
          backgroundPosition="center"
          minHeight="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          alignItems="center"
        >
          <SectionWrapper2>
            <Box height="100%" alignItems="center" color="white">

              <CustomHeading
                mt={!media.isDesktop && "50px"}
                title="Prolanx Internship"
                mb="25px"

                color={colors.accent}
                fontSize={media.isMobile ? "30px" : media.isTablet ? "25px" : media.isLaptop? "30px": "56px"}
              />

              <CustomHeading
                title="Empowering Future Full-stack Developers "
                w="60%"
                mb="29px"
             
                fontSize={media.isMobile ? "20px" : media.isTablet ? "25px" : media.isLaptop? "30px": "36px"}
                fontFamily="mont"
              />

              <CustomHeading
                color={ colors.whiteText}
                fontFamily="mont"
           
                fontSize={media.isMobile ? "20px" : media.isTablet ? "25px" : media.isLaptop? "30px": "44px"}
                mb={media.isMobile ? "40px" : media.isTablet || media.isLaptop ? "50px" : "87px"}
              >
                {word.staticPart}
                <span
                  style={{ color: colors.accent }}
                >{` ${word.dynamicPart}`}</span>
              </CustomHeading>

              <LinkButton title="Enroll Now"  to={formLink} />
            </Box>
          </SectionWrapper2>
        </Flex>
      </IntroWrapper>

  )
}

export default InternshipIntroSection
