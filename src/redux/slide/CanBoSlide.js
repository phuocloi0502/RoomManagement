import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import canBoService from "../../services/canBoService";

//get by room Id
export const getCanBoById = createAsyncThunk("getCanBoById", async (id) => {
  try {
    const data = (await canBoService.getCanBoById(id)).data;
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Có lỗi xảy ra");
  }
});

export const CanBoSlide = createSlice({
  name: "CanBoSlide",
  initialState: {
    canBoDataById: null,
    loading: false,
  },
  reducers: {
    changeValueDemo: (state, action) => {
      state.demo = action.payload;
    },
  },
  extraReducers: (builder) => {
    // get can bo by  id
    builder.addCase(getCanBoById.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getCanBoById.fulfilled, (state, action) => {
      state.loading = false;

      state.canBoDataById = action.payload;
    });
    builder.addCase(getCanBoById.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { changeValueDemo } = CanBoSlide.actions;
export default CanBoSlide.reducer;
