import React from "react";
import { Modal, Form, Input, Flex, Button, DatePicker, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenCreatePasswordModal,
  setOpenViewUserModal,
} from "../../redux/slide/MyState";
import "./modal_styles.scss";
import { useEffect, useState, useRef } from "react";
import { getUserById, updateUser } from "../../redux/slide/UserSlide";
export const ViewUserModal = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const inputRef = useRef(null);
  const openViewUserModal = useSelector(
    (state) => state.MyState.openViewUserModal
  );
  const userByIdData = useSelector((state) => state.UserSlide.userByIdData);
  const loading = useSelector((state) => state.UserSlide.loading);
  const [isDisable, setIsDisable] = useState(true);
  const userIdCurrent = useSelector((state) => state.MyState.userIdCurrent);
  const handleSubmit = (values) => {
    if (!isDisable) {
      console.log(values);

      const formData = {
        tenNhanVien: values,
      };
      try {
        dispatch(updateUser({ id: userIdCurrent, body: formData }));
        message.success("CHỈNH SỬA THÀNH CÔNG");
      } catch (error) {
        message.error(error);
      }
    }
  };
  useEffect(() => {
    dispatch(getUserById(userIdCurrent));
  }, [userIdCurrent]);
  const handleCloseViewUserModal = () => {
    setIsDisable(true);
    form.setFieldsValue({
      ...userByIdData,
    });
    dispatch(setOpenViewUserModal(false));
  };

  useEffect(() => {
    form.setFieldsValue({
      ...userByIdData,
    });
  }, [userByIdData]);

  const handleOpenCreatePassword = () => {
    dispatch(setOpenViewUserModal(false));
    dispatch(setOpenCreatePasswordModal(true));
  };
  return (
    <div>
      <Modal
        onClose={handleCloseViewUserModal}
        onCancel={handleCloseViewUserModal}
        open={openViewUserModal}
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
              name="tenNhanVien"
              label="Họ và Tên:"
              rules={[
                { required: true, message: "Vui lòng nhập họ và tên!" },
                { min: 5, message: "Độ dài tối thiểu là 5 ký tự!" },
                { max: 250, message: "Độ dài tối đa là 250 ký tự!" },
              ]}
            >
              <Input
                readOnly={isDisable}
                ref={inputRef}
                placeholder="Nhập họ tên vào đây..."
              />
            </Form.Item>

            <Form.Item
              name="userName"
              label="Tên đăng nhập:"
              rules={[
                { required: true, message: "Vui lòng nhập họ và tên!" },
                { min: 5, message: "Độ dài tối thiểu là 5 ký tự!" },
              ]}
            >
              <Input disabled placeholder="Nhập tên đăng nhập vào đây..." />
            </Form.Item>

            <Flex justify="center">
              <Button
                size="large"
                type="link"
                onClick={() => handleOpenCreatePassword()}
              >
                Tạo mật khẩu mới
              </Button>
            </Flex>

            <Flex justify={"space-around"} className="footer-modal-wrap">
              {isDisable ? (
                <Button
                  type="primary"
                  onClick={() => {
                    inputRef.current.focus({
                      cursor: "end",
                    });
                    setIsDisable(false);
                  }}
                >
                  Chỉnh sửa
                </Button>
              ) : (
                <Button
                  type="primary"
                  onClick={() =>
                    handleSubmit(form.getFieldValue("tenNhanVien"))
                  }
                >
                  Lưu
                </Button>
              )}

              <Button
                type="primary"
                danger
                onClick={() => handleCloseViewUserModal()}
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
