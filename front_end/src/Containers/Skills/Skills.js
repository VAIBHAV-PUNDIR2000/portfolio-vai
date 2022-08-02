import React, { useState, useEffect } from "react";
import "./Skills.scss";
import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [filterSkills, setFilterSkills] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Design");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
      // handleskillsFilter(activeFilter);
    });
  }, []);
  useEffect(() => {
    handleskillsFilter(activeFilter);
  }, [skills]);

  const handleskillsFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      setFilterSkills(skills.filter((i) => i.category === item));
    }, 500);
  };
  return (
    <div id="skills" className="app__skills-main">
      <div style={{ width: "100%", height: "2rem" }}></div>
      <motion.h2
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="head-text top-text"
      >
        <span>Skills</span> Section
      </motion.h2>

      <div className="app__skills-filter">
        {["Development", "Design", "Database"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleskillsFilter(item)}
            className={`app__skills-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__skills-portfolio"
      >
        {filterSkills.length > 0 ? (
          filterSkills.map((skills, index) => (
            <div className="app__skills-item app__flex" key={index}>
              <div className="app__skills-img app__flex">
                <img
                  src={
                    skills.icon
                      ? urlFor(skills.icon)
                      : `https://source.unsplash.com/tech`
                  }
                  alt={skills.name}
                />
              </div>

              <div className="app__skills-content app__flex">
                <h4 className="bold-text">{skills.name}</h4>
                <div>
                  <ReactStars
                    edit={false}
                    value={skills.rating}
                    activeColor="black"
                  />
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
            more skills to come...
          </h1>
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Skills, "skills");
