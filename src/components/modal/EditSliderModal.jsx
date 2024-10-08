import React, { useState, useEffect } from "react";
import {
  Modal,
  Flex,
  Button,
  Form,
  Input,
  DatePicker,
  Upload,
  Image,
  Divider,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditSliderModal,
  setOpenCreatePasswordModal,
  setOpenViewUserModal,
} from "../../redux/slide/MyState";
import "./modal_styles.scss";
import { BsUpload } from "react-icons/bs";
import { IoSaveOutline } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
export const EditSliderModal = ({ sliderImage }) => {
  const openEditSliderModal = useSelector(
    (state) => state.MyState.openEditSliderModal
  );
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleCloseEditSliderModal = () => {
    dispatch(setEditSliderModal(false));
  };
  const [fileList, setFileList] = useState([]);

  const [previewImage, setPreviewImage] = useState([]);
  const handleUploadImage = ({ fileList }) => {
    setFileList(fileList);
    const newImages = fileList.map((file) =>
      URL.createObjectURL(file.originFileObj)
    );
    setPreviewImage(newImages);
  };
  const handleDeletePreviewImage = (indexToDelete) => {
    setFileList((prevFileList) =>
      prevFileList.filter((_, index) => index !== indexToDelete)
    );
    setPreviewImage((prevImage) =>
      prevImage.filter((_, index) => index !== indexToDelete)
    );
  };
  const handleDeleteImage = (indexToDelete) => {
    setFileList((prevFileList) =>
      prevFileList.filter((_, index) => index !== indexToDelete)
    );
    setPreviewImage((prevImage) =>
      prevImage.filter((_, index) => index !== indexToDelete)
    );
  };
  return (
    <div>
      <Modal
        onClose={handleCloseEditSliderModal}
        onCancel={handleCloseEditSliderModal}
        open={openEditSliderModal}
        footer={null}
        width={970}
        title={"QUẢN LÝ HÌNH ẢNH PHÒNG"}
        className="edit-slider-modal-wrap"
      >
        <Flex justify="end" className="btn-add-image" gap={20}>
          <Button icon={<IoSaveOutline />} type="primary">
            Lưu
          </Button>
          <Upload
            accept="image/*"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleUploadImage}
            fileList={fileList}
            // listType={"picture-card"}
            multiple
          >
            <Button icon={<BsUpload />}> Thêm ảnh</Button>
          </Upload>
        </Flex>
        <Flex wrap justify="start" gap={11}>
          {previewImage.length > 0 ? (
            previewImage?.map((item, index) => (
              <div className="preview-image-wrap" key={index}>
                <div
                  className="btn-delete-preview-image"
                  onClick={() => handleDeletePreviewImage(index)}
                >
                  <TiDelete />
                </div>
                <Image src={item} width={300} />
              </div>
            ))
          ) : (
            <></>
          )}
        </Flex>
        <Divider />
        <Flex wrap justify="start" gap={11}>
          {sliderImage?.map((item, index) => (
            <div className="preview-image-wrap" key={index}>
              <div
                className="btn-delete-preview-image"
                onClick={() => handleDeleteImage(index)}
              >
                <TiDelete />
              </div>
              <Image src={item} width={300} />
            </div>
          ))}
        </Flex>
      </Modal>
    </div>
  );
};
