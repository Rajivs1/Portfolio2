// import React from "react";
// import { motion } from "framer-motion";

// const Certificates = () => {
//   // Certificates data with assets stored in the "public/assets" folder
//   const certificates = [
//     {
//       title: "Node.js Master Class",
//       provider: "Udemy",
//       date: "July 2024",
//       file: "nodejs-master-class.pdf", // Certificate file stored in assets
//     },
//     {
//       title: "Soft Skills Certification",
//       provider: "Crack-Ed",
//       date: "March 2024",
//       file: "soft-skills-certification.pdf",
//     },
//     {
//       title: "Full-Stack Development",
//       provider: "Coursera",
//       date: "August 2023",
//       file: "full-stack-development.pdf",
//     },
//     {
//       title: "Advanced React and Redux",
//       provider: "Udemy",
//       date: "November 2024",
//       file: "advanced-react-redux.pdf",
//     },
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.2,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div
//       id="Certificates"
//       className="relative p-10 md:p-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
//     >
//       {/* Background graphics */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-400 to-blue-500 blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-500 blur-3xl opacity-30 animate-pulse"></div>

//       <div className="max-w-5xl mx-auto relative z-10">
//         <h1 className="text-5xl font-bold mb-12 text-center">My Certifications</h1>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {certificates.map((certificate, index) => (
//             <motion.div
//               key={index}
//               className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform transition duration-500"
//               variants={itemVariants}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <h2 className="text-xl font-bold mb-2">{certificate.title}</h2>
//               <p className="text-sm text-gray-400 mb-4">{certificate.provider}</p>
//               <p className="text-sm text-gray-500 mb-4">{certificate.date}</p>
//               <a
//                 href={`/assets/${certificate.file}`} // Dynamically link to the assets folder
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:underline"
//               >
//                 View Certificate
//               </a>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Animated floating dots */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute top-16 left-16 w-4 h-4 bg-white rounded-full"
//           animate={{
//             x: [0, 20, -20, 0],
//             y: [0, -20, 20, 0],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         ></motion.div>
//         <motion.div
//           className="absolute bottom-16 right-16 w-6 h-6 bg-white rounded-full"
//           animate={{
//             x: [0, -15, 15, 0],
//             y: [0, 15, -15, 0],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         ></motion.div>
//       </div>
//     </div>
//   );
// };

// export default Certificates;
