import { createBrowserRouter } from "react-router-dom";
import { RoomPage } from "../pages/room_page/RoomPage";
import { User } from "../pages/user_page/User";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RoomPage />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);
export default router;
