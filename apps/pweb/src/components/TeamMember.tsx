'use client';

import { motion } from "framer-motion";

export const TeamMember = () => {
  return (
    <motion.li
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 3,
      }}
      className="p-4 border border-green-200 rounded-md flex flex-row gap-2 items-center translate-y-2"
    >
      <div>
        <h3 className="text-xl font-semibold">name name</h3>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
        <ul className="flex flex-row gap-2 mt-2">
          <li>GitHub</li>
          <li>Twitter</li>
        </ul>
      </div>
    </motion.li>
  );
};
