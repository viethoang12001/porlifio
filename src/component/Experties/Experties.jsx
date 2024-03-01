import React from "react";
import css from "./Experties.module.scss";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../../utils/motion";
const Experties = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <a className="anchor" id="experience"></a>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={`${css.leftSide}`}>
          {projectExperience.map((experience, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={`${css.exp}`}
                key={i}
              >
                <div
                  className="flexCenter"
                  style={{ backgroundColor: experience.bg }}
                >
                  <experience.icon size={25} color="while" />
                </div>
                <div>
                  <span>{experience.name}</span>
                  <span className="primaryText">
                    {experience.projects} Projects
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div variants={textVariant(0.5)} className={`${css.rightSide}`}>
          <span className="primaryText">What do i help?</span>
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <span className="secondaryText" key={i}>
                {paragraph}
              </span>
            );
          })}
          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">285+</span>
              <span className="secondaryText"> Projects Completed</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">190+</span>
              <span className="secondaryText"> Happy Client</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experties;
