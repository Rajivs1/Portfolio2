import { FaLinkedin, FaGithub, FaWhatsapp, FaTimes, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  // Social media accounts with details
  const accounts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={40} />,
      link: "https://www.linkedin.com/in/rajiv-ranjan1/",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={40} />,
      link: "https://github.com/Rajivs1",
      color: "from-gray-700 to-black",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={40} />,
      link: "https://wa.me/918521982915",
      color: "from-green-500 to-green-600",
    },
    {
      name: "X (formerly Twitter)",
      icon: <FaTimes size={40} />,
      link: "https://x.com/RajivRa24145798",
      color: "from-blue-400 to-blue-500",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={40} />,
      link: "mailto:rajeev04632@gmail.com",
      color: "from-red-400 to-orange-400",
    },
    {
      name: "Phone",
      icon: <FaPhoneAlt size={40} />,
      link: "tel:+91-8521982915",
      color: "from-teal-500 to-teal-600",
    },
  ];

  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      id="contact"
      className="relative p-10 md:p-24 bg-gradient-to-r from-navy to-purple-900 overflow-hidden"
    >
      {/* Background Animation Graphics */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-600 blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400 to-yellow-500 blur-3xl opacity-50 animate-pulse"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-5xl text-white font-bold mb-12 text-center">
          Let&apos;s Connect!
        </h1>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Map over the accounts */}
          {accounts.map((account, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center bg-gradient-to-r ${account.color} p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-500`}
              variants={itemVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="text-white mb-4">{account.icon}</div>
              <a
                href={account.link}
                className="text-white text-lg font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {account.name}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Dots Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-16 w-6 h-6 bg-white rounded-full"
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
          className="absolute bottom-16 right-16 w-4 h-4 bg-white rounded-full"
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
      </div>
    </div>
  );
};

export default Contact; 