import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "add",
  initialState: {
    a: 0,
    b: 0,
    sum: 0,
  },
  reducers: {
    add: (
      state,
      action: PayloadAction<{ a: number; b: number }>
    ) => {
      state.a = action.payload.a;
      state.b = action.payload.b;
      state.sum = action.payload.a + action.payload.b;
    },
  },
});

export const { add } = addSlice.actions;
export default addSlice.reducer;