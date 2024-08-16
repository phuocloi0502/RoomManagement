import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const MyState = createSlice({
  name: "MyState",
  initialState: {
    openDrawer: false,
    isLogin: false,
  },
  reducers: {
    setOpenDrawer: (state, action) => {
      state.openDrawer = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});
export const { setOpenDrawer, setIsLogin } = MyState.actions;
export default MyState.reducer;
