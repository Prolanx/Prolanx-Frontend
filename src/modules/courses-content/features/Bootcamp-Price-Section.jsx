import React from "react";
import useResponsive from "../../../hooks/useResponsive";
import PriceSummaryItem from "../component/Price-Summary-Item";
import CourseBenefitItem from "../component/Course-Benefit-Item";
import { colors } from "../../../constants/design";
import CourseInfoComponent from "../component/Course-Info-Component";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

function BootcampPriceSection({ data }) {
  const media = useResponsive();
  return (
    <CourseInfoComponent
      title="Pricing"
      subTitle="Simple and Flexible Payment plan"
      message="Our programs provide comprehensive and top-quality tech education at an affordable price, with flexible and convenient payment options to enhance your learning journey"
    >
      <Box
        w={media.isDesktop  ?"400px" : "100%"}
        p="30px 20px"
        shadow="md"
        rounded="md"
        border="1px solid #00000050"
      >
        <Flex fontFamily="mont" alignItems="center" mb="36px">
          <Flex
            border="1px solid #00000050"
            p="10px 16px"
            cursor="pointer"
            onClick={() => {
              data.togglePayment(data.priceType.paynow);
            }}
          >
            <Text>Pay now</Text>
            <Button size="xs" ms="20px">
              save
            </Button>
          </Flex>

          <Text
            border="1px solid #00000050"
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
            <Text mb="36px" fontWeight="600">
              Pay now and save {data.currency} {data.price.discount}
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
            value={"-" + data.currency + data.price.discount}
          />
          <PriceSummaryItem
            title="Total "
            value={data.currency + data.price.total}
          />
        </React.Fragment>

        <Button w="100%" size="lg" mt="36px" mb="36px" bg={colors.accent3}>
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
