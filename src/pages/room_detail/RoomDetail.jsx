import React, { useEffect } from "react";
import "./room_detail.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
  DatePicker,
  Divider,
  Flex,
  Button,
  Image,
  Modal,
  Form,
  Input,
  Space,
  Breadcrumb,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenResidentModal,
  setOpenReservationModal,
  setOpenCheckOutModal,
  setEditSliderModal,
  changeCurrentFloor,
} from "../../redux/slide/MyState";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import h1 from "../../assets/room_img_1.jpg";
import h2 from "../../assets/room_img_2.jpeg";
import h3 from "../../assets/room_img_3.jpg";
import h4 from "../../assets/room_img_4.jpg";
import h5 from "../../assets/room_img_5.jpeg";
import { GiReturnArrow } from "react-icons/gi";
import { PiDoorFill } from "react-icons/pi";
import { SlideShow } from "../../components/slide_show_image/SlideShow";
import { ResidentInfoModal } from "../../components/modal/ResidentInfoModal";
import { ReservationModal } from "../../components/modal/ReservationModal";
import { CheckoutModal } from "../../components/modal/CheckoutModal";
import { AddAvatarUser } from "../../components/modal/AddAvatarUser";
import { EditSliderModal } from "../../components/modal/EditSliderModal";
import { getRoomById } from "../../redux/slide/RoomSlide";
export const RoomDetail = (props) => {
  // inti
  const imageSlideShow = [h1, h2, h3, h4, h5];
  const dispatch = useDispatch();
  const nav = useNavigate();
  const openEditSliderModal = useSelector(
    (state) => state.MyState.openEditSliderModal
  );
  useEffect(() => {}, [openEditSliderModal]);
  const { roomId } = useParams();
  const previousFloor = useSelector((state) => state.MyState.currentFloor);
  const roomDataById = useSelector((state) => state.RoomSlide.roomDataById);
  const createdData = useSelector((state) => state.RoomSlide.createdData);

  // hanlde
  const goBack = () => {
    nav(-1); // Quay lại trang trước
    dispatch(changeCurrentFloor(previousFloor)); // Đặt lại tầng trước đó trong Redux
  };
  useEffect(() => {
    dispatch(getRoomById(roomId));
  }, [createdData]);
  console.log(roomDataById);

  const floorMap = {
    "Floor 1": "Tầng 1",
    "Floor 2": "Tầng 2",
    "Floor 3": "Tầng 3",
    "Floor 4": "Tầng 1",
    "Floor 5": "Tầng 2",
    "Floor 6": "Tầng 1",
    "Floor 7": "Tầng 2",
    "Floor 8": "Tầng 3",
  };
  console.log(floorMap[roomDataById?.tenTang]);

  return (
    <div className="room-detail-wrap">
      <ResidentInfoModal />
      {/* Modal thông tin người thuê phòng */}
      <ReservationModal roomId={roomId} />
      {/* Modal đặt phòng */}
      <CheckoutModal />
      {/* Modal trả phòng */}
      <AddAvatarUser />
      <EditSliderModal sliderImage={imageSlideShow} />
      <div className="room-detail-info-wrap">
        <Breadcrumb
          style={{ marginBottom: 10 }}
          items={[
            {
              title: roomDataById?.tenBuilding?.toUpperCase(),
            },

            {
              title:
                roomDataById?.section == ""
                  ? null
                  : `KHU ${roomDataById?.section}`,
            },
            {
              title: floorMap[roomDataById?.tenTang],
            },
            // {
            //   title: <a href="">Application List</a>,
            // },
            {
              title: roomDataById?.tenPhong,
            },
          ]}
        />
        <div className="room-detail-info-title">
          <Button
            type="primary"
            className="back-button"
            icon={<IoArrowBackOutline />}
            onClick={goBack}
          >
            Back
          </Button>

          <h3>
            THÔNG TIN PHÒNG{" "}
            <span style={{ color: "rgb(232, 81, 81)" }}>
              {" "}
              {roomDataById?.tenPhong}
            </span>{" "}
            {/* TẦNG 1 TÒA NHÀ {roomDataById.tenBuilding} */}
          </h3>
        </div>
        <div className="room-status">
          <h3>
            Trạng thái phòng:
            {roomDataById?.status == "VACANT" ? (
              <strong>TRỐNG</strong>
            ) : (
              <>
                <strong>CÓ NGƯỜI</strong>
                <Button
                  size="large"
                  type="link"
                  onClick={() => {
                    dispatch(setOpenResidentModal(true));
                  }}
                >
                  (Xem chi tiết ...)
                </Button>
              </>
            )}
          </h3>
        </div>

        <div className="room-detail-info-content">
          <div className="btn-custom-wrap">
            <div className="btn-reservation-toggle">
              <Button
                onClick={() => {
                  dispatch(setOpenReservationModal(true));
                }}
                size="large"
                icon={<PiDoorFill />}
                disabled={roomDataById?.status != "VACANT"}
              >
                ĐẶT PHÒNG
              </Button>
            </div>
            <div className="btn-checkout-toggle">
              <Button
                size="large"
                icon={<GiReturnArrow />}
                onClick={() => {
                  dispatch(setOpenCheckOutModal(true));
                }}
                disabled={roomDataById?.status == "VACANT"}
              >
                TRẢ PHÒNG
              </Button>
            </div>
          </div>
          <Divider orientation="center">
            <h2>Hình ảnh</h2>
          </Divider>
          <Button
            size="large"
            icon={<EditOutlined />}
            className="btn-edit-slider"
            onClick={() => {
              dispatch(setEditSliderModal(true));
            }}
          >
            QUẢN LÝ HÌNH ẢNH
          </Button>
          {/* room image */}
          <div className="slideshow-room-image-wrap">
            <SlideShow slide={imageSlideShow} />
          </div>

          {/* <div className="image-room-wrap">
            <Flex wrap gap={"small"}>
              <Image src={h1} />
              <Image width={300} src={h2} />
              <Image width={300} src={h3} />
              <Image width={300} src={h4} />
              <Image width={300} src={h5} />
            </Flex>
          </div> */}
        </div>
      </div>
    </div>
  );
};
