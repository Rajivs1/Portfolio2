import { motion } from "framer-motion";
import { FaGlobeAmericas, FaCode, FaBook, FaGamepad, FaMountain } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import PropTypes from 'prop-types';

const InterestCard = ({ Icon, title, description }) => (
  <motion.div
    className="bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl 
    transition-all duration-300 border border-border-light/20 dark:border-border-dark/20 
    hover:bg-card-light/90 dark:hover:bg-card-dark/90 group"
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center mb-4">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="p-3 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300"
      >
        <Icon className="text-2xl text-primary" />
      </motion.div>
      <h3 className="text-xl font-semibold text-text-light dark:text-text-dark ml-4">{title}</h3>
    </div>
    <p className="text-text-light dark:text-text-dark opacity-80 group-hover:opacity-100 transition-opacity duration-300">
      {description}
    </p>
  </motion.div>
);

InterestCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const AboutMe = () => {
  const interests = [
    {
      Icon: GiCricketBat,
      title: "Cricket Enthusiast",
      description: "Passionate about cricket, whether playing on the field or watching intense matches. It&apos;s not just a sport, it&apos;s an emotion!"
    },
    {
      Icon: FaGlobeAmericas,
      title: "World Explorer",
      description: "Dream of traveling the world, experiencing different cultures, and creating memories in every corner of the globe."
    },
    {
      Icon: FaCode,
      title: "Tech Innovation",
      description: "Love exploring new technologies and creating solutions that make a difference in people&apos;s lives."
    },
    {
      Icon: FaGamepad,
      title: "Gaming",
      description: "Enjoy strategic gaming sessions that challenge the mind and provide a fun escape from routine."
    },
    {
      Icon: FaBook,
      title: "Continuous Learning",
      description: "Always eager to learn new things, whether it&apos;s about technology, science, or life skills."
    },
    {
      Icon: FaMountain,
      title: "Adventure Seeker",
      description: "Love trying new experiences and stepping out of my comfort zone for personal growth."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div id="about-me" className="relative min-h-screen py-16 bg-background-light dark:bg-background-dark transition-colors duration-200 overflow-hidden">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light/10 via-secondary-light/10 to-primary-dark/10 
        dark:from-primary-dark/20 dark:via-secondary-dark/20 dark:to-primary-light/20 blur-xl"></div>
      
      {/* Animated background dots */}
      <motion.div
        className="absolute top-16 left-16 w-6 h-6 bg-primary/30 rounded-full"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-16 right-16 w-4 h-4 bg-primary/20 rounded-full"
        animate={{
          x: [0, -15, 15, 0],
          y: [0, 15, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-text-light dark:text-text-dark opacity-90 max-w-2xl mx-auto leading-relaxed">
            Beyond coding, I&apos;m a person with diverse interests and a passion for life. Here&apos;s a glimpse into who I am when I&apos;m not crafting code.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {interests.map((interest, index) => (
            <motion.div key={index} variants={itemVariants}>
              <InterestCard {...interest} />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-card-light/50 dark:bg-card-dark/50 backdrop-blur-sm p-8 rounded-xl border border-border-light/20 dark:border-border-dark/20"
        >
          <blockquote className="text-xl md:text-2xl italic text-text-light dark:text-text-dark opacity-90">
            &quot;Life is about making an impact, not making an income.&quot;
          </blockquote>
          <p className="mt-4 text-primary font-medium">My Life Philosophy</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe; 