import React from "react";
import { Modal, Flex, Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenCreatePasswordModal,
  setOpenViewUserModal,
} from "../../redux/slide/MyState";
import { updatePassword } from "../../redux/slide/UserSlide";
export const CreatePasswordModal = (props) => {
  const openCreatePasswordModal = useSelector(
    (state) => state.MyState.openCreatePasswordModal
  );
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const userIdCurrent = useSelector((state) => state.MyState.userIdCurrent);
  const handleCloseCreatePasswordModal = () => {
    form.resetFields();
    dispatch(setOpenCreatePasswordModal(false));
    dispatch(setOpenViewUserModal(true));
  };
  const handleSubmit = (values) => {
    try {
      const formData = {
        password: values.password,
      };
      dispatch(updatePassword({ id: userIdCurrent, body: formData }));
      message.success("TẠO MẬT KHẨU MỚI THÀNH CÔNG");
      handleCloseCreatePasswordModal();
    } catch (error) {
      message.error(error);
    }
  };
  return (
    <div>
      <Modal
        onClose={handleCloseCreatePasswordModal}
        onCancel={handleCloseCreatePasswordModal}
        open={openCreatePasswordModal}
        footer={null}
        width={400}
      >
        <Form
          labelCol={{
            span: 9,
          }}
          wrapperCol={{
            span: 13,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          form={form}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="password"
            label="Mật khẩu:"
            rules={[
              { required: true, message: "Vui lòng mật khẩu!" },
              { min: 5, message: "Độ dài tối thiểu là 6 ký tự!" },
            ]}
          >
            <Input.Password
              autoComplete="off"
              type="password"
              placeholder="Nhập mật khẩu vào đây..."
            />
          </Form.Item>
          <Form.Item
            label="Nhập lại mật khẩu"
            name="confirm"
            dependencies={["password"]}
            //  hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng nhập lại mật khẩu !",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Vui lòng nhập lại mật khẩu một lần nữa")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Xác nhận lại mật khẩu"
              autoComplete="off"
            />
          </Form.Item>
          <Flex justify={"space-around"} className="footer-modal-wrap">
            <Button type="primary" htmlType="submit">
              Tạo mới
            </Button>

            <Button
              type="primary"
              danger
              onClick={() => handleCloseCreatePasswordModal()}
            >
              Hủy
            </Button>
          </Flex>
        </Form>
      </Modal>
    </div>
  );
};
