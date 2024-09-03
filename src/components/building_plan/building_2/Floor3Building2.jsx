import React from "react";
import "../style/building_plan.scss";
import { Row, Col, Flex } from "antd";
import { Room } from "../../room/Room";
export const Floor3Building2 = (props) => {
  return (
    <div className="floor-wrap">
      <Row justify="space-between" className="custom-row">
        <Col className="base-room staircase-big" span={2}>
          CẦU THANG
        </Col>
        <Col span={2}>
          <Room roomName="301" />
        </Col>
        <Col span={2}>
          <Room roomName="302" />
        </Col>
        <Col span={2}>
          <Room roomName="303" />
        </Col>
        <Col span={2}>
          <Room roomName="305" />
        </Col>
        <Col span={2}>
          <Room roomName="306" />
        </Col>
        <Col span={2}>
          <Room roomName="307" />
        </Col>
        <Col span={2}>
          <Room roomName="308" />
        </Col>
        <Col span={2}>
          <Room roomName="309" />
        </Col>
        <Col span={2}>
          <Room roomName="310" />
        </Col>
        <Col span={1}>
          <Row className="sub-row">
            <Col className="base-room technique ">KT.NƯỚC</Col>
            <Col className="base-room technique">KT.ĐIỆN</Col>
          </Row>
        </Col>
        <Col span={2}>
          <Row className="sub-row">
            <Col className="base-room toilet ">KHO</Col>
            <Col className="base-room staircase">CẦU THANG</Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between" className="custom-row">
        <Col span={19} />
        <Col span={2}>
          <Row gutter={[0, 12]}>
            <Col span={24}>
              <Room roomName="312" />
            </Col>
            <Col span={24}>
              <Room roomName="315" />
            </Col>
            <Col span={24}>
              <Room roomName="317" />
            </Col>
            <Col span={24}>
              <Room roomName="319" />
            </Col>
          </Row>
        </Col>
        <Col span={2}>
          <Row gutter={[0, 12]}>
            <Col span={24}>
              <Room roomName="311" />
            </Col>
            <Col span={24}>
              <Room roomName="313" />
            </Col>
            <Col span={24}>
              <Room roomName="316" />
            </Col>
            <Col span={24}>
              <Room roomName="318" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between" className="custom-row">
        <Col span={2}></Col>
        <Col span={2}>
          <Room roomName="337" />
        </Col>
        <Col span={3}>
          <Room roomName="335" />
        </Col>
        <Col span={3}>
          <Room roomName="332" />
        </Col>
        <Col span={2}>
          <Room roomName="330" />
        </Col>
        <Col span={2}>
          <Room roomName="328" />
        </Col>
        <Col span={2}>
          <Room roomName="326" />
        </Col>
        <Col span={2}>
          <Room roomName="323" />
        </Col>
        <Col span={2}>
          <Row className="sub-row">
            <Col className="base-room technique ">KT.NƯỚC</Col>
            <Col className="base-room technique">KT.ĐIỆN</Col>
          </Row>
        </Col>
        <Col span={2}>
          <Row className="sub-row">
            <Col className="base-room staircase ">CẦU THANG</Col>
            <Col className="base-room warehouse">KHO</Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col className="base-room staircase-big" span={2}>
          CẦU THANG
        </Col>
        <Col span={2}>
          <Room roomName="336" />
        </Col>
        <Col span={3}>
          <Room roomName="333" />
        </Col>
        <Col span={3}>
          <Room roomName="331" />
        </Col>
        <Col span={2}>
          <Room roomName="329" />
        </Col>
        <Col span={2}>
          <Room roomName="327" />
        </Col>
        <Col span={2}>
          <Room roomName="325" />
        </Col>
        <Col span={2}>
          <Room roomName="322" />
        </Col>
        <Col span={2}>
          <Room roomName="321" />
        </Col>
        <Col span={2}>
          <Room roomName="320" />
        </Col>
      </Row>
    </div>
  );
};
