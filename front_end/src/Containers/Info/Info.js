import React, { useState, useEffect } from "react";
import "./Info.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

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
  console.log(cardInfo);
  return (
    <div className="info">
      <h2 className="head-text">
        I Can Sip<span> Coffee, </span> Write <span>Code,</span> Design{" "}
        <span>Layouts &</span>
        <br /> And Generates <span>Profits</span>
      </h2>
      <div className="app__profiles">
        {cardInfo?.map((data, index) => (
          <motion.div
            key={`InfoCard-${data.title}`}
            className="app__profile-item"
            whileInView={{ opacity: 1, y: [100, 0] }}
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

export default Info;
