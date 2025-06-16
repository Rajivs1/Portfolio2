import { motion } from "framer-motion";
import avatarImg from "../../assets/pqr1.png";
import resume from "../../assets/RajivRanjanResume01.pdf";
import TextChange from "../TextChange";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative flex flex-col w-full items-center px-4 py-16 md:px-8 lg:px-16 xl:px-20 space-y-10 bg-background-light dark:bg-background-dark">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-secondary-light to-primary-dark dark:from-primary-dark dark:via-secondary-dark dark:to-primary-light opacity-10 dark:opacity-20 blur-xl z-0"></div>

      {/* Avatar Section with Hover Animation */}
      <motion.div
        className="relative z-10 flex justify-center items-center"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {/* 3D-like Avatar Image */}
        <motion.img
          className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full shadow-lg border-4 border-primary-light dark:border-primary-dark object-cover avatar-rotate"
          src={avatarImg}
          alt="Rajiv Ranjan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Animated Icons Around the Avatar */}
        <motion.div
          className="absolute -top-10 -left-10 text-primary-light dark:text-primary-dark"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <FaReact className="text-3xl md:text-4xl animate-spin-slow" />
        </motion.div>
        <motion.div
          className="absolute -top-10 -right-10 text-secondary-light dark:text-secondary-dark"
          initial={{ scale: 0, rotate: 45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <FaNodeJs className="text-3xl md:text-4xl animate-bounce" />
        </motion.div>
        <motion.div
          className="absolute -bottom-10 left-20 text-primary-light dark:text-primary-dark"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <FaCss3Alt className="text-3xl md:text-4xl animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Text Change Component Below Avatar */}
      <motion.h1
        className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter mt-5 text-text-light dark:text-text-dark"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <TextChange />
      </motion.h1>

      {/* Design Section */}
      <motion.div
        className="w-full md:w-3/4 h-2 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-lg mb-10"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      {/* About Me Section */}
      <div className="w-full md:w-3/4 space-y-6 text-center z-10">
        <motion.div
          className="bg-white/50 dark:bg-background-dark/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        >
          <h2 className="text-lg md:text-2xl font-semibold text-text-light dark:text-text-dark">
            About Me
          </h2>
          <p className="mt-4 text-sm md:text-lg tracking-tight text-text-light dark:text-text-dark leading-relaxed">
            I am a passionate and dedicated final-year B.Tech student in Computer Science, skilled in the MERN stack, C, C++, Python, and Data Structures & Algorithms. I have built impactful projects like StudyNotion, FitPro, and a Random Password Generator, showcasing my creativity and technical expertise.
          </p>
          <p className="mt-4 text-sm md:text-lg tracking-tight text-text-light dark:text-text-dark leading-relaxed">
            I thrive on learning and solving challenges, with a strong focus on innovation. Outside of coding, I love playing cricket, having proudly represented my college in tournaments, and traveling to explore new places and cultures. My journey is driven by a commitment to growth and making meaningful contributions.
          </p>
        </motion.div>

        {/* Download Resume Button */}
        <motion.a
          href={resume}
          download="Rajiv_Ranjan_Resume.pdf"
          className="mt-5 inline-block text-white py-3 px-6 text-sm md:text-lg font-semibold rounded-full bg-primary-light dark:bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary-light transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Download Resume
        </motion.a>
      </div>

      {/* Fun Animated Element */}
      <motion.div
        className="absolute bottom-10 right-10 bg-secondary-light dark:bg-secondary-dark rounded-full w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center text-2xl md:text-3xl text-white animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        🚀
      </motion.div>
    </div>
  );
};

export default Home;
