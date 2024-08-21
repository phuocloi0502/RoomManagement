import React from "react";
import "./room_page.scss";
import { Radio, Flex, Row, Col } from "antd";
import { useState, useRef } from "react";
import { Floor1Building1 } from "../../components/building_plan/building_1/Floor1Building1";
import { Floor3Building1 } from "../../components/building_plan/building_1/Floor3Building1";
import { Floor2Building1 } from "../../components/building_plan/building_1/Floor2Building1";
import { Floor1Building2 } from "../../components/building_plan/building_2/Floor1Building2";
import { Floor2Building2 } from "../../components/building_plan/building_2/Floor2Building2";
import { Floor3Building2 } from "../../components/building_plan/building_2/Floor3Building2";
export const RoomPage = (props) => {
  //init
  const [building, setBuilding] = useState();
  const [buildingLabel, setBuildingLabel] = useState("1");
  const [floor, setFloor] = useState("floor1");
  const [selectedLabel, setSelectedLabel] = useState("tầng 1");
  const [currentFLoor, setCurrentFloor] = useState(<Floor1Building1 />);

  const floorList = [
    {
      key: "floor1",
      component: <Floor1Building1 />,
    },
    {
      key: "floor2",
      component: <Floor2Building1 />,
    },
    {
      key: "floor3",
      component: <Floor3Building1 />,
    },
    {
      key: "floor4",
      component: <Floor1Building2 />,
    },
    {
      key: "floor5",
      component: <Floor2Building2 />,
    },
    {
      key: "floor6",
      component: <Floor3Building2 />,
    },
  ];
  //handle
  const handleRadioChange = ({ target: { value } }) => {
    setBuilding(value);

    if (value == "building1") {
      setBuildingLabel("1");
      setFloor("floor1");
      setSelectedLabel("tầng 1");
      const selectedFloor = floorList.find((item) => item.key === "floor1");
      if (selectedFloor) {
        setCurrentFloor(selectedFloor.component);
      }
    } else {
      setBuildingLabel("2");
      setFloor("floor4");
      setSelectedLabel("tầng 1");
      const selectedFloor = floorList.find((item) => item.key === "floor4");
      if (selectedFloor) {
        setCurrentFloor(selectedFloor.component);
      }
    }
  };

  const handleFloorChange = (e) => {
    const { value } = e.target;
    const labels = {
      floor1: "tầng 1",
      floor2: "tầng 2",
      floor3: "tầng 3",
      floor4: "tầng 1",
      floor5: "tầng 2",
      floor6: "tầng 3",
    };
    setSelectedLabel(labels[value]);
    setFloor(value);
    const selectedFloor = floorList.find((item) => item.key == value);
    if (selectedFloor) {
      setCurrentFloor(selectedFloor.component);
    }
  };

  return (
    <div className="room-page-wrap">
      <div className="room-page-header-wrap">
        <div className="radio-toggle">
          <Radio.Group onChange={handleRadioChange} defaultValue={"building1"}>
            <Radio value="building1">Tòa nhà số 1</Radio>
            <Radio value="building2">Tòa nhà số 2</Radio>
          </Radio.Group>
        </div>
        <div className="radio-button-toggle">
          {building == "building2" ? (
            <Radio.Group
              optionType="button"
              buttonStyle="solid"
              onChange={handleFloorChange}
              value={floor}
            >
              <Radio value="floor4">Tầng 1</Radio>
              <Radio value="floor5">Tầng 2</Radio>
              <Radio value="floor6">Tầng 3</Radio>
            </Radio.Group>
          ) : (
            <Radio.Group
              optionType="button"
              buttonStyle="solid"
              onChange={handleFloorChange}
              value={floor}
              defaultValue={"floor1"}
            >
              <Radio value="floor1">Tầng 1</Radio>
              <Radio value="floor2">Tầng 2</Radio>
              <Radio value="floor3">Tầng 3</Radio>
            </Radio.Group>
          )}
        </div>
        <div className="room-page-content-title">
          <h2>{`Sơ đồ ${selectedLabel} của tòa nhà ${buildingLabel}`}</h2>
        </div>
      </div>
      <div className="room-page-content">
        <div className={`room-page-main-content ${1 === 2 ? "a" : "b"}`}>
          {currentFLoor}
        </div>
      </div>
    </div>
  );
};
