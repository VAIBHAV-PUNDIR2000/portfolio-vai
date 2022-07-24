import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { VscPerson } from "react-icons/vsc";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <VscPerson fontSize={50} style={{ fill: "var(--brown-color)" }} />
        <span className="app__navbar-logo-text">Port</span>
        <span
          className="app__navbar-logo-text"
          style={{ color: "#46364a", textDecoration: "none" }}
        >
          Foliat
        </span>
      </div>
      <ul className="app__navbar-links">
        {["header", "info", "Contact", "Projects", "Skills", "Footer"].map(
          (e) => {
            return (
              <li className="app__flex p-text" key={`link-${e}`}>
                <div>
                  <a
                    href={`#${e}`}
                    className="app__navbar-links"
                    style={{ textTransform: "uppercase" }}
                  >
                    {e}
                  </a>
                </div>
              </li>
            );
          }
        )}
      </ul>
      <div className="app__navbar-menu">
        <AiOutlineMenu
          size={20}
          style={{
            borderRadius: "50%",
            backgroundColor: "#46364a",
            padding: "8px",
            // size: "19px",
          }}
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.4, easings: ["easeIn", "easeOut"] }}
          >
            <AiOutlineClose onClick={() => setToggle(false)} />
            <ul>
              {["home", "info", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    style={{ textTransform: "uppercase" }}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
