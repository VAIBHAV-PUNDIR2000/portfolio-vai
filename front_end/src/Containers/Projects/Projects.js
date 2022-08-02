import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import AppWrap from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client";
import "./Projects.scss";
// import background from "../../Static/Constants/projects.svg";
// import background2 from "../../Static/Constants/projects2.svg";

const Projects = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id="works" className="app__projects-main">
      <motion.div
        className="app__projects-background"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.25 }}

        // transition={{ duration: 1000, delayChildren: 0.2 }}
      >
        {[1, 2, 3, 4, 5].map((_, key) => (
          <motion.div key={key}></motion.div>
        ))}
      </motion.div>
      <div style={{ width: "100%", height: "2rem" }}></div>
      <motion.h2
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="head-text top-text"
      >
        My <span>Work and Project</span> Section
      </motion.h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.length > 0 ? (
          filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: [0.5, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p
                  className="p-text"
                  style={{ marginTop: 10, minHeight: "20vh" }}
                >
                  {work.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1
            style={{
              display: "flex",
              height: "40vh",
              justifyContent: "center",
              alignItems: "center",
              color: "var(--gray-color)",
            }}
          >
            more works to come...
          </h1>
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Projects, "projects");
