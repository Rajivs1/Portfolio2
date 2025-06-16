import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const HireMeForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    emailjs.sendForm(
      'service_4q54sua',
      'template_klibqa7',
      form.current,
      'YOUR_PUBLIC_KEY' // Replace this with your actual public key from EmailJS
    )
      .then(() => {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        form.current.reset();
      })
      .catch((error) => {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.'
        });
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      id="HireMe"
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-background-light dark:bg-background-dark relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light/10 via-secondary-light/10 to-accent-light/10 
          dark:from-primary-dark/20 dark:via-secondary-dark/20 dark:to-accent-dark/20 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] 
          dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_50%)]"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-light via-secondary-light to-accent-light 
              dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark text-transparent bg-clip-text"
          >
            Hire Me
          </motion.h2>
          <motion.div
            className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-primary-light via-secondary-light to-accent-light 
              dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p className="mt-6 text-lg text-text-light/80 dark:text-text-dark/80">
            Interested in working with me? Let&apos;s discuss your project!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-card-light/30 dark:bg-card-dark/30 backdrop-blur-md p-8 rounded-2xl shadow-glass"
          >
            <div>
              <label className="block text-text-light dark:text-text-dark mb-2 font-medium">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-xl bg-background-light/50 dark:bg-background-dark/50 
                  border border-primary-light/10 dark:border-primary-dark/10 focus:border-primary-light 
                  dark:focus:border-primary-dark outline-none transition-colors duration-300
                  text-text-light dark:text-text-dark placeholder-text-light/50 dark:placeholder-text-dark/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-text-light dark:text-text-dark mb-2 font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-xl bg-background-light/50 dark:bg-background-dark/50 
                  border border-primary-light/10 dark:border-primary-dark/10 focus:border-primary-light 
                  dark:focus:border-primary-dark outline-none transition-colors duration-300
                  text-text-light dark:text-text-dark placeholder-text-light/50 dark:placeholder-text-dark/50"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-text-light dark:text-text-dark mb-2 font-medium">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-background-light/50 dark:bg-background-dark/50 
                  border border-primary-light/10 dark:border-primary-dark/10 focus:border-primary-light 
                  dark:focus:border-primary-dark outline-none transition-colors duration-300
                  text-text-light dark:text-text-dark placeholder-text-light/50 dark:placeholder-text-dark/50"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {submitStatus.message && (
              <div className={`p-4 rounded-xl ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/10 text-green-500' 
                  : 'bg-red-500/10 text-red-500'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-semibold
                bg-gradient-to-r from-primary-light via-secondary-light to-accent-light 
                dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark rounded-xl text-white 
                shadow-glass overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-light via-primary-light to-secondary-light 
                dark:from-accent-dark dark:via-primary-dark dark:to-secondary-dark opacity-0 group-hover:opacity-100 
                transition-opacity duration-500" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default HireMeForm;
