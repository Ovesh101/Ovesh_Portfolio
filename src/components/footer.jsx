import React from 'react'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { github, instagram, twitter, linkedin } from '../assets'


const footer = () => {
  return (
    <div className='flex  items-center -mt-[52px] h-[103px] overflow-hidden justify-center'>
        <motion.div variants={
            fadeIn('right', "",0.2,1 )
        } 
            className='flex h-2 flex-col mb-5 items-center'>
        <p className={`${styles.sectionSubText} -mt-2 mb-2`}>Let's Connect </p>
        <div className='flex flex-row mb-2 justify-center items-center'>
        <div
            className=" space-x-7 flex justify-center m-3 -mt-1">
            <div
              className="mt-1 w-[1.9rem] h-[1.9rem]  rounded-full flex
                   justify-evenly items-center cursor-pointer" 
            >
              <img 
                src={github}
                alt="github"
                className="w-8 h-8 object-contain"
                onClick={() => window.open("https://github.com/Ovesh101/","_blank")}      
              />
              </div>
              <div
              className=" mt-1 w-[1.9rem] h-[1.9rem] bg-white rounded-full flex
                  justify-center items-center cursor-pointer" 
            >
               <img 
                src={instagram}
                alt="github"
                className="w-8 h-8 object-contain" 
                onClick={() => window.open("https://www.instagram.com/ov_esh/","_blank")}     
              />
              </div>
              <div
              className="mt-1 w-[1.9rem] h-[1.9rem] bg-white rounded-full flex
                  justify-center items-center cursor-pointer" 
            >
               <img 
                src={twitter}
                alt="github"
                className=" w-8 h-8 object-cover"      
                onClick={() => window.open("https://x.com/Ove_sh123","_blank")}
              />
              </div>
              <div
              className="mt-1 w-[1.9rem] h-[1.9rem] bg-white rounded-full flex
                  justify-center items-center cursor-pointer" 
            >
               <img 
                src={linkedin}
                alt="github"
                className="w-8 h-8 object-cover"      
                onClick={() => window.open("https://www.linkedin.com/in/ovesh-mulla/","_blank")}
              />
            </div>
          </div>
        </div>  
        </motion.div>
        </div>
  )
}

export default footer