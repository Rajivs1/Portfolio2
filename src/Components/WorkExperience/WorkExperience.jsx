import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaCode } from "react-icons/fa";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Khuban Software Development",
      position: "Software Developer Intern",
      duration: "January 2025 - June 2025",
      description: [
        "Contributed to the development of web and mobile applications using React and React Native, delivering high-quality, responsive user interfaces.",
        "Gained hands-on experience with .NET framework, progressing through Web Forms development and building robust backend solutions.",
        "Developed proficiency in SQL Server, designing and optimizing database queries for improved application performance.",
        "Collaborated with senior developers in an Agile environment, participating in code reviews and daily stand-ups.",
        "Implemented responsive design principles and modern UI/UX practices across multiple projects.",
      ],
      technologies: ["React", "React Native", ".NET", "SQL Server", "Web Forms"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div id="work-experience" className="py-16 bg-background-light dark:bg-background-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-text-light dark:text-text-dark mb-4 transition-colors duration-200">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card-light dark:bg-card-dark rounded-lg p-6 shadow-lg dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-border-light dark:border-border-dark"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <FaBriefcase className="text-primary mr-2" size={24} />
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark transition-colors duration-200">{exp.company}</h3>
                </div>
                <div className="flex items-center text-text-light dark:text-text-dark opacity-80 transition-colors duration-200">
                  <FaCalendar className="mr-2" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-primary transition-colors duration-200">{exp.position}</h4>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-text-light dark:text-text-dark opacity-90 flex items-start transition-colors duration-200">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                <FaCode className="text-primary mr-2 mt-1" />
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary bg-opacity-10 dark:bg-opacity-20 text-primary rounded-full text-sm transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience; 