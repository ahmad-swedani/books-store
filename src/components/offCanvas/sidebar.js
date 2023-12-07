import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  HomeIcon,
  InfoIcon,
  ListIcon,
  LoginIcon,
  OrderIcon,
} from "../Icons/generalIcons";
import "../Header/style.scss";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import cookie from "react-cookies";

function OffCanvasSidebar({ name, ...props }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="outline-secondary"
        onClick={handleShow}
        className="me-2 listButton"
      >
        <ListIcon width={20} height={20} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Button
              disabled={!searchInput.trim()}
              className="rounded-pill"
              variant="outline-primary"
              onClick={() =>
                navigate("/books", { state: ["search", searchInput] })
              }
            >
              بحث
            </Button>
            <Form.Control
              type="search"
              placeholder="بحث"
              className="me-2 rounded-pill"
              aria-label="Search"
              onChange={(event) => setSearchInput(event.target.value)}
            />
          </Form>
          <ul className="list-group ms-3 mt-4 ListGroup">
            <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
              <div className="d-flex gap-2">
                <Link to="/" className="p-1 text-dark links">
                  الرئيسية
                </Link>
                <HomeIcon width={20} height={20} className="iconTag" />
              </div>
            </li>
            {cookie.load("token") && (
              <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
                <div className="d-flex gap-2">
                  <Link to="/orders" className="p-1 text-dark links">
                    الطلبات
                  </Link>
                  <OrderIcon width={20} height={20} className="iconTag" />
                </div>
              </li>
            )}
            <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
              <div className="d-flex gap-2">
                <Link to="/about" className="p-1 text-dark links">
                  نبذة عنا
                </Link>
                <InfoIcon width={20} height={20} className="iconTag" />
              </div>
            </li>
            {!cookie.load("token") ? (
              <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
                <div className="d-flex gap-2">
                  <Link to="/login" className="p-1 text-dark links">
                    تسجيل الدخول
                  </Link>
                  <LoginIcon width={20} height={20} className="iconTag" />
                </div>
              </li>
            ) : (
              <li className="list-group-item bg-transparent border-0 fs-5 text-dark fw-bold">
                <div className="d-flex gap-2">
                  <Link
                    to="/login"
                    className="p-1 text-dark links"
                    onClick={() => cookie.remove("token")}
                  >
                    تسجيل الخروج
                  </Link>
                  <LoginIcon width={20} height={20} className="iconTag" />
                </div>
              </li>
            )}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasSidebar;
