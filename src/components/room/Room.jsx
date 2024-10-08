import React from "react";
import "./room.scss";
import { useMatch, useNavigate } from "react-router-dom";
import { Flex } from "antd";
export const Room = ({ roomInfo, className, currentFloor }) => {
  const roomName = roomInfo?.tenPhong;
  let tenCanBo = roomInfo?.tenCanBo;
  const nav = useNavigate();
  const handleOnClick = () => {
    nav(`/room/${roomInfo?.id}`);
  };
  const colorRoom = roomInfo?.tenCanBo == null ? "VACANT" : "OCCUPIED";
  console.log(tenCanBo?.length);
  if (tenCanBo?.length > 20) {
    tenCanBo = tenCanBo.substr(0, 15) + "...";
  }

  return (
    <div
      className={`room-area ${className} ${colorRoom}`}
      onClick={handleOnClick}
    >
      <Flex vertical justify="center" align="center">
        {roomName}
        {roomInfo?.tenCanBo == null ? <></> : <span>{tenCanBo} </span>}
      </Flex>
    </div>
  );
};
