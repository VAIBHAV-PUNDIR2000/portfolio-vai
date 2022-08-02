import React, { useState, useEffect } from "react";
import "./Info.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import Background from "../../Static/Constants/background.svg";
const Info = () => {
  const [cardInfo, setCardInfo] = useState([]);
  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data) => setCardInfo(data));
  }, []);

  // const CardInfo = [
  //   {
  //     title: "Web Developer",
  //     desciption:
  //       "Having Experience with Front End Liberaries and frameworks, Exposure to REST APIs and Single State web apps",
  //     img: `https://source.unsplash.com/random/webdev`,
  //   },
  //   {
  //     title: "Aspiring Cross Platform Flutter Developer",
  //     desciption:
  //       "Has Built basic Native Android Apps , Familiarity with Statefull apps and Hardware access",
  //     img: `https://source.unsplash.com/random/flutter`,
  //   },
  //   {
  //     title: "UI designer",
  //     desciption:
  //       "Built Front end designs, Logos , Graphics, illustrations and Vectors",
  //     img: `https://source.unsplash.com/random/uidesigner`,
  //   },
  // ];
  // console.log(cardInfo);
  return (
    <div className="info">
      <div style={{ width: "100%", height: "2rem" }}></div>
      <motion.h2
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="head-text top-level-title"
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        I Can Sip<span> Coffee, </span> write <span>Code,</span> Design{" "}
        <span>Layouts &</span>
        <br /> and generates{" "}
        <span style={{ transform: "scale(2)" }}>Profits</span>
      </motion.h2>
      <div className="app__profiles">
        {cardInfo?.map((data, index) => (
          <motion.div
            key={`InfoCard-${data.title}`}
            className="app__profile-item"
            whileInView={{ opacity: 1, y: [50, 0] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.9, type: "tween" }}
          >
            <img src={urlFor(data.imgUrl)} alt={data.title}></img>
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {data.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {data.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Info, "info");
