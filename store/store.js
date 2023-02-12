import { configureStore } from "@reduxjs/toolkit";
import BudgetReducer from "../features/addBudget";
import ExpenseReducer from "../features/addExpense";

export const store = configureStore({
  reducer: {
    budget: BudgetReducer,
    expense: ExpenseReducer,
  },
});
