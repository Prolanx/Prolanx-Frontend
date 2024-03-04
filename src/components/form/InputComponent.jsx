import React from "react";
import { Box, FormControl, FormErrorMessage, Input, FormLabel, Text } from "@chakra-ui/react";

import { Field, useField } from "formik";

function InputComponent({ label, errorColor, ...props }) {
  const [field, meta] = useField(props);

  return (
    <FormControl mb={4} isInvalid={meta.error && meta.touched}>
      {label && (
        <Box mb={2}>
          <FormLabel fontWeight="500">{label}</FormLabel>
        </Box>
      )}
      <Field as={Input} bg="white"  fontFamily="mont"  {...field} {...props} />
      {meta.error && (
        <Text color={errorColor} mt={2}>{meta.error}</Text>
      )}
      {/* <FormErrorMessage>{meta.error}</FormErrorMessage> */}
    </FormControl>
  );
}

export default InputComponent;
