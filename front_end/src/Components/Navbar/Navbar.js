import React from "react";
import "./Navbar.scss";
import { VscPerson } from "react-icons/vsc";
const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <VscPerson fontSize={12} />
      </div>
      <ul className="app__na">
        {["home", "about", "contact", "projects", "skills", "footer"].map(
          (e) => {
            return (
              <li>
                <div>
                  <a href={`#${e}`}>{e}</a>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
