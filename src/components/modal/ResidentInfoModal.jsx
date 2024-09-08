import React, { useEffect, useState } from "react";
import {
  Modal,
  Flex,
  Button,
  Form,
  Input,
  DatePicker,
  Upload,
  Image,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setOpenResidentModal } from "../../redux/slide/MyState";
import userAvatar from "../../assets/avatar_default.jpg";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);
export const ResidentInfoModal = (props) => {
  const openResidentModal = useSelector(
    (state) => state.MyState.openResidentModal
  );
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState();
  const [fileList, setFileList] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  // const [isFasle, setIsFalse] = useState(f);
  //   const [previewImage, setPreviewImage] = useState(userAvatar);

  const residentInfo = {
    name: "NGUYỄN VĂN A",

    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg",
    // avatar: "",
    birthday: dayjs("1999-02-05"),
    nationality: "VIET NAM",
    address: "LONG HO, VINH LONG",
    checkInDate: dayjs("2024-09-15"),
    checkOutDate: dayjs("2024-09-25"),
  };
  useEffect(() => {
    if (residentInfo.avatar == "") {
      setAvatar(userAvatar);
    } else {
      setAvatar(residentInfo.avatar);
    }
  }, [residentInfo.avatar]);
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      ...residentInfo,
    });
  }, [form]);
  const handleCloseResidentModal = () => {
    setIsDisable(true);
    form.setFieldsValue({
      ...residentInfo,
    });
    if (residentInfo.avatar == "") {
      setAvatar(userAvatar);
    } else {
      setAvatar(residentInfo.avatar);
    }
    setFileList([]);
    dispatch(setOpenResidentModal(false));
  };
  const formData = new FormData();
  fileList.forEach((file) => {
    formData.append("files", file.originFileObj);
  });
  const handleChange = ({ fileList: newFileList }) => {
    fileList.forEach((file) => URL.revokeObjectURL(file.url));

    if (newFileList.length > 0) {
      const newAvatar = URL.createObjectURL(
        newFileList[newFileList.length - 1].originFileObj
      );
      setAvatar(newAvatar);
      setFileList(newFileList.slice(-1));
    } else {
      setFileList([]);
      setAvatar(userAvatar);
    }
  };

  console.log(fileList);

  return (
    <div>
      <Modal
        onClose={handleCloseResidentModal}
        onCancel={handleCloseResidentModal}
        open={openResidentModal}
        footer={null}
        destroyOnClose={true}
      >
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
          <Flex align="end" justify={"end"} className="avatar-wrap">
            <Flex flex={2} justify="end" className="avatar-container">
              <Image src={avatar} preview={false} width={100} />
            </Flex>
            <Flex flex={5}>
              <Upload
                accept="image/*"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleChange}
                fileList={fileList}
              >
                <Flex gap={10}>
                  <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
                  {fileList.length > 0 ? (
                    <Button type="primary">Lưu</Button>
                  ) : (
                    <></>
                  )}
                </Flex>
              </Upload>
            </Flex>
          </Flex>
          <Form.Item
            name="name"
            label="Họ và Tên:"
            rules={[
              { required: true, message: "Vui lòng nhập họ và tên!" },
              { min: 5, message: "Độ dài tối thiểu là 5 ký tự!" },
            ]}
          >
            <Input readOnly={isDisable} placeholder="Nhập họ tên vào đây..." />
          </Form.Item>
          <Form.Item
            name="birthday"
            label="Ngày sinh:"
            // rules={[{ required: true, message: "Vui lòng nhập ngày sinh!" }]}
          >
            <DatePicker
              disabled={isDisable}
              allowClear={isDisable}
              // open={!isDisable}
              // inputReadOnly={isDisable}
              format={"DD/MM/YYYY"}
            />
          </Form.Item>
          <Form.Item
            name="nationality"
            label="Quốc tịch:"
            // rules={[{ required: true, message: "Vui lòng nhập quốc tịch" }]}
          >
            <Input
              readOnly={isDisable}
              placeholder="Nhập quốc tịch vào đây..."
            />
          </Form.Item>
          <Form.Item
            name="address"
            label="Địa chỉ:"
            // rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
          >
            <Input readOnly={isDisable} placeholder="Nhập địa chỉ vào đây..." />
          </Form.Item>
          <Form.Item
            name="checkInDate"
            label="Ngày vào ở:"
            rules={[{ required: true, message: "Vui lòng nhập ngày vào ở" }]}
          >
            <DatePicker
              status="warning"
              disabled={isDisable}
              allowClear={isDisable}
              // open={!isDisable}
              // inputReadOnly={isDisable}
              format={"DD/MM/YYYY"}
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
              disabled={isDisable}
              allowClear={isDisable}
              // open={!isDisable}
              // inputReadOnly={isDisable}
              format={"DD/MM/YYYY"}
            />
          </Form.Item>
          <Flex justify={"space-around"} className="btn-modal-wrap">
            {!isDisable ? (
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  setIsDisable(false);
                }}
              >
                Chỉnh sửa
              </Button>
            )}

            <Button type="primary" danger onClick={handleCloseResidentModal}>
              Hủy
            </Button>
          </Flex>
        </Form>
      </Modal>
    </div>
  );
};
