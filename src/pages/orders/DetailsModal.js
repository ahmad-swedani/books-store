import "../../App.css";
import "react-tabs/style/react-tabs.css";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import OrderDetails from "./OrderDetails";

function DetailsModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          معلومات الطلب
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <OrderDetails data={props?.data}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailsModal;
