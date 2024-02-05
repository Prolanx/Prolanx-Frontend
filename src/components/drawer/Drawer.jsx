import { Drawer as ChakraDrawer, DrawerBody } from "@chakra-ui/react";
import { DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { DrawerHeader, DrawerOverlay, DrawerFooter } from "@chakra-ui/react";

function Drawer({ title, size, isShowFooter, children, controls, bodyPadding }) {
  const { isOpen, onOpen, onClose } = controls;

  return (
    <ChakraDrawer isOpen={isOpen} placement="left" onClose={onClose} size={size ||  "lg"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{title}</DrawerHeader>

        <DrawerBody px="15px">{children}</DrawerBody>

        {isShowFooter && (
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </ChakraDrawer>
  );
}

export default Drawer;
