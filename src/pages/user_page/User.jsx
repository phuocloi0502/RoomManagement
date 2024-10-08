import React, { useEffect } from "react";
import { Table, Button, Modal, Tag, Flex, message, Spin } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { HiOutlinePlusSm } from "react-icons/hi";
import { GrView } from "react-icons/gr";
import "./user_page.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenAddUserModal,
  setOpenViewUserModal,
  changeUserIdCurrent,
} from "../../redux/slide/MyState";
import { AddUserModal } from "../../components/modal/AddUserModal";
import { ViewUserModal } from "../../components/modal/ViewUserModal";
import { CreatePasswordModal } from "../../components/modal/CreatePasswordModal";
import { deleteUser, getAllUser } from "../../redux/slide/UserSlide";
const { confirm } = Modal;
export const User = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.UserSlide.userData);
  const loading = useSelector((state) => state.UserSlide.loading);
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const dataSource = userData.map((item) => ({
    key: item.id,
    ...item,
  }));
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",

      // sorter: (a, b) => a.id - b.id,
      // defaultSortOrder: "descend",
    },
    {
      title: "HỌ TÊN",
      dataIndex: "tenNhanVien",
      key: "tenNhanVien",
    },

    {
      title: "USER NAME",
      dataIndex: "userName",
      key: "userName",
    },

    {
      title: "RULES",
      dataIndex: "rules",
      key: "rules",

      render: (rule, record) => {
        let color = rule == "ADMIN" ? "geekblue" : "green";

        return <Tag color={color}>{rule}</Tag>;
      },
    },

    {
      title: "ACTION",
      key: "action",
      render: (_, record) => (
        <Flex gap={10}>
          <Button
            icon={<GrView />}
            className="table-btn-view"
            onClick={() => {
              handleViewUser(record.id);
            }}
          ></Button>

          <Button
            icon={<DeleteOutlined />}
            className="table-btn-delete"
            danger
            onClick={
              record.rules == "ADMIN"
                ? () => {
                    message.error("KHÔNG THỂ XÓA TÀI KHOẢN ADMIN !", 2);
                  }
                : () => showDeleteConfirm(record.id)
            }
          />
        </Flex>
      ),
    },
  ];

  const showDeleteConfirm = (userId) => {
    confirm({
      title: "Bạn có chắc muốn xóa người quản lý này ?",
      icon: <ExclamationCircleFilled />,
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk() {
        handleDeleteUser(userId);
        ("deleted");
      },
      onCancel() {
        ("Cancel");
      },
    });
  };
  const handleViewUser = (id) => {
    dispatch(changeUserIdCurrent(id));
    dispatch(setOpenViewUserModal(true));
  };
  const handleDeleteUser = (userId) => {
    try {
      dispatch(deleteUser(userId));
      message.success("XÓA THÀNH CÔNG");
    } catch (error) {
      message.error(error);
    }
  };
  return (
    <div className="user-page-wrap">
      <Spin spinning={loading} fullscreen />
      <AddUserModal />
      <ViewUserModal />
      <CreatePasswordModal />
      <h3>USER MANAGER</h3>
      <div className="table-btn-add">
        <Button
          icon={<HiOutlinePlusSm />}
          type="primary"
          onClick={() => {
            dispatch(setOpenAddUserModal(true));
          }}
        >
          Add Manager
        </Button>
      </div>
      <div className="table-container">
        <Table
          className="custom-table"
          columns={columns}
          dataSource={dataSource}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};
