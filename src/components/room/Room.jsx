import React from "react";
import "./room.scss";
import { useMatch, useNavigate } from "react-router-dom";
export const Room = (props) => {
  const nav = useNavigate();
  const handleOnClick = () => {
    console.log("clicked");
    nav(`/room/${props.roomName}`);
  };
  return (
    <div className="room-area" onClick={handleOnClick}>
      {props.roomName}
    </div>
  );
};
