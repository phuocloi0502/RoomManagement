import React, { useEffect } from "react";
import { Radio, Flex, Row, Col, Button, Spin } from "antd";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../building_styles/building_styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBackOutline } from "react-icons/io5";
import { Floor1Building1A } from "../../components/building_plan/building_1/Floor1Building1A";
import { Floor2Building1A } from "../../components/building_plan/building_1/Floor2Building1A";
import { Floor3Building1A } from "../../components/building_plan/building_1/Floor3Building1A";
import { Floor1Building1B } from "../../components/building_plan/building_1/Floor1Building1B";
import { Floor2Building1B } from "../../components/building_plan/building_1/Floor2Building1B";
import { getAll, getRoomByFLoorId } from "../../redux/slide/RoomSlide";
import { changeCurrentFloor } from "../../redux/slide/MyState";

export const APH1 = (props) => {
  const data = useSelector((state) => state.RoomSlide.roomDataByFloorId);
  const loading = useSelector((state) => state.RoomSlide.loading);
  const currentFLoorRedux = useSelector((state) => state.MyState.currentFloor);
  const [currentFLoorComponent, setCurrentFloorComponent] = useState();
  const [group, setGroup] = useState();
  const [selectedLabel, setSelectedLabel] = useState();
  const dispatch = useDispatch();

  const labels = {
    1: "TẦNG 1 KHU A",
    2: "TẦNG 2 KHU A",
    3: "TẦNG 3 KHU A",
    4: "TẦNG 1 KHU B",
    5: "TẦNG 2 KHU B",
  };

  const floorList = [
    {
      key: "1",
      component: <Floor1Building1A dataFloor={data} />,
    },
    {
      key: "2",
      component: <Floor2Building1A dataFloor={data} />,
    },
    {
      key: "3",
      component: <Floor3Building1A dataFloor={data} />,
    },
    {
      key: "4",
      component: <Floor1Building1B dataFloor={data} />,
    },
    {
      key: "5",
      component: <Floor2Building1B dataFloor={data} />,
    },
  ];

  // handle data
  `current index floor:`, currentFLoorRedux;

  useEffect(() => {
    if (currentFLoorRedux) {
      dispatch(getRoomByFLoorId(currentFLoorRedux));
    }
  }, [currentFLoorRedux]);

  useEffect(() => {
    const selectedFloor = floorList.find(
      (item) => item.key === currentFLoorRedux
    );
    if (data && selectedFloor) {
      setCurrentFloorComponent(React.cloneElement(selectedFloor.component));
    }
    if (currentFLoorRedux > 3) {
      setGroup("GB");
    } else {
      setGroup("GA");
    }
    setSelectedLabel(labels[currentFLoorRedux]);
  }, [data, currentFLoorRedux]);

  // handle button
  const handleFloorChange = (e) => {
    const { value } = e.target;
    dispatch(changeCurrentFloor(value));
    setSelectedLabel(labels[value]);
    const selectedFloor = floorList.find((item) => item.key === value);
    if (selectedFloor) {
      setCurrentFloorComponent(selectedFloor.component);
    }
  };

  const handleChangeGroup = (e) => {
    const { value } = e.target;
    setGroup(value);
    if (value == "GB") {
      dispatch(changeCurrentFloor("4"));
      setSelectedLabel(labels["4"]);
      setCurrentFloorComponent(floorList[3].component);
    } else {
      dispatch(changeCurrentFloor("1"));
      setSelectedLabel(labels["floor1A"]);
      setCurrentFloorComponent(floorList[0].component);
    }
  };
  `group current: `, group;
  return (
    <>
      {" "}
      <Spin spinning={loading} fullscreen />
      <div className="building-wrap">
        <Flex vertical gap={30}>
          <Flex justify="center" align="center">
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
            <Flex flex={9} justify="center" vertical align="center" gap={10}>
              <Radio.Group onChange={handleChangeGroup} value={group}>
                <Radio value="GA">KHU A</Radio>
                <Radio value="GB">KHU B</Radio>
              </Radio.Group>
              {group == "GA" ? (
                <Radio.Group
                  optionType="button"
                  buttonStyle="solid"
                  onChange={handleFloorChange}
                  value={currentFLoorRedux}
                >
                  <Radio value="1">Tầng 1</Radio>
                  <Radio value="2">Tầng 2</Radio>
                  <Radio value="3">Tầng 3</Radio>
                </Radio.Group>
              ) : (
                <Radio.Group
                  optionType="button"
                  buttonStyle="solid"
                  onChange={handleFloorChange}
                  value={currentFLoorRedux}
                >
                  <Radio value="4">Tầng 1</Radio>
                  <Radio value="5">Tầng 2</Radio>
                </Radio.Group>
              )}
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
            <h3>SƠ ĐỒ {selectedLabel} TÒA NHÀ APH1</h3>
          </Flex>
        </Flex>
      </div>
    </>
  );
};
