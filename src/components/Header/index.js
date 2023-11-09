import React, { useEffect, useState } from "react";
import { Col, Row, NavLink } from "react-bootstrap";
import AppLogo from "./../resource/img/happy-math-logo.png";
import { BackArrow } from "../Icons/generalIcons";
import { Link } from "react-router-dom";

import "./style.scss";

function Header() {
  const [open, setOpen] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")
  );

  const [user, setUser] = React.useState({});

  // const signOutHandler = (e) => {
  //   e.preventDefault();
  //   setIsAuthenticated(false);
  //   localStorage.clear();
  //   window.location.reload(false);
  // };

  useEffect(() => {
    if (isAuthenticated) {
      const data = localStorage.getItem("User");
      console.log("data: ", JSON.parse(data));
      var ParsedUser = JSON.parse(data);
      setUser(ParsedUser);
    }
  }, [isAuthenticated]);
  return (
    <header id="page-header" className="w-4">
      <div className=" header">
        <Row>
          <Col xs={12} className="">
            <div className="d-flex justify-content-between">
            </div>
            <div className="">
              <div className="imageDiv">
                <NavLink className=" mb-auto d-none d-lg-block" to="/">
                  <img src={AppLogo} className="" alt="" width="90" />
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* <hr></hr> */}
    </header>
  );
}

export default Header;
