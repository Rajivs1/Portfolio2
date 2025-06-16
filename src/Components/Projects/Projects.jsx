import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaCode } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import project1Img from "../../assets/fitimg.png";
import project2Img from "../../assets/boxoffice.png";
import project3Img from "../../assets/sc1.png";

const TechIcon = ({ Icon, href, hoverColor }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-text-light dark:text-text-dark hover:${hoverColor} transition-colors duration-300`}
    whileHover={{ scale: 1.2, rotate: 360 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="text-2xl md:text-3xl" />
  </motion.a>
);

TechIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
};

const Projects = () => {
  const projects = [
    {
      title: "FitPro: Fitness Website",
      main: "FitPro is your ultimate fitness companion, designed to help you achieve your health goals through personalized workout plans and expert guidance. Whether you're a beginner or a fitness enthusiast, FitPro makes staying active and healthy effortless and enjoyable.",
      imgSrc: project1Img,
      demoLink: "https://fitprobyrr.netlify.app/",
      sourceCodeLink: "https://github.com/Rajivs1/FitPro",
    },
    {
      title: "StudyNotion: An EdTech Platform",
      main: "StudyNotion is an all-in-one educational platform that connects instructors and students seamlessly. With features like course creation, enrollment, and interactive learning, StudyNotion makes education more accessible and engaging for everyone.",
      imgSrc: project2Img,
      demoLink: "https://github.com/Rajivs1/StudyNotion",
      sourceCodeLink: "https://github.com/Rajivs1/StudyNotion",
    },
    {
      title: "Random Password Generator",
      main: "Random Password Generator is a simple yet powerful tool designed to create secure, random passwords for your online accounts. With customizable options for length and complexity, it ensures your passwords are strong and unique for better security.",
      imgSrc: project3Img,
      demoLink: "https://pawwordgeneratorbyrajivnetlifyapp.netlify.app/",
      sourceCodeLink: "https://github.com/Rajivs1/passwordgenerator",
    },
  ];

  const techIcons = [
    { Icon: FaReact, href: "https://reactjs.org/", hoverColor: "text-blue-500" },
    { Icon: FaHtml5, href: "https://www.w3.org/html/", hoverColor: "text-orange-500" },
    { Icon: FaCss3Alt, href: "https://www.w3.org/Style/CSS/", hoverColor: "text-blue-400" },
    { Icon: FaCode, href: "https://www.codecademy.com/", hoverColor: "text-green-400" },
    { Icon: FaDatabase, href: "https://www.mongodb.com/", hoverColor: "text-green-500" },
  ];

  return (
    <div id="projects" className="relative min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-background-light dark:bg-background-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light/10 via-secondary-light/10 to-primary-dark/10 dark:from-primary-dark/20 dark:via-secondary-dark/20 dark:to-primary-light/20 blur-xl"></div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-text-light dark:text-text-dark"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Tech Icons */}
        <div className="flex justify-center gap-8 flex-wrap">
          {techIcons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TechIcon {...icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
