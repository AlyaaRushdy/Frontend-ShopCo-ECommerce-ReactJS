import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      state = action.payload;
    },
    isAuth: (state) => {
      return Object.keys(state).length ? true : false;
    },
  },
});

export const { addUser, isAuth } = userSlice.actions;
export default userSlice.reducer;
