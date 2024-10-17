import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setValueUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setValueUser } = authSlice.actions;

export default authSlice.reducer;