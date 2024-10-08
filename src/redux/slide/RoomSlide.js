import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomService from "../../services/roomService";
import canBoService from "../../services/canBoService";

// get all
export const getAll = createAsyncThunk("get all room", async () => {
  try {
    const data = (await roomService.getAll()).data;
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Có lỗi xảy ra");
  }
});

//get by room Id
export const getRoomById = createAsyncThunk("getRoomById", async (id) => {
  try {
    const data = (await roomService.getRoomById(id)).data;
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Có lỗi xảy ra");
  }
});
//get by Floor Id
export const getRoomByFLoorId = createAsyncThunk(
  "getRoomByFLoorId",
  async (id) => {
    // (data);
    try {
      const data = (await roomService.getRoomByFLoorId(id)).data.content;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Có lỗi xảy ra");
    }
  }
);
// check in
export const checkIn = createAsyncThunk(
  "checkIn",
  async ({ roomId, body }, thunkAPI) => {
    const data = (await canBoService.checkIn(roomId, body)).data.canBo;

    return data;
  }
);

// // create
// export const createUser = createAsyncThunk("create", async (body, thunkAPI) => {
//   const data = (await axios.post(urlApi, body)).data;
//   (data.id, "created data");
//   thunkAPI.dispatch(getAll());
//   return data;
// });

// // update
// export const updateUser = createAsyncThunk("update", async (body, thunkAPI) => {
//   const data = (await userService.update(body.id, body)).data;
//   thunkAPI.dispatch(getAll());
//   return data;
// });

// // delete
// export const deleteById = createAsyncThunk("delete", async (id, thunkAPI) => {
//   const dataDelete = (await userService.delete(id)).data;
//   thunkAPI.dispatch(getAll());
//   return dataDelete;
// });

export const RoomSlide = createSlice({
  name: "RoomSlide",
  initialState: {
    roomData: [],
    roomDataByFloorId: [],
    roomDataById: [],
    createdData: null,
    canBoIdCurrent: null,
    loading: false,
  },
  reducers: {
    changeValueDemo: (state, action) => {
      state.demo = action.payload;
    },
  },
  extraReducers: (builder) => {
    //get all room
    builder.addCase(getAll.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.roomData = action.payload;
    });
    builder.addCase(getAll.rejected, (state, action) => {
      state.loading = false;
    });

    // get room by floor id
    builder.addCase(getRoomByFLoorId.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getRoomByFLoorId.fulfilled, (state, action) => {
      state.loading = false;
      state.roomDataByFloorId = action.payload;
    });
    builder.addCase(getRoomByFLoorId.rejected, (state, action) => {
      state.loading = false;
    });

    // get room by  id
    builder.addCase(getRoomById.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getRoomById.fulfilled, (state, action) => {
      state.loading = false;
      state.roomDataById = action.payload;
      state.canBoIdCurrent = action.payload.canBoId;
    });
    builder.addCase(getRoomById.rejected, (state, action) => {
      state.loading = false;
    });
    // check in
    builder.addCase(checkIn.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(checkIn.fulfilled, (state, action) => {
      state.loading = false;

      state.createdData = action.payload;
    });
    builder.addCase(checkIn.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { changeValueDemo } = RoomSlide.actions;
export default RoomSlide.reducer;
