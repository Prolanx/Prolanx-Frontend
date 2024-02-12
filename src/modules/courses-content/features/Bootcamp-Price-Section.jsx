import React from "react";
import useResponsive from "../../../hooks/useResponsive";
import PriceSummaryItem from "../component/Price-Summary-Item";
import CourseBenefitItem from "../component/Course-Benefit-Item";
import { colors } from "../../../constants/design";
import CourseInfoComponent from "../component/Course-Info-Component";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

function BootcampPriceSection({ data }) {
  const media = useResponsive();
  const border = "1px solid "+colors.primary+"90"
  return (
    <CourseInfoComponent
      title="Pricing"
      subTitle="Simple and Flexible Payment plan"
      message="Our programs provide comprehensive and top-quality tech education at an affordable price, with flexible and convenient payment options to enhance your learning journey"
    >
      <Box
        w={media.isDesktop ? "400px" : "100%"}
        p="30px 20px"
        shadow="md"
        rounded="md"
        border={border}
      >
        <Flex fontFamily="mont" alignItems="center" mb="36px">
          <Flex
            border={border}
            p="10px 16px"
            cursor="pointer"
            onClick={() => {
              data.togglePayment(data.priceType.paynow);
            }}
          >
            <Text>Pay now</Text>
            <Text  ms="20px" fontFamily="mont" bg={colors.accent} px="5px" rounded="md" >
              save
            </Text>
          </Flex>

          <Text
            border={border}
            p="10px 16px"
            cursor="pointer"
            onClick={() => {
              data.togglePayment(data.priceType.monthly);
            }}
          >
            Pay monthly
          </Text>
        </Flex>

        {/* Discount info */}
        <Box>
          {data.isPayNow && (
            <Text mb="36px" fontSize="24px" fontWeight="600" fontFamily="mont">
              Pay today and save {data.currency} {data.price.discount}
            </Text>
          )}

          <Flex fontSize="28px" fontFamily="mont" mb="36px" alignItems="center">
            {data.isPayNow && (
              <Text textDecor="line-through" me={5}>
                {data.currency} {data.price.initial}
              </Text>
            )}
            <Text>
              {data.currency} {data.price.total}
            </Text>
          </Flex>
        </Box>

        {/* Price Summary */}
        <React.Fragment>
          <PriceSummaryItem
            title="12 weeks Bootcamp "
            value={data.currency + data.price.initial}
          />
          <PriceSummaryItem
            title="Save Today "
            titleProps={{
              fontSize: "16px",
              bg: colors.accent,
              p: "2px 4px",

              rounded: "5px",
            }}
            value={"-" + data.currency + data.price.discount}
          />
          <PriceSummaryItem
            title="Total "
            value={data.currency + data.price.total}
          />
        </React.Fragment>

        <Button
          w="100%"
          size="lg"
          mt="36px"
          mb="36px"
          fontFamily="mont"
          bg={colors.accent}
        >
          Enroll Now
        </Button>

        <CourseBenefitItem title="In-depth Learning" />
        <CourseBenefitItem title="Live Classes" />
        <CourseBenefitItem title="Capstone Projects" />
        <CourseBenefitItem title="Certified Agile Training" />
        <CourseBenefitItem title="Launch a job ready portfolio" />
        <CourseBenefitItem title="Additional 12 weeks Mentorship" />
      </Box>
    </CourseInfoComponent>
  );
}

export default BootcampPriceSection;
