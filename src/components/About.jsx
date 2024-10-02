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
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="flex flex-col  mx-auto  p-4">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[15px] sm:text-[17px] leading-[24px] sm:leading-[30px]"
      >
        "I am a self-taught frontend and backend developer with a passion for building projects from scratch. Through various personal and collaborative projects, I’ve honed my skills in creating flexible and efficient solutions.
        <br className="sm:block hidden" /> My approach focuses on clarity, creativity, and a collaborative mindset to deliver exceptional user experiences."
        <br className="sm:block hidden" /> I am currently looking for a new role as a Developer. <strong>Hire me?</strong>
      </motion.p>
      <div className="mt-6">
        <p className="font-bold text-[16px] sm:text-[18px]">
          I can help you out with:
        </p>
        <ul className="list-disc pl-5 mt-2 text-left">
          <li><strong>React.js Development</strong></li>
          <li><strong>Next.js Development</strong></li>
          <li><strong>Node.js Development</strong></li>
          <li>and more...</li>
        </ul>
      </div>
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
