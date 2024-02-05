import React from "react";
import { Box, FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react";

import { Field, useField } from "formik";

function TextareaComponent({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl mb={3} isInvalid={meta.error && meta.touched}>
      {label && (
        <Box mb={2}>
          <FormLabel fontWeight="500">{label}</FormLabel>
        </Box>
      )}
      <Field as={Textarea} bg="white" minH="120px" maxH="120px" {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

export default TextareaComponent;
