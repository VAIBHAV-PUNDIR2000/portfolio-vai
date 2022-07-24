import React from "react";
import { BsLinkedin, BsInstagram, BsGithub, BsPhone } from "react-icons/bs";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub />
    </div>
    <div>
      <SiLeetcode />
    </div>
    <div>
      <BsLinkedin />
    </div>
    <div>
      <SiGmail />
    </div>
    <div>
      <FaPhone />
    </div>
  </div>
);

export default SocialMedia;
