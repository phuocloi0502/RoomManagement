import React from "react";
import "./header.scss";
import { IoIosMenu } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setOpenDrawer } from "../../redux/slide/myState";
export const Header = (props) => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(setOpenDrawer(true));
  };
  return (
    <div className="header-area">
      <div className="menu-toggle" onClick={handleToggleMenu}>
        <IoIosMenu />
      </div>
      <div className="header-title">
        <h2>Room Management</h2>
      </div>
      <div className="user-infomation-area">
        <strong>Tài khoản: </strong>
        <span>Vo Phuoc Loi</span>
      </div>
    </div>
  );
};
