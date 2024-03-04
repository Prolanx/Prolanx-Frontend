import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import useResponsive from "../../hooks/useResponsive";
import InputComponent from "../../components/form/InputComponent";
import FormComponent from "../../components/form/FormComponent";
import { useSendContactEmail } from "./hooks/useSendContactEmail";
import TextAreaComponent from "../../components/form/TextareaComponent";
import ModalNotify from "../../components/overlay/Modal-Notify";

function ContactFields() {
  const media = useResponsive();
  const contactProps = useSendContactEmail();
  const apiState = contactProps.apiState;

  return (
    <Box>
      <ModalNotify status={apiState.status} message={apiState.message} />

      <FormComponent
        initialValues={contactProps.formModel}
        schema={contactProps.schema}
        resetRef={contactProps.formRef}
        handleSubmit={(value) => contactProps.handleSubmit(value)}
      >
        <InputComponent
          name="name"
          //   mb="36px"
          bg="white"
          placeholder="Enter name"
          h="56px"
          fontSize="14px"
          size="xs"
          rounded="4px"
          py="15px"
          px={15}
        />
        <InputComponent
          name="email"
          //   mb="36px"
          bg="white"
          placeholder="Enter email"
          h="56px"
          fontSize="14px"
          size="xs"
          rounded="4px"
          py="15px"
          px={15}
        />

        <TextAreaComponent
          bg="white"
          placeholder="Message"
          name="message"
          height="120px"
          fontSize="14px"
          rounded="4px"
          py="15px"
        />

        <Button
          minH={!media.isMobile && "56px"}
          w="100%"
          fontSize={media.isMobile ? "14px" : media.isTablet ? "20px" : "20px"}
          bg={colors.accent}
          rounded="4px"
          fontFamily="nexa"
          color={colors.black}
          type="submit"
        >
          Submit
        </Button>
      </FormComponent>
    </Box>
  );
}

export default ContactFields;
