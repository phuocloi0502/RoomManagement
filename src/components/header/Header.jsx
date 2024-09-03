import React from "react";
import "./header.scss";
import { IoIosMenu } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setOpenDrawer } from "../../redux/slide/myState";
import { Link } from "react-router-dom";
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
        <Link to={"/"}>
          <h2>Room Management</h2>
        </Link>
      </div>
    </div>
  );
};
