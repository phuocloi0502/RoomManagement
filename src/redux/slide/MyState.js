import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const MyState = createSlice({
  name: "MyState",
  initialState: {
    openDrawer: false,
    openResidentModal: false,
    openReservationModal: false,
    openCheckOutModal: false,
    openAddUserModal: false,
    openViewUserModal: false,
    openAddAvatarUserModal: false,
    openCreatePasswordModal: false,
    openEditSliderModal: false,
    currentFloor: "1",
    isLogin: false,
    userIdCurrent: 1,
  },
  reducers: {
    changeUserIdCurrent: (state, action) => {
      state.userIdCurrent = action.payload;
    },
    changeCurrentFloor: (state, action) => {
      state.currentFloor = action.payload;
    },
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
    setOpenAddUserModal: (state, action) => {
      state.openAddUserModal = action.payload;
    },
    setOpenViewUserModal: (state, action) => {
      state.openViewUserModal = action.payload;
    },
    setOpenAddAvatarUserModal: (state, action) => {
      state.openAddAvatarUserModal = action.payload;
    },
    setOpenCreatePasswordModal: (state, action) => {
      state.openCreatePasswordModal = action.payload;
    },
    setEditSliderModal: (state, action) => {
      state.openEditSliderModal = action.payload;
    },
  },
});
export const {
  setOpenDrawer,
  setIsLogin,
  setOpenResidentModal,
  setOpenReservationModal,
  setOpenCheckOutModal,
  setOpenAddUserModal,
  setOpenAddAvatarUserModal,
  setOpenViewUserModal,
  setOpenCreatePasswordModal,
  changeUserIdCurrent,
  setEditSliderModal,
  changeCurrentFloor,
} = MyState.actions;
export default MyState.reducer;
