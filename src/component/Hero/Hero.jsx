import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` innerWidth ${css.container}`}
      >
      <a className="anchor" id="portfolio"></a>
        {/* upperElement */}
        <div className={` ${css.upperElement}`}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey there, <br /> I'm Viet Hoang{" "}
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            I design beautifull simple
            <br />
            things, And I love that I do
          </motion.span>
        </div>
        {/* email */}

        <motion.a
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={` ${css.email}`}
          href="mailto:viethoang0112001@gmai.com"
        >
          viethoang0112001@gmai.com
        </motion.a>

        {/* person img */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={` ${css.person}`}
        >
          <motion.img
            variants={fadeIn("up", "tween", 0.2, 1)}
            src="./person.png"
            alt=""
          />
        </motion.div>

        {/* lowerElement */}
        <div className={` ${css.lowerElement}`}>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={` ${css.experience}`}
          >
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>year</div>
              <div>experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className={` ${css.certificate}`}
          >
            <img src="./certificate.png" alt="certificate" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UX/UI DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
