import React, { useState, useEffect } from "react";
import logoWeb from "../../assets/logoweb.svg";
import "./navigate.scss";
import { FaHome, FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Drawer, Menu, message } from "antd";
import { setOpenDrawer } from "../../redux/slide/myState";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const items = [
  {
    key: "",
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
  //init
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openDrawer = useSelector((state) => state.MyState.openDrawer);
  const defaultSelectedKey = "";
  //handle
  const onClick = (e) => {
    if (e.key == "sign_out") {
      message.info("Đã đăng xuất !");
    } else {
      navigate(e.key);
    }
  };
  // useEffect(() => {
  //   onClick({ key: defaultSelectedKey });
  // }, []);
  const handleClose = () => {
    dispatch(setOpenDrawer(false));
  };

  return (
    <Drawer
      className="navigate-wrap"
      placement="left"
      open={openDrawer}
      closable={false}
      onClose={handleClose}
      width={276}
      title={
        <div>
          <img src={logoWeb} srcSet={logoWeb} alt="" />
          <div className="user-infomation-area">
            <strong>Tài khoản: </strong>
            <span>Vo Phuoc Loi</span>
          </div>
        </div>
      }
    >
      <Menu
        onClick={onClick}
        items={items}
        defaultSelectedKeys={[defaultSelectedKey]}
        defaultOpenKeys={[defaultSelectedKey]}
        mode="inline"
        className="my-menu"
      />
    </Drawer>
  );
};
