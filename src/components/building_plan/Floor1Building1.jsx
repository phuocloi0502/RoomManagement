import React from "react";
import { Row, Col, Flex } from "antd";
import "./style/building_plan.scss";
import { Room } from "../room/Room";
export const Floor1Building1 = (props) => {
  return (
    <>
      <div>
        <Row justify="space-between" className="custom-row">
          <Col className="base-room lobby" span={2}>
            SẢNH
          </Col>
          <Col className="base-room park" span={2}>
            CÔNG VIÊN
          </Col>
          <Col className="base-room karaoke" span={2}>
            KARAOKE
          </Col>
          <Col className="base-room yoga" span={2}>
            YOGA
          </Col>
          <Col span={2}>
            <Room roomName="101" />
          </Col>
          <Col span={3}>
            <Room roomName="102" />
          </Col>
          <Col span={3}>
            <Room roomName="103" />
          </Col>
          <Col span={1}>
            <Row className="custom-row">
              <Col className="base-room technique ">KT.NƯỚC</Col>
            </Row>
            <Row>
              <Col className="base-room technique">KT.ĐIỆN</Col>
            </Row>
          </Col>
          <Col span={2}>
            <Row className="custom-row">
              <Col className="base-room toilet ">N.VỆ SINH</Col>
            </Row>
            <Row>
              <Col className="base-room staircase">CẦU THANG</Col>
            </Row>
          </Col>
        </Row>
        <Row justify="end" className="custom-row">
          <Col className="base-room swimming " span={12}>
            HỒ BƠI
          </Col>
          <Col span={3} />

          <Col span={3}>
            <Row className="custom-row">
              <Col className="base-room  kitchen ">BẾP</Col>
            </Row>
            <Row className="custom-row">
              <Col className="base-room pantry">KHO BẾP</Col>
            </Row>
            <Row>
              <Col className="base-room dining">PHÒNG ĂN VIP</Col>
            </Row>
          </Col>
        </Row>
        <Row justify="space-between" className="custom-row">
          <Col span={2}>
            <Flex></Flex>
          </Col>
          <Col span={2}>
            <Room roomName="117" />
          </Col>
          <Col span={3}>
            <Room roomName="115" />
          </Col>
          <Col span={3}>
            <Room roomName="112" />
          </Col>
          <Col span={3}>
            <Room roomName="110" />
          </Col>
          <Col span={3}>
            <Room roomName="108" />
          </Col>
          <Col span={2}>
            {" "}
            <Row className="custom-row">
              <Col className="base-room technique ">KT.NƯỚC</Col>
            </Row>
            <Row>
              <Col className="base-room technique">KT.ĐIỆN</Col>
            </Row>
          </Col>
          <Col span={2}>
            <Row className="custom-row">
              <Col className="base-room staircase ">CẦU THANG</Col>
            </Row>
            <Row>
              <Col className="base-room warehouse">KHO</Col>
            </Row>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col className="base-room lobby" span={2}>
            SẢNH
          </Col>
          <Col span={2}>
            <Room roomName="116" />
          </Col>
          <Col span={3}>
            <Room roomName="113" />
          </Col>
          <Col span={3}>
            <Room roomName="111" />
          </Col>
          <Col span={3}>
            <Room roomName="109" />
          </Col>
          <Col span={3}>
            <Room roomName="107" />
          </Col>
          <Col span={2}>
            <Room roomName="106" />
          </Col>
          <Col span={2}>
            <Room roomName="105" />
          </Col>
        </Row>
      </div>
    </>
  );
};
