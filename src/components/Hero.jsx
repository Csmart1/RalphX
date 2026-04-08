import React from "react";
import { motion } from "framer-motion";
import ProfileImg from "../assets/gemini1.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-10 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12"
      >
        <div className="max-w-xl">
          <p className="text-purple-400 mb-4 tracking-widest uppercase text-sm">
            Frontend Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
            Crafting clean and{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              premium
            </span>{" "}
            web experiences
          </h1>

          <p className="mt-6 text-gray-400">
            I build responsive, visually refined applications with a focus on
            performance and user experience.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-500 rounded-md text-black font-medium hover:bg-purple-400 hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-500 rounded-md hover:border-purple-400 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative mt-10 md:mt-0 flex-1 flex justify-center">
          {/* The Glow Effect */}
          <div className="absolute inset-0 bg-purple-600 opacity-20 blur-[100px] rounded-full"></div>

          <motion.img
            // Adding a subtle float animation to make it feel "premium"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src={ProfileImg}
            alt="Ralph"
            // Use max-w to ensure it doesn't get TOO big, but stays large
            className="relative w-full max-w-[500px] md:max-w-[600px] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
