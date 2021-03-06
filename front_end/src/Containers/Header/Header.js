import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import {
  react_js,
  flutter,
  firebase,
  avatar,
  figma,
  python,
  javascript,
} from "../../Static/technologyImageExporter";
import AppWrap from "../../wrapper/AppWrap";
// import { AppWrap } from "../../wrapper";
import { useSpeechSynthesis } from "react-speech-kit";
import "./Header.scss";

const Header = () => {
  const { speak, cancel, voices } = useSpeechSynthesis();
  const aboutMe = [
    "Hello there!, My Self Vaibhav Pundir",
    "I love working with Front-end techs as well as designs",
    "Lemme create Your Front-end,Both Responsive and ReactJSive",
    "React or angular?.. Huh i love both but excel reactJs better",
    "Let me Figma your layout , I can Handle Colors pretty well ",
    "Is it Your Back-end or Back-ward end?Lemme Bring some FireBase to it!",
    "My education ? yea ! its Master's in computer applications from Chandrigarh University, punjab!",
    "lol! i Can center Your div as well!",
    "I do some leetCode too.. Visit my Leetcode link to look",
    "Have a Look At my LinkedIn profile",
    "I Have created some good learning projects at the bottom!",
  ];
  // const { speak } = useSpeechSynthesis();
  const [shouldSpeak, setShouldSpeak] = useState(false);
  const [marqueeText, setMarqueeText] = useState(aboutMe[0]);
  // shouldSpeak ? speak({ value: marqueeText }) : speak({ value: "" });
  useEffect(() => {
    const textSetter = () => {
      if (shouldSpeak) {
        speak({ text: marqueeText, voice: voices[4] });
      }
      //confusing logic huh,vaibhav was confused too
      setTimeout(() => {
        setMarqueeText(
          aboutMe[aboutMe.length - 1] === marqueeText
            ? aboutMe[0]
            : aboutMe[aboutMe.indexOf(marqueeText) + 1]
        );
      }, 5000);
    };
    textSetter();
  }, [marqueeText, shouldSpeak]);

  useEffect(() => {
    shouldSpeak ? console.log("hello") : cancel();
  }, [shouldSpeak]);

  return (
    <div id="header" className="app__header app__div ">
      <motion.div
        className="app__header-background"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.25 }}

        // transition={{ duration: 1000, delayChildren: 0.2 }}
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <motion.div key={index}></motion.div>
        ))}
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span style={{ fontSize: 38 }}>????</span>
            <div>
              <p className="p-text">Hello I am</p>
              <h1 className="head-text">Vaibhav Pundir</h1>
            </div>
          </div>
        </div>
      </motion.div>
      <div className=" app__flex app__header-skills">
        {[
          "Apsiring web developer",
          "UI/UX Designer",
          "Cross platform Flutter Developer",
        ].map((e, key) => (
          <motion.div
            key={`tagline-${key}`}
            className=""
            animate="show"
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: key }}
          >
            {e}
          </motion.div>
        ))}
      </div>
      <div className="app__flex header__subsection ">
        <div className="header__avatar-marquee app__wrapper app__flex ">
          <img src={avatar}></img>
          <motion.div
            className="header__avatar-marquee-text "
            animate="show"
            whileInView={{
              opacity: [0, 1],
              y: [-200, 0],

              scale: [0, 1],
            }}
            transition={{ delay: 1, ease: "easeInOut" }}
          >
            <div
              style={{
                position: "relative",
                top: "7rem",
                display: "flex",
                alignItems: "center",
                zIndex: 10000000000000,
              }}
              onClick={() => {
                setShouldSpeak(!shouldSpeak);
                // console.log("here");
              }}
            >
              {shouldSpeak ? <BsFillVolumeUpFill /> : <BsFillVolumeMuteFill />}
              <span style={{ marginLeft: "2px" }}>Vaibhav Says!</span>
            </div>
            <motion.div
              whileInView={{
                opacity: [0, 1],
                y: [-200, 0],

                scale: [0, 1],
              }}
              transition={{ delay: 1, ease: "easeInOut" }}
            >
              {marqueeText}
            </motion.div>
          </motion.div>
        </div>
        <div className="header__image">
          {[javascript, python, figma, firebase, react_js, flutter].map(
            (image, key) => (
              <motion.img
                key={key}
                src={image}
                whileInView={{
                  y: [100, 0],
                  opacity: [0, 1],
                  scale: [0, key / 10 + 1],
                }}
                // animate={{ rotate: 10 - 5 * key }}
                // style={{ rotate: 0, x: "calc(50vh - 100px)" }}
                // initial={{ x: "100%" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              ></motion.img>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "header");
