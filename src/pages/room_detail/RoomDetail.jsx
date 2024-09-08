import React from "react";
import "./room_detail.scss";
import { useParams } from "react-router-dom";
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
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenResidentModal,
  setOpenReservationModal,
  setOpenCheckOutModal,
} from "../../redux/slide/MyState";

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
export const RoomDetail = (props) => {
  // inti
  const imageSlideShow = [h1, h2, h3, h4, h5];
  const dispatch = useDispatch();

  const openReservationModal = useSelector(
    (state) => state.MyState.openReservationModal
  );
  const { roomId } = useParams();
  // hanlde

  return (
    <div className="room-detail-wrap">
      <ResidentInfoModal />
      {/* Modal thông tin người thuê phòng */}
      <ReservationModal />
      {/* Modal đặt phòng */}
      <CheckoutModal />
      {/* Modal trả phòng */}
      <div className="room-detail-info-wrap">
        <div className="room-detail-info-title">
          <h3>THÔNG TIN PHÒNG {roomId}</h3>
        </div>
        <div className="room-status">
          <h3>
            Trạng thái phòng: <strong>CÓ NGƯỜI</strong>{" "}
            <Button
              size="large"
              type="link"
              onClick={() => {
                dispatch(setOpenResidentModal(true));
              }}
            >
              (Xem chi tiết ...)
            </Button>
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
              >
                TRẢ PHÒNG
              </Button>
            </div>
          </div>
          <Divider orientation="center">
            <h2>Hình ảnh</h2>
          </Divider>
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
