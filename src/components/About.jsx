import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-30 h-30 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        "I am a self-taught frontend and backend developer with a passion for
        building projects from scratch. Through various personal and
        collaborative projects, I’ve honed my skills in creating flexible and
        efficient solutions.
        <div></div>
        <br className="sm:block hidden" /> My approach focuses on clarity,
        creativity, and a collaborative mindset to deliver exceptional user
        experiences."
        <div></div>
        <br className="sm:block hidden" /> I am currently looking for a new role
        as a Developer. <strong>Hire me?</strong>
        <div class="services">
          <p>I can help you out with:</p>
          <ul class="service-list">
            <li>
              <strong>React.js Development</strong>
            </li>
            <li>
              <strong>Next.js Development</strong>
            </li>
            <li>
              <strong>Node.js Development</strong>
            </li>
            <li>and more...</li>
          </ul>
        </div>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
