import "../../App.css";
import "react-tabs/style/react-tabs.css";
import React from "react";
import Layout from "../../components/Layout/mainLayout";
import { Link } from "react-router-dom";
import AppLogo from "../../components/resource/img/logor.jpg";
import {
  FacebookIcon,
  InstaIcon,
  PhoneIcon,
  WhatsappIcon,
} from "../../components/Icons/generalIcons";

function About() {
  return (
    <Layout>
      <div className="imageDiv">
        <Link to="/" className="anchor mb-auto">
          <img src={AppLogo} className="appLogoImage" alt="" />
        </Link>
      </div>
      <div className="socialIconsDiv">
        <a href="/">
          <FacebookIcon width={30} height={30}/>
        </a>
        <a href="/">
          <InstaIcon width={30} height={30}/>
        </a>
        <a href="tel:0795780501">
          <PhoneIcon width={30} height={30}/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=0795780501">
          <WhatsappIcon width={30} height={30}/>
        </a>
      </div>
    </Layout>
  );
}

export default About;
