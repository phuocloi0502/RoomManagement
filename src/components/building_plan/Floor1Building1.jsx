import React from "react";
import { Row, Col } from "antd";
export const Floor1Building1 = (props) => {
  return (
    <div>
      <Row gutter={[12, 12]}>
        <Col className="col-height-100" span={5}>
          Sanh
        </Col>
        <Col className="col-height-100" span={5}>
          ""
        </Col>
        <Col
          className="col-height-100 swimming"
          span={8}
          style={{ backgroundColor: "aqua" }}
        >
          "s"
        </Col>
        <Col className="col-height-100" span={6}>
          Sanh
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col className="col-height-100" span={5}>
          <div className="room-area">phong</div>
        </Col>
        <Col className="col-height-100" span={5}>
          <div className="room-area">phong</div>
        </Col>
        <Col
          className="col-height-100 swimming"
          style={{ backgroundColor: "aqua" }}
          span={8}
        >
          "s"
        </Col>
        <Col className="col-height-100" span={6}>
          Cong vien
        </Col>
      </Row>

      <Row gutter={[12, 12]}>
        <Col className="col-height-200" span={5}>
          <div className="room-area">phong</div>
        </Col>
        <Col className="col-height-200" span={5}>
          <div className="room-area">phong</div>
        </Col>
        <Col span={8} className="swimming">
          <Row gutter={[12, 12]}>
            <Col
              span={24}
              className="col-height-100  "
              style={{ backgroundColor: "aqua" }}
            >
              "s"
            </Col>
          </Row>
          <Row gutter={[12, 12]}>
            <Col
              className="col-height-100 "
              span={24}
              style={{ backgroundColor: "aqua" }}
            >
              Ho boi 1
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <Col
              className="col-height-100"
              span={24}
              style={{ backgroundColor: "blue" }}
            >
              karaoke1
            </Col>
          </Row>
          <Row>
            <Col
              className="col-height-100"
              span={24}
              style={{ backgroundColor: "green" }}
            >
              gym2
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col className="col-height-200" span={5}>
          <div className="room-area">phong</div>
        </Col>
        <Col className="col-height-200" span={5}>
          <div className="room-area">phong</div>
        </Col>
        <Col
          className="col-height-200 swimming"
          style={{ backgroundColor: "aqua" }}
          span={8}
        >
          Ho boi 2
        </Col>
        <Col span={6} className="col-height-200">
          <Row>
            <Col
              className="col-height-100"
              span={24}
              style={{ backgroundColor: "blue" }}
            >
              khu yoga
            </Col>
          </Row>
          <Row>
            <Col
              className="col-height-100"
              span={24}
              style={{ backgroundColor: "green" }}
            >
              <div className="room-area">phong</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
