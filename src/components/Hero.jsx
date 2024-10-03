import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";

const Hero = () => {
  return (
    <section className="relative w-full lg:h-screen h-[80vh] ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Ovesh.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Developer Based in India
            <br className="sm:block hidden" /> I love building tools that are
            user-friendly, efficient, and innovative.
          </p>
        </div>
      </div>

      {/* Replace ComputersCanvas with the image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <img
          src="/hero.png"
          alt="hero"
          className="w-[90vw] sm:w-[80vw] md:w-[500px] h-auto object-cover"
        />
      </div>

      <div className="absolute md:bottom-1 hidden w-full md:flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
