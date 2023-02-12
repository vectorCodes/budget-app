import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  cost: "",
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      (state.name = action.payload.name), (state.cost = action.payload.cost);
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
