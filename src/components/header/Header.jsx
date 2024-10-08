import React, { useState } from "react";
import "./header.scss";
import { IoIosMenu } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setOpenDrawer } from "../../redux/slide/MyState";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
const { Search } = Input;
export const Header = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(setOpenDrawer(true));
  };
  const nav = useNavigate();
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
      <div className="search-area">
        <Search
          placeholder="Tìm kiếm tên phòng hoặc tên người đang ở"
          allowClear
          value={searchTerm}
          // onSearch={handleSearch}
          // onChange={(e) => {
          //   setSearchTerm(e.target.value);
          //   setResultProduct([]);
          // }}
        />
      </div>
      <div className="logout-btn-toggle">
        <Button
          onClick={() => {
            nav("/login");
          }}
        >
          {" "}
          Log in
        </Button>
      </div>
    </div>
  );
};
