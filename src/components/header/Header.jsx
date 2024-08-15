import React from "react";
import "./header.scss";
export const Header = (props) => {
  return (
    <div className="header-area">
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
