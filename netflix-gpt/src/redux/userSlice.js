import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: null,
  reducers: {
    updateUser: (state, action) => {
      return action.payload;
    },

    removeUser: (state) => {
      return null;
    },
  },
});

export const { updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
