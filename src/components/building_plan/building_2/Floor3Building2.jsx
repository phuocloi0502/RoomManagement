import React from "react";
import "../style/building_plan.scss";
import { Row, Col, Flex } from "antd";
import { Room } from "../../room/Room";
export const Floor3Building2 = ({ dataFloor }) => {
  dataFloor;

  return (
    <div className="floor-wrap">
      <Row justify="space-between" className="custom-row">
        <Col className="base-room staircase-big" span={2}>
          CẦU THANG
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[0]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[1]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[2]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[3]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[4]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[5]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[6]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[7]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[8]} />
        </Col>
        <Col span={1}>
          <Row className="sub-row">
            <Col className="base-room technique ">KT.NƯỚC</Col>
            <Col className="base-room technique">KT.ĐIỆN</Col>
          </Row>
        </Col>
        <Col span={2}>
          <Row className="sub-row">
            <Col className="base-room warehouse ">KHO</Col>
            <Col className="base-room staircase">CẦU THANG</Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between" className="custom-row">
        <Col span={19} />
        <Col span={2}>
          <Row gutter={[0, 12]}>
            <Col span={24}>
              <Room roomInfo={dataFloor?.[9]} />
            </Col>
            <Col span={24}>
              <Room roomInfo={dataFloor?.[10]} />
            </Col>
            <Col span={24}>
              <Room roomInfo={dataFloor?.[11]} />
            </Col>
            <Col span={24}>
              <Room roomInfo={dataFloor?.[12]} />
            </Col>
          </Row>
        </Col>
        <Col span={2}>
          <Row gutter={[0, 12]}>
            <Col span={24}>
              <Room roomInfo={dataFloor?.[13]} />
            </Col>
            <Col span={24}>
              <Room roomInfo={dataFloor?.[14]} />
            </Col>
            <Col span={24}>
              <Room roomInfo={dataFloor?.[15]} />
            </Col>
            <Col span={24}>
              <Room roomInfo={dataFloor?.[16]} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between" className="custom-row">
        <Col span={2}></Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[17]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[18]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[19]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[20]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[21]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[22]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[23]} />
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
          <Room roomInfo={dataFloor?.[24]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[25]} />
        </Col>
        <Col span={3}>
          <Room roomInfo={dataFloor?.[26]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[27]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[28]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[29]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[30]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[31]} />
        </Col>
        <Col span={2}>
          <Room roomInfo={dataFloor?.[32]} />
        </Col>
      </Row>
    </div>
  );
};
