import React, { useState } from "react";
import { Dropdown, offCanvas } from "react-bootstrap";
import Sidebar from ".";
import "./style.scss";

export default function Canvas({ open }) {

  return (
   
    <Dropdown>
      <Dropdown.Toggle variant="outline-success">
        <span className="navbar-toggler-icon"></span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Sidebar className={"w-auto"} />
      </Dropdown.Menu>
    </Dropdown>
  );
}
