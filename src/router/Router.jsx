import { createBrowserRouter } from "react-router-dom";
import { RoomPage } from "../pages/room_page/RoomPage";
import { User } from "../pages/user_page/User";

import App from "../App";
import { RoomManagement } from "../pages/room_management/RoomManagement";
import { ApacheBuilding } from "../pages/apache_building/ApacheBuilding";
import { APH2 } from "../pages/aph2_building/APH2";
import { RoomDetail } from "../pages/room_detail/RoomDetail";

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
        path: "/apache",
        element: <ApacheBuilding />,
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
]);
export default router;
