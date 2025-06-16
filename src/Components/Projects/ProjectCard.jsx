import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, main, imgSrc, demoLink, sourceCodeLink }) => {
  return (
    <motion.div
      className="w-full sm:w-[340px] md:w-[380px] lg:w-[400px] bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:shadow-gray-900 rounded-2xl overflow-hidden transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden group">
        <motion.img
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          src={imgSrc}
          alt={title}
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-text-light dark:text-text-dark text-center mb-4">
          {title}
        </h3>
        
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-center mb-6 line-clamp-3">
          {main}
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-auto">
          <motion.a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-base font-semibold text-white bg-primary-light dark:bg-primary-dark rounded-full hover:bg-primary-dark dark:hover:bg-primary-light transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="text-sm" />
            Demo
          </motion.a>

          <motion.a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-base font-semibold text-white bg-secondary-light dark:bg-secondary-dark rounded-full hover:bg-secondary-dark dark:hover:bg-secondary-light transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-sm" />
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  sourceCodeLink: PropTypes.string.isRequired,
};

export default ProjectCard;
