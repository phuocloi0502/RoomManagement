import React from "react";
import { Row, Col, Flex } from "antd";
import "../style/building_plan.scss";
import { Room } from "../../room/Room";
export const Floor2Building2 = (props) => {
  return (
    <div className="floor-wrap">
      <Row justify="space-between" className="custom-row">
        <Col className="base-room staircase-big" span={2}>
          CẦU THANG
        </Col>
        <Col span={2}>
          <Room roomName="201" />
        </Col>
        <Col span={2}>
          <Room roomName="202" />
        </Col>
        <Col span={2}>
          <Room roomName="203" />
        </Col>
        <Col span={2}>
          <Room roomName="205" />
        </Col>
        <Col span={2}>
          <Room roomName="206" />
        </Col>
        <Col span={2}>
          <Room roomName="207" />
        </Col>
        <Col span={2}>
          <Room roomName="208" />
        </Col>
        <Col span={2}>
          <Room roomName="209" />
        </Col>
        <Col span={2}>
          <Room roomName="210" />
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
              <Room roomName="212" />
            </Col>
            <Col span={24}>
              <Room roomName="215" />
            </Col>
            <Col span={24}>
              <Room roomName="217" />
            </Col>
            <Col span={24}>
              <Room roomName="219" />
            </Col>
          </Row>
        </Col>
        <Col span={2}>
          <Row gutter={[0, 12]}>
            <Col span={24}>
              <Room roomName="211" />
            </Col>
            <Col span={24}>
              <Room roomName="213" />
            </Col>
            <Col span={24}>
              <Room roomName="216" />
            </Col>
            <Col span={24}>
              <Room roomName="218" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between" className="custom-row">
        <Col span={2}></Col>
        <Col span={2}>
          <Room roomName="237" />
        </Col>
        <Col span={3}>
          <Room roomName="235" />
        </Col>
        <Col span={3}>
          <Room roomName="232" />
        </Col>
        <Col span={2}>
          <Room roomName="230" />
        </Col>
        <Col span={2}>
          <Room roomName="228" />
        </Col>
        <Col span={2}>
          <Room roomName="226" />
        </Col>
        <Col span={2}>
          <Room roomName="223" />
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
          <Room roomName="236" />
        </Col>
        <Col span={3}>
          <Room roomName="233" />
        </Col>
        <Col span={3}>
          <Room roomName="231" />
        </Col>
        <Col span={2}>
          <Room roomName="229" />
        </Col>
        <Col span={2}>
          <Room roomName="227" />
        </Col>
        <Col span={2}>
          <Room roomName="225" />
        </Col>
        <Col span={2}>
          <Room roomName="222" />
        </Col>
        <Col span={2}>
          <Room roomName="221" />
        </Col>
        <Col span={2}>
          <Room roomName="220" />
        </Col>
      </Row>
    </div>
  );
};
