import { Box, Flex, Stack } from "@chakra-ui/react";
import Budget from "@/components/Cost/Budget";
import Remaining from "@/components/Cost/Remaining";
import Spent from "@/components/Cost/Spent";
import Expenses from "@/components/Expenses/Expenses";
import Header from "@/components/Header";
import AddExpense from "@/components/AddExpense/AddExpense";

export default function Home() {
  return (
    <Box maxW={"4xl"} m="0 auto" h="100 vh">
      <Box
        mt={{
          base: 4,
          md: 0,
        }}
      >
        <Header />
      </Box>
      <Flex
        gap={{
          base: 4,
          md: 8,
        }}
        p={{
          base: 4,
          md: 0,
        }}
        mt={{
          base: 0,
          md: 4,
        }}
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Budget />
        <Remaining />
        <Spent />
      </Flex>
      <Stack
        mt={{
          base: 2,
          md: 6,
        }}
        spacing={4}
        p={{
          base: 3,
          md: 0,
        }}
      >
        <Expenses />
        <AddExpense />
      </Stack>
    </Box>
  );
}
