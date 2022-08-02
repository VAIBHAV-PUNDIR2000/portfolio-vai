import React from "react";
import { BsLinkedin, BsInstagram, BsGithub, BsPhone } from "react-icons/bs";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/VAIBHAV-PUNDIR2000">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://leetcode.com/pundirvaibhav29/">
        <SiLeetcode />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/vaibhavpundir29/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="mailto:vaibhavpundir29@gmail.com"
        target="_blank"
        rel="norefferer"
      >
        <SiGmail />
      </a>
    </div>
    <div>
      <a href="tel:+919675229109">
        <FaPhone />
      </a>
    </div>
  </div>
);

export default SocialMedia;
