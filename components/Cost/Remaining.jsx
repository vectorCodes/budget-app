import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";

const Remaining = () => {
  const [budget, setBudget] = useState("");

  useEffect(() => {
    const result = localStorage.getItem("budget");
    setBudget(result);
  }, [budget]);

  const expenses = useLiveQuery(async () => {
    return await db.expense.toArray();
  });

  const totalExpenses = expenses?.reduce((acc, curr) => {
    return (acc += curr.cost);
  }, 0);

  return (
    <Box p={4} bg="green.200" rounded={"lg"}>
      <Text fontSize={"sm"} fontWeight="semibold">
        Remaining: ${budget - totalExpenses}
      </Text>
    </Box>
  );
};

export default Remaining;
