import React, { useState } from "react";
import "./Footer.scss";
import Foot from "../../Static/Constants/Footer.svg";
import AppWrap from "../../wrapper/AppWrap";
import { client } from "../../client";
import { motion } from "framer-motion";
const Footer = () => {
  const [sendingData, setSendingData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: sendingData.name,
      email: sendingData.email,
      message: sendingData.message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setSendingData({ name: "", email: "", message: "" });
      setIsSubmitted(true);
    });
  };
  const buttonValue = () => {
    if (isSubmitted && !loading) {
      return "Submitted Successfully";
    } else if (loading) {
      return "Sending Please wait ";
    } else {
      return "Submit";
    }
  };

  buttonValue();

  return (
    <div className="app__footer-main">
      <div
        className="cushion-div"
        style={{
          height: "6vh",
          width: "95vw",
        }}
      ></div>

      <motion.h1
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="head-text top-text"
        style={{ marginTop: "5vh" }}
      >
        How about a <span>Hello</span> 👋
      </motion.h1>
      <div className="app__footer-section">
        <div className="app__footer-section-form">
          <h3>Drop down Your Queries </h3>
          <div className="form-body">
            <input
              value={sendingData.email}
              placeholder="Your Email"
              onChange={(e) =>
                setSendingData({ ...sendingData, email: e.target.value })
              }
              type="email"
            ></input>
            <input
              placeholder="Your Name"
              value={sendingData.name}
              type="text"
              onChange={(e) =>
                setSendingData({ ...sendingData, name: e.target.value })
              }
            ></input>
            <input
              placeholder="Message For me <3"
              value={sendingData.message}
              onChange={(e) =>
                setSendingData({ ...sendingData, message: e.target.value })
              }
              className="message-input"
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleSubmit();
                }
              }}
            ></input>

            <button
              className="button-31"
              role="button"
              disabled={isSubmitted ? true : false}
              style={isSubmitted ? { opacity: 0.3, cursor: "not-allowed" } : {}}
              onClick={() => {
                if (
                  sendingData.message &&
                  sendingData.name &&
                  sendingData.email
                )
                  handleSubmit();
              }}
            >
              {buttonValue()}
            </button>
          </div>
        </div>
        <motion.div
          className="app__footer-section-svg"
          whileInView={{ scale: [0.5, 1] }}
        >
          <img src={Foot} />
        </motion.div>
        <div className="copyright">
          <p>PortFoliat | © Vaibhav Pundir 2022</p>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Footer, "footer");
