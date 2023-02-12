import React, { useEffect, useState } from "react";
import { Heading, Input, Stack } from "@chakra-ui/react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";
import ShowExpenseUI from "./ShowExpenseUI";

const Expenses = () => {
  const expenses = useLiveQuery(async () => {
    return await db.expense.toArray();
  });

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (expenses) {
      setFilteredItems(expenses);
    }
  }, [expenses]);

  return (
    <Stack spacing={3}>
      <Heading size={"lg"}>Expenses</Heading>
      <Input
        type={"search"}
        placeholder="Type to search.."
        onChange={(e) => {
          const q = e.target.value;
          if (q) {
            setFilteredItems(
              expenses.filter((item) => {
                return item.name.toLowerCase().includes(q.toLowerCase());
              })
            );
          } else {
            setFilteredItems(expenses);
          }
        }}
      />
      <Stack spacing={3}>
        {filteredItems?.map((expense) => {
          return <ShowExpenseUI expense={expense} key={expense.id} />;
        })}
      </Stack>
    </Stack>
  );
};

export default Expenses;
