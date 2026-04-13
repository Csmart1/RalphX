import React from "react";
import { motion } from "framer-motion";
import Restaurant from "../assets/Restaurant.jpg.png";
import Travel from "../assets/Travel.jpg.png";
import Weather from "../assets/Weather.jpg.png";
import Game from "../assets/Game.jpg.png";
function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 flex items-center justify-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">
            <a
              href="https://csmart1.github.io/Premium-restaurant/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Restaurant}
                alt="Michelin Project"
                className="w-full h-64 md:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </a>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Michelin Restaurant UI
              </h3>

              <p className="text-gray-400 mb-4">
                A premium restaurant UI inspired by Michelin-style presentation.
              </p>

              <p className="text-sm text-purple-400 mb-4">
                HTML • CSS • JAVASCRIPT
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://csmart1.github.io/Premium-restaurant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  Live Site
                </a>

                <a
                  href="https://github.com/Csmart1/Premium-restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

         
          <div className="border border-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">
            <a
              href="//weather-sky-ralphx.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Weather}
                className="w-full h-64 md:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </a>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Weather App</h3>
              <p className="text-gray-400 mb-4">
                Real-time weather application using API integration and dynamic
                UI updates.
              </p>
              <p className="text-sm text-purple-400 mb-4">
                React • API Integration • Tailwind CSS
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://weather-sky-ralphx.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/Csmart1/weather-now/tree/main/src"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

        
          <div className="border border-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">
            <a
              href="https://csmart1.github.io/Memory-game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Game}
                className="w-full h-64 md:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </a>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Memory Game</h3>
              <p className="text-gray-400 mb-4">
                Interactive memory game built with JavaScript logic and DOM
                manipulation.
              </p>
              <p className="text-sm text-purple-400 mb-4">
                JavaScript • DOM Logic
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://csmart1.github.io/Memory-game/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/Csmart1/Memory-game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

        
          <div className="border border-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">
            <a
              href="https://csmart1.github.io/travel-better/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Travel}
                className="w-full h-64 md:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </a>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Travel Agency Website
              </h3>
              <p className="text-gray-400 mb-4">
                Modern travel landing page with dwith contact page for booking
                UI.
              </p>
              <p className="text-sm text-purple-400 mb-4">
                HTML • CSS • JavaScript
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://csmart1.github.io/travel-better/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/Csmart1/travel-better"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
