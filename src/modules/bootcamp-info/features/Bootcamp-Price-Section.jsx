import React, { useEffect, useState } from "react";
import useResponsive from "../../../hooks/useResponsive";
import PriceSummaryItem from "../component/Price-Summary-Item";
import CourseBenefitItem from "../component/Course-Benefit-Item";
import { colors } from "../../../constants/design";
import CourseInfoComponent from "../component/Course-Info-Component";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

function BootcampPriceSection({ data, price, bootcamp, isLocal, showAlert }) {
  const currency = {
    naira: "\u20A6",
    dollar: "\u0024",
  };

  console.log("price ", price);
  // if(!price?.dollar?.fixed) return

  const dollar = price?.dollar;
  const naira = price?.naira;
  const media = useResponsive();
  const border = "1px solid " + colors.primary + "90";
  console.log("price data", price);

  const currentItem = {
    fixed: null,
    plan: null,
    discount: null,
    currency: null,
    save: null,
  };
  const [current, setCurrent] = useState({ ...currentItem });

  const handleCurrent = () => {
    let item = { ...currentItem };
    console.log("bootcamp state ", bootcamp);
    const price = bootcamp?.price;
    console.log("price state ", price);
    if (isLocal) {
      // set the local price data

      item = {
        fixed: price?.naira?.fixed,
        plan: price?.naira?.plan,
        discount: price?.naira?.discount,
        currency: currency.naira,
        save: price?.naira.save,
      };
    } else {
      // set the foreign price data
      item = {
        fixed: price?.dollar?.fixed,
        plan: price?.dollar?.plan,
        discount: dollar?.discount,
        currency: currency.dollar,
        save: price?.dollar.save,
      };
    }

    console.log("current item state ", item);
    setCurrent(item);
  };

  useEffect(() => {
    console.log("current changed ", current);
  }, [current]);
  useEffect(() => {
    handleCurrent();
  }, [bootcamp]);

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
        <Flex
          fontFamily="mont"
          alignItems="center"
          mb="36px"
          fontSize={media.isMobile ? "12px" : "16px"}
        >
          <Flex
            border={border}
            p={media.isMobile ? "10px 8px" : "10px 16px"}
            cursor="pointer"
            onClick={() => {
              data.togglePayment(data.priceType.paynow);
            }}
          >
            <Text>Pay now</Text>
            <Text
              ms="10px"
              fontFamily="mont"
              h="fit-content"
              textAlign="center"
              bg={colors.accent}
              px="2px"
              rounded="md"
            >
              save 20%
            </Text>
          </Flex>

          <Text
            border={border}
            p={media.isMobile ? "10px 8px" : "10px 16px"}
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
              Pay today and save {current.currency} {current.save}
            </Text>
          )}

          <Flex fontSize="28px" fontFamily="mont" mb="36px" alignItems="center">
            {data.isPayNow ? (
              <React.Fragment>
                <Text textDecor="line-through" me={5}>
                  {current.currency} {current.fixed}
                </Text>
                <Text>
                  {current.currency} {current.discount}
                </Text>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Text>
                  {current.currency} {current.fixed}
                </Text>
              </React.Fragment>
            )}
          </Flex>
        </Box>

        {/* Price Summary */}
        <React.Fragment>
          <PriceSummaryItem
            title="12 weeks Bootcamp "
            value={current.currency + current.fixed}
          />
       
          {data.isPayNow ? (
            <PriceSummaryItem
              title="Save Today "
              titleProps={{
                fontSize: "16px",
                bg: colors.accent,
                p: "2px 4px",

                rounded: "5px",
              }}
              value={"-" + current.currency + current.save}
            />
          ) : (
            <PriceSummaryItem
              title="Save Today "
              titleProps={{
                fontSize: "16px",
                bg: colors.accent,
                p: "2px 4px",

                rounded: "5px",
              }}
              value={"-" + current.currency + "0"}
            />
          )}
          {data.isPayNow ? (
            <PriceSummaryItem
              title="Total "
              value={current.currency + current.discount}
            />
          ) : (
            <PriceSummaryItem
              title="Total "
              value={current.currency + current.fixed}
            />
          )}
        </React.Fragment>

        <Button
          w="100%"
          size="lg"
          mt="36px"
          mb="36px"
          fontFamily="mont"
          bg={colors.accent}
          onClick={showAlert}
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
