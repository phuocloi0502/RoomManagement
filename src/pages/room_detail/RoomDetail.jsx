import React from "react";
import "./room_detail.scss";
import { useParams } from "react-router-dom";
import { Divider, Flex, Button, Image } from "antd";
import userAvatar from "../../assets/user_avatar.avif";
import h1 from "../../assets/room_img_1.jpg";
import h2 from "../../assets/room_img_2.jpeg";
import h3 from "../../assets/room_img_3.jpg";
import h4 from "../../assets/room_img_4.jpg";
import h5 from "../../assets/room_img_5.jpeg";
import { GiReturnArrow } from "react-icons/gi";
import { PiDoorFill } from "react-icons/pi";
import { SlideShow } from "../../components/slide_show_image/SlideShow";
export const RoomDetail = (props) => {
  const { roomId } = useParams();
  return (
    <div className="room-detail-wrap">
      <div className="room-detail-info-wrap">
        <div className="room-detail-info-title">
          <h3>THÔNG TIN PHÒNG {roomId}</h3>
        </div>
        <div className="room-detail-info-content">
          <div className="btn-custom-wrap">
            <div className="btn-reservation-toggle">
              <Button icon={<PiDoorFill />}>ĐẶT PHÒNG</Button>
            </div>
            <div className="btn-checkout-toggle">
              <Button icon={<GiReturnArrow />}>TRẢ PHÒNG</Button>
            </div>
          </div>
          <Divider orientation="center">
            <h2>Hình ảnh</h2>
          </Divider>
          {/* room image */}
          <div className="slideshow-room-image-wrap">
            <SlideShow />
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
          <Divider orientation="center">
            <h2>Nội thất</h2>
          </Divider>
          <div className="Interior-wrap">
            <div>
              <ul>
                <li>Bàn: 1 cái</li>
                <li>Ghế: 1 cái</li>
                <li>Tủ lạnh</li>
                <li>Tivi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="resident-info-wrap">
        <div className="resident-info-title">
          <h3>THÔNG TIN NGƯỜI ĐANG Ở</h3>
        </div>
        <div className="resident-info-content">
          <div className="group-avatar-name text">
            <img src={userAvatar} alt="" />
            <Flex vertical justify={"space-between"}>
              <div>
                <span> Họ Tên:</span>
                <strong> NGUYỄN VĂN A</strong>
              </div>
              <div>
                <span> Ngày sinh:</span>
                <strong> 01/01/1990</strong>
              </div>
            </Flex>
          </div>
          <div className="group-address-time text">
            <div>
              <span> Quốc tịch:</span>
              <strong> VIỆT NAM</strong>
            </div>
            <div>
              <span> Địa chỉ:</span>
              <strong> Long Hồ, Vĩnh Long</strong>
            </div>
            <div className="time">
              <span> Ngày vào ở:</span>
              <Button type="primary">01/02/2024</Button>
            </div>
            <div className="time">
              <span> Ngày trả phòng (dự kiến):</span>
              <Button type="primary" danger>
                10/02/2024
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
