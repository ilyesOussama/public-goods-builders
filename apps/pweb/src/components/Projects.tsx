'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export const Projects = () => {
  return (
    <section className="mt-14 px-4 md:px-0" id="projects">
      <h2 className="text-2xl md:text-3xl text-center mb-6 md:mb-6 font-bold">
        Projects
      </h2>
      <ul className="mx-auto max-w-7xl flex flex-col gap-4 md:gap-6 lg:gap-8">
        <motion.li
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
          className="grid md:grid-cols-2 gap-4"
        >
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            dolore, maiores culpa modi alias doloribus.
          </p>
          <Image alt="project image" src="/placeholder.jpg" width={400} height={350}/>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
          className="grid md:grid-cols-2 gap-4"
        >
          <Image alt="project image" src="/placeholder.jpg" width={400} height={350}/>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            dolore, maiores culpa modi alias doloribus.
          </p>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
          className="grid md:grid-cols-2 gap-4"
        >
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            dolore, maiores culpa modi alias doloribus.
          </p>
          
          <Image alt="project image" src="/placeholder.jpg" width={400} height={350}/>
        </motion.li>
      </ul>
    </section>
  );
};
