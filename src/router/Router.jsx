import { createBrowserRouter } from "react-router-dom";
import { User } from "../pages/user_page/User";

import App from "../App";
import { RoomManagement } from "../pages/room_management/RoomManagement";
import { APH2 } from "../pages/aph2_building/APH2";
import { RoomDetail } from "../pages/room_detail/RoomDetail";
import { APH1 } from "../pages/aph1_building/APH1";
import { LoginAdmin } from "../pages/LoginAdmin/LoginAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RoomManagement />,
        children: [],
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/aph1",
        element: <APH1 />,
      },
      {
        path: "/aph2",
        element: <APH2 />,
      },
      {
        path: "/room/:roomId",
        element: <RoomDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginAdmin />,
  },
]);
export default router;
