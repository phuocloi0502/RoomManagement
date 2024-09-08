import React from "react";
import { Modal, Form, Input, Flex, Button, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setOpenReservationModal } from "../../redux/slide/MyState";
import "./modal_styles.scss";
export const ReservationModal = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const openReservationModal = useSelector(
    (state) => state.MyState.openReservationModal
  );
  const handleSubmit = (values) => {
    console.log(values);
  };
  const handleCloseReservationModal = () => {
    form.resetFields();
    dispatch(setOpenReservationModal(false));
  };

  return (
    <div>
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
              name="birthday"
              label="Ngày sinh:"
              // rules={[{ required: true, message: "Vui lòng nhập ngày sinh!" }]}
            >
              <DatePicker format={"DD/MM/YYYY"} />
            </Form.Item>
            <Form.Item
              name="nationality"
              label="Quốc tịch:"
              // rules={[
              //   { required: true, message: "Vui lòng nhập quốc tịch" },

              // ]}
            >
              <Input placeholder="Nhập quốc tịch vào đây..." />
            </Form.Item>
            <Form.Item
              name="address"
              label="Địa chỉ:"
              // rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
            >
              <Input placeholder="Nhập địa chỉ vào đây..." />
            </Form.Item>
            <Form.Item
              name="checkInDate"
              label="Ngày vào ở:"
              rules={[{ required: true, message: "Vui lòng nhập ngày vào ở" }]}
            >
              <DatePicker status="warning" format={"DD/MM/YYYY"} />
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
              <DatePicker status="error" format={"DD/MM/YYYY"} />
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
