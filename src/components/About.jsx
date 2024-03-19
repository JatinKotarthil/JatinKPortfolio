import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <h6>🚀 **Passionate Programmer and Physics Enthusiast **</h6>

<p>Passionate about the intersection of physics and technology, I am Jatin Mohan Kotarthil, a driven professional who has seamlessly bridged the gap between the two worlds. With a solid foundation in Physics achieved through my MSc degree, I embarked on a journey to enhance my skills in advanced computing, culminating in the successful completion of PG-DAC from CDAC.</p>

<h6>⚙️ **Skills and Expertise:**</h6>

<p>During my tenure at Lancers Network PVT. LTD. as an IPR-Investigator, I gained invaluable practical experience, honing my abilities to navigate complex technological landscapes. With no educational hiatus, I seamlessly transitioned into the world of IT, continuously seeking opportunities for growth and innovation.
My expertise spans a wide array of technologies, including Java SE/EE, React.js, MySQL, C#, C++, .NET, and Linux. Fueled by a relentless drive to excel, I am eager to channel my passion and skills into contributing meaningfully to the dynamic realm of IT. I am enthusiastic about embracing new challenges and carving out a rewarding career path in the ever-evolving world of technology.</p>

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
