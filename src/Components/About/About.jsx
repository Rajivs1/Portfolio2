import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode, FaLaptop, FaMouse, FaKeyboard } from "react-icons/fa";
import { SiMongodb, SiExpress, SiCplusplus, SiPython, SiIntellijidea, SiPycharm, SiMysql } from "react-icons/si";
import { MdOutlineCode } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";

const SkillIcon = ({ Icon, name }) => (
  <motion.div
    className="flex flex-col items-center p-4 rounded-lg bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm border border-gray-200/10 dark:border-gray-700/10"
    whileHover={{ scale: 1.1, rotateY: 10 }}
    whileTap={{ scale: 0.9, rotateX: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="text-4xl md:text-5xl text-primary-light dark:text-primary-dark mb-2" />
    <span className="text-sm md:text-base text-text-light dark:text-text-dark">{name}</span>
  </motion.div>
);

SkillIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

const About = () => {
  const skills = [
    { Icon: FaHtml5, name: "HTML" },
    { Icon: FaCss3Alt, name: "CSS" },
    { Icon: FaJs, name: "JavaScript" },
    { Icon: FaReact, name: "ReactJS" },
    { Icon: FaNodeJs, name: "NodeJS" },
    { Icon: SiExpress, name: "ExpressJS" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiCplusplus, name: "C++" },
    { Icon: SiPython, name: "Python" },
    { Icon: MdOutlineCode, name: "Java" },
    { Icon: IoArrowForward, name: "DSA" },
    { Icon: SiMysql, name: "SQL" },
  ];

  const tools = [
    { Icon: FaGitAlt, name: "Git" },
    { Icon: FaGithub, name: "GitHub" },
    { Icon: FaCode, name: "VS Code" },
    { Icon: SiIntellijidea, name: "IntelliJ IDEA" },
    { Icon: SiPycharm, name: "PyCharm" },
  ];

  const cornerIcons = [
    { Icon: FaLaptop, position: "top-4 left-4" },
    { Icon: FaMouse, position: "top-4 right-4" },
    { Icon: FaKeyboard, position: "bottom-4 left-4" },
    { Icon: SiMongodb, position: "bottom-4 right-4" },
  ];

  return (
    <div
      id="about"
      className="min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-background-light dark:bg-background-dark relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light/10 via-secondary-light/10 to-primary-dark/10 dark:from-primary-dark/20 dark:via-secondary-dark/20 dark:to-primary-light/20 blur-xl"></div>

      {/* Corner Icons */}
      {cornerIcons.map(({ Icon, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} text-primary-light dark:text-primary-dark`}
          whileHover={{ rotate: 15, scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="text-3xl md:text-4xl" />
        </motion.div>
      ))}

      <div className="container mx-auto relative z-10">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-text-light dark:text-text-dark">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
            {skills.map((skill, index) => (
              <SkillIcon key={index} {...skill} />
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-text-light dark:text-text-dark">
            Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {tools.map((tool, index) => (
              <SkillIcon key={index} {...tool} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
