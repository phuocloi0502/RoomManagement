import React from "react";
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
import { setOpenCheckOutModal } from "../../redux/slide/MyState";
export const CheckoutModal = (props) => {
  const openCheckOutModal = useSelector(
    (state) => state.MyState.openCheckOutModal
  );

  const dispatch = useDispatch();
  const handleCloseCheckOutModal = () => {
    dispatch(setOpenCheckOutModal(false));
  };
  return (
    <div>
      <Modal
        onClose={handleCloseCheckOutModal}
        onCancel={handleCloseCheckOutModal}
        open={openCheckOutModal}
        footer={null}
      >
        <h3>Xác nhận trả phòng ?</h3>
        <Flex justify={"space-around"} className="footer-modal-wrap">
          <Button type="primary" htmlType="submit">
            Trả phòng
          </Button>
          <Button type="primary" danger onClick={handleCloseCheckOutModal}>
            Hủy
          </Button>
        </Flex>
      </Modal>
    </div>
  );
};
