import React from "react";
import "./room_management.scss";
import { Link } from "react-router-dom";
import buildingButtonImage from "../../assets/building-svgrepo-com.svg";
export const RoomManagement = (props) => {
  return (
    <div className="room-management-wrap">
      <Link to={"/apache"}>
        <div className="button-building-toggle">
          <img src={buildingButtonImage} alt="" />
          <h5>APACHE</h5>
        </div>
      </Link>
      <Link to={"/aph2"}>
        <div className="button-building-toggle">
          <img src={buildingButtonImage} alt="" />
          <h5>APH2</h5>
        </div>
      </Link>
    </div>
  );
};
