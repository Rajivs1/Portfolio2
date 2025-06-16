import { motion } from "framer-motion";
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import PropTypes from 'prop-types';

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 rounded-xl bg-card-light/30 dark:bg-card-dark/30 
      backdrop-blur-md border border-primary-light/10 dark:border-primary-dark/10 shadow-glass overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    aria-label={label}
  >
    {/* Icon Container */}
    <div className="relative z-10 text-xl text-text-light dark:text-text-dark 
      hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300">
      {icon}
    </div>

    {/* Hover Effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-primary-light/5 via-secondary-light/5 to-accent-light/5 
        dark:from-primary-dark/10 dark:via-secondary-dark/10 dark:to-accent-dark/10 opacity-0 group-hover:opacity-100 
        transition-opacity duration-500"
    />
  </motion.a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/Rajivs1",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/rajiv-ranjan1/",
      label: "LinkedIn"
    },
    {
      icon: <FaTwitter size={24} />,
      href: "https://x.com/RajivRa24145798",
      label: "Twitter"
    }
  ];

  return (
    <footer className="relative py-12 px-4 md:px-8 lg:px-16 bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-light/50 dark:via-primary-dark/50 to-transparent" />
      
      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </motion.div>

          {/* Credits */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Made with Love */}
            <div className="group relative inline-block">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary-light via-secondary-light to-accent-light 
                  dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark rounded-lg blur opacity-25 
                  group-hover:opacity-75 transition duration-500"
              />
              <p className="relative flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
                bg-card-light/30 dark:bg-card-dark/30 backdrop-blur-sm text-text-light dark:text-text-dark">
                Made with 
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FaHeart className="text-red-500" size={20} />
                </motion.span>
                by Rajiv Ranjan
              </p>
            </div>
            
            {/* Developer Info */}
            <div className="space-y-2">
              <p className="text-lg font-medium bg-gradient-to-r from-primary-light via-secondary-light to-accent-light 
                dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark text-transparent bg-clip-text">
                Full Stack Developer | MERN Stack Enthusiast
              </p>
              <p className="text-text-light/80 dark:text-text-dark/80">
                Turning Ideas into Reality through Code
              </p>
              <p className="text-sm text-text-light/60 dark:text-text-dark/60">
                &copy; {currentYear} All rights reserved.
              </p>
            </div>

            {/* Technologies */}
            <div className="group relative mt-8 inline-block">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary-light via-secondary-light to-accent-light 
                  dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark rounded-lg blur opacity-25 
                  group-hover:opacity-75 transition duration-500"
              />
              <div className="relative px-6 py-4 rounded-lg bg-card-light/30 dark:bg-card-dark/30 backdrop-blur-sm">
                <p className="text-sm font-medium text-text-light/80 dark:text-text-dark/80 mb-2">
                  Technologies Used
                </p>
                <p className="text-sm bg-gradient-to-r from-primary-light via-secondary-light to-accent-light 
                  dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark text-transparent bg-clip-text">
                  React • Tailwind CSS • Framer Motion • Node.js • MongoDB • Express
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-2 -left-2 w-32 h-32 bg-gradient-to-r from-primary-light/20 via-secondary-light/20 
            to-accent-light/20 dark:from-primary-dark/20 dark:via-secondary-dark/20 dark:to-accent-dark/20 rounded-full 
            blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-r from-accent-light/20 via-primary-light/20 
            to-secondary-light/20 dark:from-accent-dark/20 dark:via-primary-dark/20 dark:to-secondary-dark/20 rounded-full 
            blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>
    </footer>
  );
};

export default Footer; 