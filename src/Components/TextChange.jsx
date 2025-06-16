import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TextChange = () => {
  const texts = [
    "Hi, I'm Rajiv Ranjan",
    "Welcome to my website!",
  ]; // Removed the last line
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isForward) {
        setEndValue((prev) => (prev < texts[index].length ? prev + 1 : prev));
      } else {
        setEndValue((prev) => (prev > 0 ? prev - 1 : prev));
      }

      if (endValue === texts[index].length && isForward) {
        setTimeout(() => setIsForward(false), 800); // Pause before deleting
      }

      if (endValue === 0 && !isForward) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 120);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  useEffect(() => {
    setCurrentText(texts[index].substring(0, endValue));
  }, [endValue, index, texts]);

  return (
    <motion.div
      className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Text Container */}
      <motion.div
        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={index} // Trigger animation on text change
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {currentText}
      </motion.div>

      {/* Animated Underline */}
      <motion.div
        className="w-full h-1 mt-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      ></motion.div>

      {/* Background Glow Effect */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 rounded-full bg-purple-500 blur-3xl opacity-20 animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
    </motion.div>
  );
};

export default TextChange;
