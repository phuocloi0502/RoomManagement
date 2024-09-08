import { configureStore } from "@reduxjs/toolkit";
import MyState from "../slide/MyState";

export default configureStore({
  reducer: {
    MyState: MyState,
  },
});
