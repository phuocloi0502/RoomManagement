import React from "react";
import logoWeb from "../../assets/logoweb.svg";
import "./navigate.scss";
import { FaHome, FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Menu } from "antd";
const items = [
  {
    key: "room",
    label: "Phòng",
    icon: <FaHome />,
  },
  {
    key: "user",
    label: "Nhân sự",
    icon: <FaUser />,
  },
  {
    key: "sign_out",
    label: "Đăng xuất",
    icon: <CiLogout />,
  },
];
// const itemsMobile = [
//   {
//     key: "chat",
//     icon: (
//       <Badge count={599} className="custom-badge">
//         <IoChatbubblesOutline />
//       </Badge>
//     ),
//   },
//   {
//     key: "friends",

//     icon: (
//       <Badge count={599} className="custom-badge">
//         <FaUserFriends />
//       </Badge>
//     ),
//   },
//   {
//     key: "my_page",
//     icon: <FaRegUserCircle />,
//   },
//   {
//     key: "sign_out",
//     icon: <CiLogout />,
//   },
// ];
export const Navigate = (props) => {
  const defaultSelectedKey = "room";
  return (
    <div className="navigate-wrap">
      <div className="logo-area">
        <img src={logoWeb} alt="" srcset="" />
      </div>
      <div className="navigater">
        <Menu
          // onClick={onClick}
          items={items}
          defaultSelectedKeys={[defaultSelectedKey]}
          defaultOpenKeys={[defaultSelectedKey]}
          mode="inline"
        />
      </div>
    </div>
  );
};
