import React from "react";
import { Row, Col, Flex } from "antd";
import "./style/building_plan.scss";
import { Room } from "../room/Room";
export const Floor1Building1 = (props) => {
  return (
    <>
      <div>
        <Row justify="space-between" className="custom-row">
          <Col className="room-wrap" span={3}>
            <Flex justify="center" align="center" className="lobby-space">
              Sanh
            </Flex>
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="116" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="113" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="111" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="109" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="107" />
          </Col>
          <Col className="room-wrap" span={2}>
            <Room roomName="106" />
          </Col>
          <Col className="room-wrap" span={2}>
            <Room roomName="105" />
          </Col>
        </Row>
        <Row justify="end" className="custom-row">
          <Col className="room-wrap" span={11}>
            {" "}
            <Flex justify="center" align="center" className="lobby-space">
              Ho boi
            </Flex>
          </Col>
          <Col className="room-wrap empty-space" span={3}>
            {" "}
            <Flex></Flex>
          </Col>
          <Col span={3}>
            <Row className="custom-row">
              <Col
                style={{
                  height: "15vh",
                  width: "100%",
                  backgroundColor: "green",
                }}
              >
                Bep
              </Col>
            </Row>
            <Row className="custom-row">
              <Col
                style={{
                  height: "5vh",
                  width: "100%",
                  backgroundColor: "green",
                }}
              >
                Kho bep
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  height: "10vh",
                  width: "100%",
                  backgroundColor: "green",
                }}
              >
                Phong an vip
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="space-between" className="custom-row">
          <Col className="room-wrap empty-space" span={3}>
            {" "}
            <Flex></Flex>
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="117" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="115" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="112" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="110" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="108" />
          </Col>
          <Col className="room-wrap" span={2}>
            <Flex></Flex>
          </Col>
          <Col className="room-wrap" span={2}>
            <Flex justify="center" align="center" className="lobby-space">
              Cau thang
            </Flex>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col className="room-wrap" span={3}>
            <Flex justify="center" align="center" className="lobby-space">
              Sanh
            </Flex>
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="116" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="113" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="111" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="109" />
          </Col>
          <Col className="room-wrap" span={3}>
            <Room roomName="107" />
          </Col>
          <Col className="room-wrap" span={2}>
            <Room roomName="106" />
          </Col>
          <Col className="room-wrap" span={2}>
            <Room roomName="105" />
          </Col>
        </Row>
      </div>
      {/* <div>
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
      </div> */}
    </>
  );
};
