import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    value: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  reducers: {
    userLogInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userLogInfo } = userSlice.actions;

export default userSlice.reducer;
