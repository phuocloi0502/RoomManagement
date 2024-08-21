import React from "react";
import "./room.scss";
export const Room = (props) => {
  const handleOnClick = () => {
    console.log("clicked");
  };
  return (
    <div className="room-area" onClick={handleOnClick}>
      {props.roomName}
    </div>
  );
};
