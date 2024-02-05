import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/footer/Footer";
import FormComponent from "../../components/form/FormComponent";
import InputComponent from "../../components/form/InputComponent";
import TextareaComponent from "../../components/form/TextAreaComponent";
import { useSendEmail } from "./hooks/useSendEmail";
import Header from "../../components/header/Header";
import ModalNotify from "../../components/overlay/Modal-Notify";
import { FiSend } from "react-icons/fi";
import { colors } from "../../constants/design";
import useResponsive from "../../hooks/useResponsive";
function Email() {
  const emailHook = useSendEmail();
  const { apiState } = emailHook;
  const media = useResponsive();

  return (
    <Box overflow="hidden">
      <Box bg={colors.primaryGrad} w="100%" pos="relative ">
        <Header />
      </Box>

      <Center pt="50px">
        <Heading fontFamily="Nexa" fontSize="20px" fontWeight="600" mb={5}>
          Send Mail
        </Heading>
      </Center>
      <Center w="100%" pb="50px">
        <Box w={!media.isDesktop ? "95%" : "50%"}>
          <FormComponent
            initialValues={emailHook.formModel}
            schema={emailHook.schema}
            resetRef={emailHook.formRef}
            handleSubmit={(value) => emailHook.handleSubmit(value)}
          >
            <InputComponent
              label="Recepient Email"
              name="email"
              placeholder="Enter email"
            />
            <InputComponent
              label="Recepient Name"
              name="name"
              placeholder="Enter name (Optional)"
            />
            <InputComponent
              label="Subject"
              name="subject"
              placeholder="Enter subject"
            />

            <TextareaComponent
              h="300px"
              label="Message"
              name="message"
              placeholder="Enter message"
              minH="200px"
            />

            <Button
              type="submit"
              rightIcon={<FiSend />}
              color="white"
              bg={colors.black}
            >
              Send
            </Button>
          </FormComponent>
        </Box>
      </Center>

      <ModalNotify status={apiState.status} message={apiState.message} />
    </Box>
  );
}

export default Email;
