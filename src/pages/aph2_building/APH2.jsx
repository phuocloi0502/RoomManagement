import React from "react";
import { Radio, Flex, Row, Col, Button } from "antd";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../building_styles/building_styles.scss";
import { IoArrowBackOutline } from "react-icons/io5";
import { Floor1Building2 } from "../../components/building_plan/building_2/Floor1Building2";
import { Floor2Building2 } from "../../components/building_plan/building_2/Floor2Building2";
import { Floor3Building2 } from "../../components/building_plan/building_2/Floor3Building2";
const floorList = [
  {
    key: "floor1",
    component: <Floor1Building2 />,
  },
  {
    key: "floor2",
    component: <Floor2Building2 />,
  },
  {
    key: "floor3",
    component: <Floor3Building2 />,
  },
];
export const APH2 = (props) => {
  const [floor, setFloor] = useState("floor1");
  const [selectedLabel, setSelectedLabel] = useState("TẦNG 1");
  const [currentFLoor, setCurrentFloor] = useState(<Floor1Building2 />);
  const handleFloorChange = (e) => {
    const { value } = e.target;
    setFloor(value);
    const labels = {
      floor1: "TẦNG 1",
      floor2: "TẦNG 2",
      floor3: "TẦNG 3",
    };
    setSelectedLabel(labels[value]);
    const selectedFloor = floorList.find((item) => item.key === value);
    if (selectedFloor) {
      setCurrentFloor(selectedFloor.component);
    }
  };

  return (
    <div className="building-wrap">
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
          <Flex flex={9} justify="center">
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
          </Flex>
        </Flex>
        {currentFLoor}
        <Flex justify="center">
          <h3>SƠ ĐỒ {selectedLabel} TÒA NHÀ APH2</h3>
        </Flex>
      </Flex>
    </div>
  );
};
