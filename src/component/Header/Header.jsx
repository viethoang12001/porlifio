import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants, getMenuStyles } from "../../utils/motion";
import useHederShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHederShadow();
  const menuRef = useRef();
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}c
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Viet Hoang</div>
        <ul
          ref={menuRef}
          className={` flexCenter ${css.menu}`}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#experience">Services</a>
          </li>
          <li>
            <a href="#works">Experience</a>
          </li>
          <li>
            <a href="#Portfolio"> portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>0702609815</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        <div
          className={`${css.menuIcon}`}
          onClick={() => setMenuOpened((pre) => !pre)}
        >
          <BiMenuAltRight size={40} />
        </div>
      </div>
    </motion.div>
  );
};
export default Header;
