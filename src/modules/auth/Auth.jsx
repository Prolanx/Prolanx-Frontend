import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React from "react";
import FormComponent from "../../components/form/FormComponent";
import InputComponent from "../../components/form/InputComponent";
import { useLogin } from "./hooks/useLogin";
import ModalNotify from "../../components/overlay/Modal-Notify";
import Alert from "../../components/alert/Alert";
import useCustomRouter from "../../hooks/useCustomRouter";
import useResponsive from "../../hooks/useResponsive";
import Header from "../../components/header/Header";
import SectionWrapper from "../../components/other/SectionWrapper";

function Auth() {
  const loginHook = useLogin();
  const { apiState } = loginHook;

  const media = useResponsive();

  return (
    <SectionWrapper>
      <Center w="100%" h="100vh">
        <Box w={media.isMobile ? "100%" : "32%"}>
          <Center>
            <Heading fontSize="20px" fontWeight="600" mb={5}>
              Login
            </Heading>
          </Center>

          {apiState.status == "error" && (
            <Alert
              title="Error"
              message={apiState.message}
              status={apiState.status}
            />
          )}
          <FormComponent
            initialValues={loginHook.formModel}
            schema={loginHook.schema}
            resetRef={loginHook.formRef}
            handleSubmit={(value) => loginHook.handleSubmit(value)}
          >
            <InputComponent name="email" label="Email" />
            <InputComponent name="password" label="Password" />
            <Button mt={4} type="submit" bg="purple.400" color="white" w="100%">
              Login
            </Button>
          </FormComponent>
        </Box>

        <ModalNotify status={apiState.status} message={apiState.message} />
      </Center>
    </SectionWrapper>
  );
}

export default Auth;
