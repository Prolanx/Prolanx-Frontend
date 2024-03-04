import React from "react";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { Field, useField } from "formik";

function TextAreaComponent({ label, errorColor, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl mb={4} isInvalid={meta.error && meta.touched}>
      {label && (
        <Box mb={2}>
          <FormLabel fontWeight="500">{label}</FormLabel>
        </Box>
      )}
      <Field
        as={Textarea}
        bg="white"
        fontFamily="mont"
        minH="120px"
        maxH="120px"
        {...field}
        {...props}
      />
    
      {meta.error && (
        <Text color={errorColor} mt={2}>
          {meta.error}
        </Text>
      )}
    </FormControl>
  );
}

export default TextAreaComponent;
