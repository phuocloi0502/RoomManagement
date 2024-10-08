import React, { useEffect, useState, useRef } from "react";
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
import "./modal_styles.scss";
import { getCanBoById } from "../../redux/slide/CanBoSlide";
dayjs.extend(isSameOrAfter);
export const ResidentInfoModal = (props) => {
  const openResidentModal = useSelector(
    (state) => state.MyState.openResidentModal
  );
  const canBoIdCurrent = useSelector((state) => state.RoomSlide.canBoIdCurrent);
  const canBoDataById = useSelector((state) => state.CanBoSlide.canBoDataById);

  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState();
  const [fileList, setFileList] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const inputRef = useRef(null);
  const [form] = Form.useForm();
  const formData = new FormData();
  // const [isFasle, setIsFalse] = useState(f);
  //   const [previewImage, setPreviewImage] = useState(userAvatar);
  useEffect(() => {
    if (canBoIdCurrent != null) {
      dispatch(getCanBoById(canBoIdCurrent));
    }
  }, [canBoIdCurrent]);

  // xử lí dữ liệu nhận từ api
  const residentInfo = {
    tenCanBo: canBoDataById?.tenCanBo,
    avatar: canBoDataById?.hinhAnhCanBos[0]?.url,
    ngayDen: dayjs(canBoDataById?.ngayDen),
    ngayDi: dayjs(canBoDataById?.ngayDi),
  };
  useEffect(() => {
    if (residentInfo) {
      form.setFieldsValue({
        ...residentInfo,
      });
    }
  }, [residentInfo]);

  // xử lí avatar can bo
  useEffect(() => {
    if (residentInfo?.avatar == undefined) {
      setAvatar(userAvatar);
    } else {
      setAvatar(residentInfo?.avatar);
    }
  }, []);

  const handleCloseResidentModal = () => {
    setIsDisable(true);
    form.setFieldsValue({
      ...residentInfo,
    });
    if (residentInfo?.avatar == undefined) {
      setAvatar(userAvatar);
    } else {
      setAvatar(residentInfo.avatar);
    }
    setFileList([]);
    dispatch(setOpenResidentModal(false));
  };

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
          className="form-resident-info-wrap"
        >
          <Flex align="end" justify={"end"} className="avatar-wrap">
            <Flex flex={2} justify="end" className="avatar-container">
              <Image src={avatar} preview={false} width={100} />
            </Flex>
            <Flex flex={5} gap={20}>
              <Upload
                accept="image/*"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleChange}
                fileList={fileList}
              >
                <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
              </Upload>
              {fileList.length > 0 ? (
                <Button type="primary">Lưu</Button>
              ) : (
                <></>
              )}
            </Flex>
          </Flex>
          <Form.Item
            name="tenCanBo"
            label="Họ và Tên:"
            rules={[
              { required: true, message: "Vui lòng nhập họ và tên!" },
              { min: 5, message: "Độ dài tối thiểu là 5 ký tự!" },
            ]}
          >
            <Input
              ref={inputRef}
              readOnly={isDisable}
              placeholder="Nhập họ tên vào đây..."
            />
          </Form.Item>

          <Form.Item
            name="ngayDen"
            label="Ngày vào ở:"
            rules={[{ required: true, message: "Vui lòng nhập ngày vào ở" }]}
          >
            {isDisable ? (
              <h4 className="text-check-in-date">
                {residentInfo.ngayDen.format("DD/MM/YYYY")}
              </h4>
            ) : (
              <DatePicker
                status="warning"
                disabled={isDisable}
                allowClear={isDisable}
                // open={!isDisable}
                // inputReadOnly={isDisable}
                format={"DD/MM/YYYY"}
              />
            )}
          </Form.Item>
          <Form.Item
            name="ngayDi"
            label="Ngày trả (dự kiến):"
            rules={[
              { required: true, message: "Vui lòng nhập ngày trả!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const checkInDate = getFieldValue("ngayDen");
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
            {isDisable ? (
              <h4 className="text-check-out-date">
                {residentInfo.ngayDi.format("DD/MM/YYYY")}
              </h4>
            ) : (
              <DatePicker
                status="error"
                disabled={isDisable}
                allowClear={isDisable}
                // open={!isDisable}
                // inputReadOnly={isDisable}
                format={"DD/MM/YYYY"}
              />
            )}
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
                  inputRef.current.focus({
                    cursor: "end",
                  });
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
