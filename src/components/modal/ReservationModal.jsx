import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Flex,
  Button,
  DatePicker,
  Spin,
  message,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenReservationModal,
  setOpenAddAvatarUserModal,
} from "../../redux/slide/MyState";
import "./modal_styles.scss";
import { checkIn } from "../../redux/slide/RoomSlide";
export const ReservationModal = ({ roomId }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const loading = useSelector((state) => state.RoomSlide.loading);
  const openReservationModal = useSelector(
    (state) => state.MyState.openReservationModal
  );

  const handleSubmit = (values) => {
    const formData = {
      tenCanBo: values.name,
      ngayDen: values.checkInDate?.format("YYYY-MM-DD"),
      ngayDi: values.checkOutDate?.format("YYYY-MM-DD"),
    };
    try {
      dispatch(checkIn({ roomId: roomId, body: formData }));
      message.loading("ĐANG XỬ LÝ THÔNG TIN . . .", 1);
      setTimeout(() => {
        form.resetFields();
        message.success("ĐẶT PHÒNG THÀNH CÔNG");
        dispatch(setOpenReservationModal(false));
        dispatch(setOpenAddAvatarUserModal(true));
      }, 1500);
    } catch (error) {
      message.error(error);
    }
  };
  const handleCloseReservationModal = () => {
    form.resetFields();
    dispatch(setOpenReservationModal(false));
  };

  return (
    <div>
      <Spin spinning={loading} fullscreen />
      <Modal
        okText={"Đặt phòng"}
        onClose={handleCloseReservationModal}
        onCancel={handleCloseReservationModal}
        open={openReservationModal}
        width={500}
        footer={null}
      >
        <div className="form-reservation-wrap">
          <Form
            labelCol={{
              span: 7,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            form={form}
            onFinish={handleSubmit}
          >
            <Form.Item
              name="name"
              label="Họ và Tên:"
              rules={[
                { required: true, message: "Vui lòng nhập họ và tên!" },
                { min: 5, message: "Độ dài tối thiểu là 5 ký tự!" },
              ]}
            >
              <Input placeholder="Nhập họ tên vào đây..." />
            </Form.Item>

            <Form.Item
              name="checkInDate"
              label="Ngày vào ở:"
              rules={[{ required: true, message: "Vui lòng nhập ngày vào ở" }]}
            >
              <DatePicker
                status="warning"
                format={"YYYY/MM/DD"}
                // onChange={handleCheckInChange}
              />
            </Form.Item>
            <Form.Item
              name="checkOutDate"
              label="Ngày trả (dự kiến):"
              rules={[
                { required: true, message: "Vui lòng nhập ngày trả!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const checkInDate = getFieldValue("checkInDate");
                    if (
                      !value ||
                      !checkInDate ||
                      value.isSameOrAfter(checkInDate)
                    ) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Ngày trả phải sau hoặc bằng ngày vào ở!")
                    );
                  },
                }),
              ]}
            >
              <DatePicker
                status="error"
                format={"YYYY/MM/DD"}
                // onChange={handleCheckOutChange}
              />
            </Form.Item>
            <Flex justify={"space-around"} className="footer-modal-wrap">
              <Button type="primary" htmlType="submit">
                Đặt phòng
              </Button>
              <Button
                type="primary"
                danger
                onClick={handleCloseReservationModal}
              >
                Hủy
              </Button>
            </Flex>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
