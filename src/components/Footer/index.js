import React from 'react';
import AppLogo from "./../resource/img/happy-math-logo.png";
import { NavLink } from "react-bootstrap";



function Footer(props) {

    return (
        <footer class="img-text-footer">
            <div className="imageDiv">
                <NavLink className=" mb-auto d-none d-lg-block" to="/">
                    <img src={AppLogo} className="" alt="" width="90" />
                </NavLink>
            </div>
            <p className="text-footer">الشروط الأحكام | سياسة الخصوصية</p>
        </footer>
    );
}

export default Footer;