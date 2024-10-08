import React from "react";
import { Modal, Form, Input, Flex, Button, DatePicker, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setOpenAddUserModal } from "../../redux/slide/MyState";
import "./modal_styles.scss";
import { createUser } from "../../redux/slide/UserSlide";
export const AddUserModal = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const openAddUserModal = useSelector(
    (state) => state.MyState.openAddUserModal
  );
  const handleSubmit = (values) => {
    const formData = {
      tenNhanVien: values.tenNhanVien,
      userName: values.userName,
      password: values.password,
    };
    try {
      dispatch(createUser(formData));
      message.loading("ĐANG THÊM NGƯỜI QUẢN LÝ . . .", 1);
      setTimeout(() => {
        form.resetFields();
        message.success("THÊM THÀNH CÔNG");
        dispatch(setOpenAddUserModal(false));
      }, 1500);
    } catch (error) {
      message.error(error);
    }
  };
  const handleCloseAddUserModal = () => {
    form.resetFields();
    dispatch(setOpenAddUserModal(false));
  };

  return (
    <div>
      <Modal
        onClose={handleCloseAddUserModal}
        onCancel={handleCloseAddUserModal}
        open={openAddUserModal}
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
              name="tenNhanVien"
              label="Họ và Tên:"
              rules={[
                { required: true, message: "Vui lòng nhập họ và tên!" },
                { min: 5, message: "Độ dài tối thiểu là 5 ký tự!" },
                { max: 250, message: "Độ dài tối đa là 250 ký tự!" },
              ]}
            >
              <Input placeholder="Nhập họ tên vào đây..." />
            </Form.Item>

            <Form.Item
              name="userName"
              label="Tên đăng nhập:"
              rules={[
                { required: true, message: "Vui lòng nhập họ và tên!" },
                { min: 5, message: "Độ dài tối thiểu là 5 ký tự!" },
                { max: 50, message: "Độ dài tối đa là 50 ký tự!" },
              ]}
            >
              <Input placeholder="Nhập tên đăng nhập vào đây..." />
            </Form.Item>

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
                Thêm
              </Button>
              <Button type="primary" danger onClick={handleCloseAddUserModal}>
                Hủy
              </Button>
            </Flex>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
