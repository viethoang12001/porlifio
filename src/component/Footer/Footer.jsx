import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  footerVariants,
  slideIn,
  staggerChildren,
  staggerContainer,
} from "../../utils/motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPadding flexCenter ${css.container}`}
      >
        <div className={` ${css.left}`}>
          <span className="primaryText">
            Let's make something <br /> amzing together.
          </span>
          <span className="primaryText">
            Start by{" "}
            <a href="mailto:viethoang0112001@gmai.com.com?subject=Support&body=Message">
              saying hi
            </a>
          </span>
        </div>
        <div className={` ${css.right}`}>
          <div className={` ${css.info}`}>
            <span className="secondaryText">Information</span>
            <p>Hòa Phước, Hòa Vang, Đà Nẵng</p>
          </div>
          <div className={` ${css.menu}`}>
            <li>Service</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
