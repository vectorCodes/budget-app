import Dexie from "dexie";

export const db = new Dexie("expenses");
db.version(1).stores({
  expense: "++id, name, cost",
});

export const deleteExpense = async (id) => {
  return await db.expense.delete(id);
};
