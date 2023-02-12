import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  Spacer,
  Tag,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Budget = () => {
  const inputRef = React.useRef();
  const [budget, setBudget] = useState("");

  const { onOpen, isOpen, onClose } = useDisclosure();

  useEffect(() => {
    const result = localStorage.getItem("budget") || 0;
    setBudget(result);
  }, []);

  const handleBudget = () => {
    const value = inputRef.current.value;
    localStorage.setItem("budget", value);
    window.location.reload();

    onClose();
  };

  return (
    <Box p={4} bg="#E2E3E5" rounded={"lg"}>
      <HStack>
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          Budget:${budget}
        </Text>

        <Spacer />
        <Tag colorScheme="teal" fontSize="sm" onClick={onOpen} cursor="pointer">
          Edit
        </Tag>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Budget</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              ref={inputRef}
              placeholder="Enter Your Budget..."
              type={"number"}
            />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" colorScheme="blue" onClick={handleBudget}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Budget;
