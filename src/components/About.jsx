import { motion } from "framer-motion";
import WebAbout from "../assets/WebFocused.png";

function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 flex items-center justify-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
        <div>
          <p className="text-purple-400 tracking-widest uppercase text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Building digital experiences with
            <span className="text-purple-400"> clarity and precision</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I am a frontend developer focused on creating clean, responsive and
            user-friendly web applications. I enjoy turning ideas into real
            products that feel smooth, modern, and intentional.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            My focus is not just code, but how users feel when they interact
            with what I build.
          </p>
        </div>

       
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500 opacity-5 blur-3xl rounded-full"></div>

          <img
            src={WebAbout}
            alt="About me"
            className="relative w-full h-auto max-w-sm mx-auto rounded-2xl object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default About;
