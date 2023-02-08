import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    workshopList: [],
  },
  reducers: {
    itemsByApi: (state, action) => {
      state.workshopList = action.payload;
    },
  },
});

export const { itemsByApi } = listSlice.actions;
export default listSlice.reducer;
