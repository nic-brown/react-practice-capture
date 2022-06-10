import React from "react";

import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <About>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        {/* IF YOU WANT TO DISABLE STAGGERING ON A PARTICULAR ELEMENT JUST WRITE INITIAL={HIDDEN} ANIMATE={SHOW}         
        <motion.img variants={photoAnim} initial={hidden} animate={show} src={home1} alt="guy with a camera" />
        */}
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//styled components

export default AboutSection;
