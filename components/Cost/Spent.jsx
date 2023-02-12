import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";

const Spent = () => {
  const expenses = useLiveQuery(async () => {
    return await db.expense.toArray();
  });

  const totalSpent = expenses?.reduce((acc, expense) => {
    return (acc += expense.cost);
  }, 0);

  return (
    <Box p={4} bg="blue.200" rounded={"lg"}>
      <Text fontSize={"sm"} fontWeight={"semibold"}>
        Spent so far: ${totalSpent}
      </Text>
    </Box>
  );
};

export default Spent;
