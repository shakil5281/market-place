"use client";

import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gray-50"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="text-center">
        <motion.h1
          className="text-9xl font-extrabold text-indigo-600 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl font-medium text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Oops! The page you're looking for isn't here.
        </motion.p>
        <motion.a
          href="/"
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Back Home
        </motion.a>
      </div>
    </motion.div>
  );
}
