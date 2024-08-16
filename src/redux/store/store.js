import { configureStore } from "@reduxjs/toolkit";
import MyState from "../slide/myState";

export default configureStore({
  reducer: {
    MyState: MyState,
  },
});
