import { createBrowserRouter } from "react-router-dom";
import { Room } from "../pages/room_page/Room";
import { User } from "../pages/user_page/User";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Room />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);
export default router;
