import React from "react";
import "./Footer.scss";
import AppWrap from "../../wrapper/AppWrap";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="app__footer-main">
      <div
        className="cushion-div"
        style={{
          height: "5vh",
          width: "95vw",
        }}
      ></div>
      <h1 className=" head-text  " style={{ marginTop: "4vh" }}>
        How about a <span>Hello</span> 👋
      </h1>
      <div className="app__footer-section">
        <div className="app__footer-section-form">
          <div className="form-body">
            <input placeholder="Your Email"></input>
            <input placeholder="Your "></input>
            <input></input>
          </div>
        </div>
        <motion.div className="app__footer-section-svg">h</motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Footer, "footer");
