import React from "react";
import { motion } from "framer-motion";
import Restaurant from "../assets/Restaurant.jpg.png";
import Chikinimonie from "../assets/Chikinimonie.png";
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
                La Notte: Restaurant UI
              </h3>

              <p className="text-gray-400 mb-4">
               La Notte is a premium frontend project designed to capture the sophisticated atmosphere of a high-end Italian restaurant. Built using HTML, CSS, and Javascript, the application features a cinematic dark aesthetic with gold accents to reflect a sense of excellence and luxury. The design focuses on high-impact visual storytelling, utilizing a clean, modern layout to showcase curated menus and reservation calls-to-action. By prioritizing technical precision and responsive design, I created a professional digital experience that aligns with a Michelin-star quality brand identity.
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
                Weather Now is a high-performance weather application built with React and Tailwind CSS that delivers accurate, real-time meteorological data. By integrating the Open-Meteo API, the platform provides users with detailed current conditions, hourly breakdowns, and a comprehensive seven-day forecast. The application features advanced data visualization for key metrics including wind speed, humidity, and precipitation probability, all housed within a modern, dark-themed interface optimized for readability. I prioritized clean API integration and responsive design to ensure a seamless experience across all devices while maintaining high technical performance and data accuracy.
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
                This project is a web-based memory game inspired by the classic Simon game, designed to test and improve cognitive recall. Developed using HTML, CSS, and vanilla JavaScript, the application relies heavily on complex DOM manipulation and event-driven programming to manage real-time game states. I engineered the core logic to generate increasingly difficult randomized sequences, requiring the system to validate user input against stored arrays while providing immediate visual and auditory feedback. By focusing on clean code architecture and seamless user interaction, I created an engaging, responsive experience that demonstrates a strong mastery of fundamental web technologies and algorithmic thinking.
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
              href="https://chikinimonie-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Chikinimonie}
                className="w-full h-64 md:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </a>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Chikinimonie
              </h3>
              <p className="text-gray-400 mb-4">
               The Chikinimonie project is a high-end restaurant web application that blends cinematic design with practical business logic. Developed using Next.js and Tailwind CSS, the platform features a custom-engineered ordering system that integrates directly with WhatsApp, capturing user selections and converting them into structured messages for the business. To support real-world dining operations, I implemented table-tracking functionality using URL query parameters to automatically identify customer locations. The result is a professional, high-performance solution that bridges the gap between sophisticated frontend aesthetics and functional operational tools.
              </p>
              <p className="text-sm text-purple-400 mb-4">
                Next.js • Tailwind CSS 
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://chikinimonie-web.vercel.app/"
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
