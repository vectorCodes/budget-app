import React from "react";
import { Box, HStack, Heading, Text, Spacer } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { db, deleteExpense } from "@/db";

const ShowExpenseUI = ({ expense }) => {
  return (
    <HStack
      borderWidth={"1px"}
      borderColor={"gray.400"}
      borderRadius={"5px"}
      p={4}
    >
      <Heading size={"md"} fontWeight="500">
        {expense.name}
      </Heading>
      <Spacer />
      <Text>{expense.cost}</Text>
      <Box
        cursor={"pointer"}
        onClick={() => {
          deleteExpense(expense.id);
        }}
      >
        <FiX />
      </Box>
    </HStack>
  );
};

export default ShowExpenseUI;
