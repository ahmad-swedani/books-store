import React from "react";
import {
  Col,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import AppLogo from "./../resource/img/logor.jpg";
import { CartIcon } from "../Icons/generalIcons";
import "./style.scss";
import OffCanvasSidebar from "../offCanvas/sidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  return (
    <header id="page-header" className="w-4 headerDiv">
      <div className=" header">
        <Row className="row">
          <Col xs={4} className="">
            <OffCanvasSidebar name="end" />
          </Col>
          <Col xs={4} className="">
            <div className="imageDiv">
              <Link to="/" className="anchor mb-auto">
                <img src={AppLogo} className="" alt="" width="90" />
              </Link>
            </div>
          </Col>
          <Col xs={4} className="">
            <div className="iconsDiv">
              <Link to="/cart">
                <CartIcon width={28} height={28} />
              </Link>
              <Form className="d-none d-lg-flex" onSubmit={(e) => e.preventDefault()}>
                <Form.Control
                  type="search"
                  placeholder="بحث"
                  className="me-2 rounded-pill"
                  aria-label="Search"
                  onChange={(event) => setSearchInput(event.target.value)}
                />
                <Button disabled={!searchInput.trim()} className="rounded-pill" variant="outline-primary" onClick={() => navigate("/books", { state: ["search", searchInput] })}>
                  بحث
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Header;
