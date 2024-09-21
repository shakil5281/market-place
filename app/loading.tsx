"use client";

import { motion } from "framer-motion";

export default function LoadingComponent() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-10 h-10 border-2 border-sky-300 border-t-transparent rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
