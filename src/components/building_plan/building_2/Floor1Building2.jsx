import React from "react";
import { Row, Col, Flex } from "antd";
import "../style/building_plan.scss";
import { Room } from "../../room/Room";
export const Floor1Building2 = ({ dataFloor }) => {
  dataFloor;

  return (
    <div className="floor-wrap">
      <Row justify="space-between" className="custom-row">
        <Col className="base-room lobby" span={2}>
          SẢNH
        </Col>
        <Col className="base-room toilet-big" span={2}>
          N.VỆ SINH
        </Col>
        <Col className="base-room karaoke" span={2}>
          KARAOKE
        </Col>
        <Col className="base-room yoga" span={2}>
          YOGA
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[0]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[1]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[2]} />
        </Col>
        <Col span={1}>
          <Row className="sub-row">
            <Col className="base-room technique ">KT.NƯỚC</Col>
            <Col className="base-room technique">KT.ĐIỆN</Col>
          </Row>
        </Col>
        <Col span={2}>
          <Row className="sub-row">
            <Col className="base-room toilet ">N.VỆ SINH</Col>
            <Col className="base-room staircase">CẦU THANG</Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between" className="custom-row">
        <Col span={3} className="base-room gate">
          LỐI VÀO
        </Col>
        <Col span={21}>
          <Row justify="end">
            <Col className="base-room swimming " span={15}>
              HỒ BƠI
            </Col>
            <Col span={2} />

            <Col span={3}>
              <Row className="sub-row">
                <Col className="base-room  kitchen ">BẾP</Col>
                <Col className="base-room pantry">KHO BẾP</Col>
                <Col className="base-room dining">PHÒNG ĂN VIP</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between" className="custom-row">
        <Col span={2}></Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[3]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[4]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[5]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[6]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[7]} />
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
        <Col className="base-room lobby" span={2}>
          SẢNH
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[8]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[9]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[10]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[11]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[12]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[13]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[14]} />
        </Col>
      </Row>
    </div>
  );
};
