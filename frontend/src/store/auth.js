import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogedIn: false, role: "user" },
  reducers: {
    login(state) {
      state.isLogedIn = true;
    },
    logout(state) {
      state.isLogedIn = false;
    },
    changeRole(state, action) {
      const role = action.payload;
      state.role = role;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
