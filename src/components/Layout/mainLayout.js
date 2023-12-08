import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, id }) => {
  return (
    <div id={id}>
      <div className="w-100 overflow-hidden d-flex justify-content-between flex-column">
        <div>
          <Header />
          <div style={{paddingBottom: "10rem"}}>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
