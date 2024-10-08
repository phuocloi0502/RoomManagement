import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import userService from "../../services/userService";

// get all
export const getAllUser = createAsyncThunk("get all user", async () => {
  const data = (await userService.getAll()).data;
  return data;
});
//get by Id
export const getUserById = createAsyncThunk("getUserById", async (id) => {
  const data = (await userService.getUserById(id)).data;
  return data;
});

// create user
export const createUser = createAsyncThunk(
  "create user",
  async (body, thunkAPI) => {
    const data = (await userService.createUser(body)).data;
    setTimeout(() => {
      thunkAPI.dispatch(getAllUser());
    }, 1500);

    return data;
  }
);

// update user name
export const updateUser = createAsyncThunk(
  "update user",
  async ({ id, body }, thunkAPI) => {
    try {
      const response = await userService.updateUserName(id, body);
      thunkAPI.dispatch(getUserById(id));
      thunkAPI.dispatch(getAllUser());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Có lỗi xảy ra");
    }
  }
);
// update user password
export const updatePassword = createAsyncThunk(
  "update password",
  async ({ id, body }, thunkAPI) => {
    try {
      const response = await userService.updatePassword(id, body);
      thunkAPI.dispatch(getUserById(id));
      thunkAPI.dispatch(getAllUser());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Có lỗi xảy ra");
    }
  }
);

// delete user
export const deleteUser = createAsyncThunk(
  "delete user",
  async (id, thunkAPI) => {
    const dataDelete = (await userService.deleteUser(id)).data;
    thunkAPI.dispatch(getAllUser());
    return dataDelete;
  }
);

export const UserSlide = createSlice({
  name: "UserSlide",
  initialState: {
    userData: [],
    userByIdData: null,
    loading: false,
  },
  reducers: {
    changeValueDemo: (state, action) => {
      state.demo = action.payload;
    },
  },
  extraReducers: (builder) => {
    //get all user
    builder.addCase(getAllUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.loading = false;
    });

    // get user by id
    builder.addCase(getUserById.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.userByIdData = action.payload;
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.loading = false;
    });

    // create user
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      //  state.userByIdData = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
    });

    // delete user
    builder.addCase(deleteUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      //  state.userByIdData = action.payload;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
    });

    // update user
    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      //  state.userByIdData = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
    });

    // update password
    builder.addCase(updatePassword.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.loading = false;
      //  state.userByIdData = action.payload;
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { changeValueDemo } = UserSlide.actions;
export default UserSlide.reducer;
