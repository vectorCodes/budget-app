import React from "react";
import {
  Box,
  Button,
  Heading,
  Stack,
  SimpleGrid,
  Text,
  Input,
} from "@chakra-ui/react";
import { db } from "@/db";

const AddExpense = () => {
  const [name, setName] = React.useState("");
  const [cost, setCost] = React.useState("");

  const handleAdd = async () => {
    try {
      const expenses = await db.expense.add({
        name,
        cost: Number(cost),
      });
      setName("");
      setCost("");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Stack mt={4}>
      <Heading size={"lg"}>Add Expense</Heading>
      <SimpleGrid columns={2} spacing={2}>
        <Box>
          <Text>Name</Text>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Box>
        <Box>
          <Text>Cost</Text>
          <Input value={cost} onChange={(e) => setCost(e.target.value)} />
        </Box>
      </SimpleGrid>
      <Box>
        <Button colorScheme={"blue"} onClick={handleAdd}>
          Save
        </Button>
      </Box>
    </Stack>
  );
};

export default AddExpense;
