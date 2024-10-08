import React from "react";
import "./room_management.scss";
import { Link } from "react-router-dom";
import buildingButtonImage from "../../assets/building-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { changeCurrentFloor } from "../../redux/slide/MyState";
export const RoomManagement = (props) => {
  const dispatch = useDispatch();
  const handleAPH1 = () => {
    ("clicked aph1");

    dispatch(changeCurrentFloor("1"));
  };
  const handleAPH2 = () => {
    ("clicked");

    dispatch(changeCurrentFloor("6"));
  };

  return (
    <div className="room-management-wrap">
      <Link to={"/aph1"}>
        <div className="button-building-toggle" onClick={() => handleAPH1()}>
          <img src={buildingButtonImage} alt="" />
          <h5>APH1</h5>
        </div>
      </Link>
      <Link to={"/aph2"}>
        <div className="button-building-toggle" onClick={() => handleAPH2()}>
          <img src={buildingButtonImage} alt="" />
          <h5>APH2</h5>
        </div>
      </Link>
    </div>
  );
};
