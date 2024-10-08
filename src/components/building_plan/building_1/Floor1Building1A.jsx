import React from "react";
import "../style/building_plan.scss";
import { Row, Col, Flex } from "antd";
import { Room } from "../../room/Room";
export const Floor1Building1A = ({ dataFloor }) => {
  return (
    <div className="floor-vertical-wrap ">
      <Row justify={"center"} className="custom-row-vertical margin-row">
        <Col span={7} className="padding-col">
          <Room roomInfo={dataFloor?.[0]} className="room-vertical" />
        </Col>
        <Col span={7} className="padding-col">
          <Room roomInfo={dataFloor?.[1]} className="room-vertical" />
        </Col>
      </Row>
      <Row justify={"center"} className="custom-row-vertical margin-row">
        <Col span={7} className="padding-col">
          <Room roomInfo={dataFloor?.[2]} className="room-vertical" />
        </Col>
        <Col span={7} className="padding-col">
          <Room roomInfo={dataFloor?.[3]} className="room-vertical" />
        </Col>
      </Row>
      <Row justify={"center"} className="custom-row-vertical margin-row">
        <Col span={7} className="padding-col">
          <div className="base-room karaoke room-vertical ">KARAOKE</div>
        </Col>
        <Col span={7} className="padding-col">
          <Room roomInfo={dataFloor?.[4]} className="room-vertical" />
        </Col>
      </Row>
      <Row justify={"center"} className="custom-row-vertical margin-row">
        <Col span={7} className="padding-col">
          <div className="base-room gym room-vertical "> GYM</div>
        </Col>
        <Col span={7} className="padding-col">
          <Row gutter={[0, 10]}>
            <Col span={24}>
              <Room roomInfo={dataFloor?.[5]} className="room-vertical" />
            </Col>
            <Col span={24}>
              <div className="base-room staircase-vertical">CẦU THANG</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
