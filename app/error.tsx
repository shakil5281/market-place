"use client";

import { motion } from "framer-motion";

export default function ErrorComponent() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-red-100"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold text-red-500 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Oops!
        </motion.h1>
        <motion.p
          className="text-xl text-red-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Something went wrong. Please try again later.
        </motion.p>
        <motion.a
          href="/"
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Back Home
        </motion.a>
      </div>
    </motion.div>
  );
}
