import { configureStore } from "@reduxjs/toolkit";
import MyState from "../slide/MyState";
import RoomSlide from "../slide/RoomSlide";
import UserSlide from "../slide/UserSlide";
import CanBoSlide from "../slide/CanBoSlide";

export default configureStore({
  reducer: {
    MyState: MyState,
    RoomSlide: RoomSlide,
    UserSlide: UserSlide,
    CanBoSlide: CanBoSlide,
  },
});
