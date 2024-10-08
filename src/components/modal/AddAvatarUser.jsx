import React, { useState } from "react";
import { Upload, Button, Flex, Modal, Image, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import { setOpenAddAvatarUserModal } from "../../redux/slide/MyState";
import { MdAdd } from "react-icons/md";
import "./modal_styles.scss";
export const AddAvatarUser = (props) => {
  const openAddAvatarUserModal = useSelector(
    (state) => state.MyState.openAddAvatarUserModal
  );
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState();
  const [fileList, setFileList] = useState([]);
  const handleCloseAddAvatarUserModal = () => {
    setFileList([]);
    setAvatar(null);
    dispatch(setOpenAddAvatarUserModal(false));
  };
  const handleChange = ({ fileList: newFileList }) => {
    fileList.forEach((file) => URL.revokeObjectURL(file.url));

    if (newFileList.length > 0) {
      const newAvatar = URL.createObjectURL(
        newFileList[newFileList.length - 1].originFileObj
      );
      setAvatar(newAvatar);
      setFileList(newFileList.slice(-1));
    }
  };
  return (
    <Modal
      title={"Thêm ảnh đại diện"}
      okText={"Thêm ảnh"}
      cancelText={"Để sau"}
      onClose={handleCloseAddAvatarUserModal}
      onCancel={handleCloseAddAvatarUserModal}
      open={openAddAvatarUserModal}
      width={500}
      className="add-avatar-user-wrap"
    >
      <Flex flex={5} gap={20} justify="center">
        <Upload
          accept="image/*"
          showUploadList={false}
          beforeUpload={() => false}
          onChange={handleChange}
          fileList={fileList}
        >
          <div className="avatar-preview-area">
            {fileList.length > 0 ? (
              //   <img src={avatar} />
              <Image src={avatar} preview={false} width={100} />
            ) : (
              <div className="btn-upload-avatar">
                <MdAdd />
              </div>
            )}

            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
          </div>
        </Upload>
      </Flex>
    </Modal>
  );
};
