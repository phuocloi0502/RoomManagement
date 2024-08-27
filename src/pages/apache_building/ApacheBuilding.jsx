import React from "react";
import { Radio, Flex, Row, Col, Button } from "antd";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../building_styles/building_styles.scss";
import { IoArrowBackOutline } from "react-icons/io5";
import { Floor1Building1 } from "../../components/building_plan/building_1/Floor1Building1";
import { Floor2Building1 } from "../../components/building_plan/building_1/Floor2Building1";
import { Floor3Building1 } from "../../components/building_plan/building_1/Floor3Building1";
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
];
export const ApacheBuilding = (props) => {
  const [floor, setFloor] = useState("floor1");
  const [currentFLoor, setCurrentFloor] = useState(<Floor1Building1 />);
  const handleFloorChange = (e) => {
    const { value } = e.target;
    setFloor(value);
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
          <h3>TÒA NHÀ APACHE</h3>
        </Flex>
      </Flex>
    </div>
  );
};
