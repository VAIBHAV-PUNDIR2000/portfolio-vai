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
        <VscPerson fontSize={50} />
        <span className="app__navbar-logo-text">PortfolioVai</span>
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Contact", "Projects", "Skills", "Footer"].map(
          (e) => {
            return (
              <li className="app__flex p-text" key={`link-${e}`}>
                <div>
                  <a href={`#${e}`} className=".app__navbar-links">
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
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
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
