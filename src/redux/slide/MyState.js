import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const MyState = createSlice({
  name: "MyState",
  initialState: {
    openDrawer: false,
    openResidentModal: false,
    openReservationModal: false,
    openCheckOutModal: false,
    isLogin: false,
  },
  reducers: {
    setOpenDrawer: (state, action) => {
      state.openDrawer = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setOpenResidentModal: (state, action) => {
      state.openResidentModal = action.payload;
    },
    setOpenReservationModal: (state, action) => {
      state.openReservationModal = action.payload;
    },
    setOpenCheckOutModal: (state, action) => {
      state.openCheckOutModal = action.payload;
    },
  },
});
export const {
  setOpenDrawer,
  setIsLogin,
  setOpenResidentModal,
  setOpenReservationModal,
  setOpenCheckOutModal,
} = MyState.actions;
export default MyState.reducer;
