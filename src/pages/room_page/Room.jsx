import React from "react";
import "./room_page.scss";
import { Radio, Flex, Row, Col } from "antd";
import { useState, useRef } from "react";
import { Floor1Building1 } from "../../components/building_plan/Floor1Building1";

export const Room = (props) => {
  //init
  const [building, setBuilding] = useState();
  const [buildingLabel, setBuildingLabel] = useState("1");
  const [floor, setFloor] = useState("floor1");
  const [selectedLabel, setSelectedLabel] = useState("tầng 1");

  //handle
  const handleRadioChange = ({ target: { value } }) => {
    setBuilding(value);

    if (value == "building1") {
      setBuildingLabel("1");
      setFloor("floor1");
      setSelectedLabel("tầng 1");
    } else {
      setBuildingLabel("2");
      setFloor("floor4");
      setSelectedLabel("tầng 4");
    }
  };

  const handleFloorChange = (e) => {
    const { value } = e.target;
    const labels = {
      floor1: "tầng 1",
      floor2: "tầng 2",
      floor3: "tầng 3",
      floor4: "tầng 4",
      floor5: "tầng 5",
      floor6: "tầng 6",
    };
    setSelectedLabel(labels[value]);
    setFloor(value);
  };
  console.log(selectedLabel);
  console.log(floor);
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
              <Radio value="floor4">Tầng 4</Radio>
              <Radio value="floor5">Tầng 5</Radio>
              <Radio value="floor6">Tầng 6</Radio>
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
          <Floor1Building1 />
        </div>
      </div>
    </div>
  );
};
