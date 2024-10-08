import React from "react";
import { Radio, Flex, Row, Col, Button, Spin } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../building_styles/building_styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBackOutline } from "react-icons/io5";
import { Floor1Building2 } from "../../components/building_plan/building_2/Floor1Building2";
import { Floor2Building2 } from "../../components/building_plan/building_2/Floor2Building2";
import { Floor3Building2 } from "../../components/building_plan/building_2/Floor3Building2";
import { getRoomByFLoorId } from "../../redux/slide/RoomSlide";
import { changeCurrentFloor } from "../../redux/slide/MyState";

export const APH2 = (props) => {
  const data = useSelector((state) => state.RoomSlide.roomDataByFloorId);
  const loading = useSelector((state) => state.RoomSlide.loading);
  const dispatch = useDispatch();
  const currentFLoorRedux = useSelector((state) => state.MyState.currentFloor);

  const floorList = [
    {
      key: "6",
      component: <Floor1Building2 dataFloor={data} />,
    },
    {
      key: "7",
      component: <Floor2Building2 dataFloor={data} />,
    },
    {
      key: "8",
      component: <Floor3Building2 dataFloor={data} />,
    },
  ];
  const [selectedLabel, setSelectedLabel] = useState();
  const [currentFLoorComponent, setCurrentFloorComponent] = useState();
  const labels = {
    6: "TẦNG 1",
    7: "TẦNG 2",
    8: "TẦNG 3",
  };
  `current index floor:`, currentFLoorRedux;

  // handle data

  useEffect(() => {
    dispatch(getRoomByFLoorId(currentFLoorRedux));
  }, [currentFLoorRedux]);

  useEffect(() => {
    const selectedFloor = floorList.find(
      (item) => item.key === currentFLoorRedux
    );
    if (data && selectedFloor) {
      setCurrentFloorComponent(React.cloneElement(selectedFloor.component));
    }
    setSelectedLabel(labels[currentFLoorRedux]);
  }, [data, currentFLoorRedux]);
  const handleFloorChange = (e) => {
    const { value } = e.target;
    dispatch(changeCurrentFloor(value));
    setSelectedLabel(labels[value]);
    const selectedFloor = floorList.find((item) => item.key === value);
    if (selectedFloor) {
      setCurrentFloorComponent(selectedFloor.component);
    }
  };

  return (
    <div className="building-wrap">
      <Spin spinning={loading} fullscreen />
      <Flex vertical gap={30}>
        <Flex>
          <Flex flex={1} justify="right">
            <Link to={"/"}>
              <Button
                type="primary"
                className="back-button"
                icon={<IoArrowBackOutline />}
              >
                Back
              </Button>
            </Link>
          </Flex>
          <Flex flex={6} justify="center">
            <Radio.Group
              optionType="button"
              buttonStyle="solid"
              onChange={handleFloorChange}
              value={currentFLoorRedux}
            >
              <Radio value="6">Tầng 1</Radio>
              <Radio value="7">Tầng 2</Radio>
              <Radio value="8">Tầng 3</Radio>
            </Radio.Group>
          </Flex>
          <Flex vertical flex={2} gap={10}>
            <div className="annotation-wrap">
              <div className="not-empty-annotation-shape" />
              <div className="not-empty-annotation-text">
                <span>Phòng có người ở</span>
              </div>
            </div>
            <div className="annotation-wrap">
              <div className="empty-annotation-shape" />
              <div className="empty-annotation-text">
                <span>Phòng trống</span>
              </div>
            </div>
          </Flex>
        </Flex>
        {currentFLoorComponent}
        <Flex justify="center">
          <h3>SƠ ĐỒ {selectedLabel} TÒA NHÀ APH2</h3>
        </Flex>
      </Flex>
    </div>
  );
};
