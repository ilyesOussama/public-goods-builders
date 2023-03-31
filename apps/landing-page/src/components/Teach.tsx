import { motion } from "framer-motion";

export const Tech = () => {
  return (
    <div>
      <div className="rotate-3 translate-y-2/4 py-4 w-screen opacity-80 bg-green-300 flex items-center justify-center">
        <motion.ul
          initial={{ translateX: 0 }}
          animate={{ translateX: "100%" }}
          exit={{ translateX: 0 }}
          transition={{
            type: "spring",
            repeat: Infinity,
            stiffness: 260,
            damping: 20,
            duration: 30,
          }}
          className="flex flex-row gap-3 overflow-hidden"
        >
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
        </motion.ul>
      </div>
      <div className="-rotate-3 -translate-y-2/4 py-4 w-screen opacity-95 backdrop-blur-sm bg-green-300 flex items-center justify-center shadow-sm">
        <motion.ul className="flex flex-row gap-3 overflow-hidden">
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>

          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
          <li className="h-12 w-12 bg-red-300">1</li>
        </motion.ul>
      </div>
    </div>
  );
};
