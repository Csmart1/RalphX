import React from "react";
import { motion } from "framer-motion";
import ProfileImg from "../assets/gemini1.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-between pt-10 px-6 md:px-10 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
    flex flex-col lg:flex-row
    items-center
    justify-between
    w-full max-w-6xl mx-auto
    gap-12 lg:gap-16
  "
      >
        {/* Text */}
        <div className="w-full lg:w-1/2 max-w-xl text-left lg:text-left">
          <p className="text-purple-400 mb-4 tracking-widest uppercase text-sm">
            Full-Stack Developer
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
            Crafting clean and{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              premium
            </span>{" "}
            web experiences
          </h1>

          <p className="mt-6 text-gray-400">
            I bridge the gap between high-end design and complex technical
            architecture. By building responsive, visually refined applications
            supported by solid backend logic, I create end-to-end solutions that
            drive performance and user engagement.
          </p>

          <div className="mt-8 flex flex-wrap justify-start lg:justify-start gap-4">
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

        {/* Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="absolute inset-0 bg-purple-600 opacity-20 blur-[100px] rounded-full"></div>

          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src={ProfileImg}
            alt="Ralph"
            className="
            relative
            w-[280px]
            sm:w-[340px]
            md:w-[420px]
            lg:w-full
            max-w-[550px]
            h-auto
            object-contain
            drop-shadow-2xl
          "
          />
        </div>
      </motion.div>

      <div className="flex justify-left mt-10 pb-4">
        <div className="text-gray-500 text-sm animate-bounce">↓ Scroll</div>
      </div>
    </section>
  );
}

export default Hero;
