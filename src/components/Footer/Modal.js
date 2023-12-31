import { Button, Modal } from "react-bootstrap";

function PrivacyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "right" }}>
        <p>{props.msg}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>إغلاق</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PrivacyModal;
