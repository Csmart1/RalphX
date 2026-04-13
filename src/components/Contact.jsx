import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
 
  const [state, handleSubmit] = useForm("xjgpooee");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-6 scroll-mt-24">
        <p className="text-purple-400 text-center py-20 text-lg">
          Thanks for your message! I'll get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-6 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            {" "}
            Contact <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            {" "}
            Lets bring your business to life.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7 bg-gray-950 border border-gray-800 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  {" "}
                  Full name{" "}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  {" "}
                  Email Address{" "}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  {" "}
                  Message{" "}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows="5"
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full md:w-auto px-8 py-3 border border-gray-500 rounded-lg text-white font-medium hover:border-purple-400 hover:text-purple-400 transition duration-300 disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="md:col-span-5 bg-gray-900 border border-gray-800 p-10 rounded-2xl shadow-xl h-full flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              {" "}
              Get in Touch{" "}
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {" "}
              Let's build something beautiful, functional, and user-centric
              together. Your ideas, my execution.{" "}
            </p>

            <div className="space-y-4 w-full">
              {/* Email Address */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2">
                <span className="font-semibold text-purple-400 sm:w-16">
                  Email:
                </span>
                <a
                  href="mailto: www.aniraphael@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  www.aniraphael@gmail.com
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2">
                <span className="font-semibold text-purple-400 sm:w-16">
                  Phone:
                </span>
                <span className="text-cyna-300">+234 8103863546</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2">
                <span className="font-semibold text-purple-400 sm:w-16">
                  Location:
                </span>
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
