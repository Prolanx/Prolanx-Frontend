import React, { useEffect } from "react";
import {
  Modal as ChakraModal,
  ModalOverlay as ChakraModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function Modal({ isOverlayClose, isHideCloseButton, size, isOpen, reset, children }) {
  // const { isOverlayClose, isHideCloseButton, size, isCentered } = config;

  return (
    <ChakraModal
      size={size || "md"} // xs sm md lg xl full
      isOpen={isOpen}
      onClose={reset}
      blockScrollOnMount={true} /// blocks background scrolling
      scrollBehavior="outside" // inside
      isCentered={true}
      closeOnOverlayClick={isOverlayClose}
      motionPreset="slideInBottom" //scale slideInBotttom
    >
      <ChakraModalOverlay backdropFilter="blur(5px) hue-rotate(10deg)" />

      <ModalContent>
        <ModalHeader mb={3}>
          {!isHideCloseButton && <ModalCloseButton onClick={reset} />}
        </ModalHeader>

        <ModalBody>{children}</ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
}

export default Modal;
