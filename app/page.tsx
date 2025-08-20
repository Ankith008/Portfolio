"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      } min-h-screen transition-colors duration-500`}
    >
      {/* Header */}
      <header
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md sticky top-0 z-50 transition-colors duration-500`}
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Ankith Patel</h1>
          <div className="flex items-center space-x-6">
            <nav className="space-x-6 font-medium hidden sm:block">
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
              <a href="#skills" className="hover:text-blue-500 transition">
                Skills
              </a>
              <a href="#projects" className="hover:text-blue-500 transition">
                Projects
              </a>
              <a href="#experience" className="hover:text-blue-500 transition">
                Experience
              </a>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:scale-110 transition-transform"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400 animate-pulse" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center py-20 
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      dark:from-gray-900 dark:via-gray-800 dark:to-black
      transition-colors duration-500"
      >
        {/* Modern Profile Photo */}
        <motion.div
          className="relative w-44 h-44 rounded-3xl overflow-hidden shadow-xl border-4 border-transparent 
           p-1 hover:scale-105 transition-transform"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-1 bg-gradient-to-r from-black via-gray-600 to-white rounded-2xl">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Gradient Animated Text */}
        <motion.h2
          className="text-4xl font-extrabold mb-4 mt-6  bg-clip-text animate-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m Ankith 👋
        </motion.h2>

        <motion.p
          className="text-lg max-w-2xl text-gray-100 dark:text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A <b>Full Stack Developer</b> passionate about building modern, fast,
          and secure web applications.
        </motion.p>
      </section>

      {/* About Me */}
      <motion.section
        id="about"
        className="max-w-5xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p>
          I am a Software Engineering Student with hands-on experience in
          creating responsive and scalable web apps. Skilled in both frontend
          and backend technologies, I focus on performance, security, and clean
          code.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        className="max-w-5xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "React.js",
            "Next.js",
            "TailwindCSS",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Docker",
            "Redux",
            "Git",
            "ShadCN UI",
            "DSA"
          ].map((skill, index) => (
            <motion.div
              key={index}
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-md p-3 rounded-lg text-center font-medium hover:scale-105 hover:shadow-xl transition`}
              whileHover={{ y: -5 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="max-w-5xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Reflect - Mood Journal App",
              stack: "Next.js, Tailwind CSS, Neon DB, Clerk, ArcJet",
              desc: "Mood tracking app with interactive charts, secure authentication, and optimized performance.",
            },
            {
              title: "Hirred - Job Applying Platform",
              stack: "Vite, React, TailwindCSS, ShadCN UI",
              desc: "Platform where recruiters post jobs and employees apply with real-time updates.",
            },
            {
              title: "E-commerce Website",
              stack: "React.js, Node.js, Express.js, MongoDB",
              desc: "Secure platform with JWT rotation, product purchasing, and delivery tracking features.",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-md p-6 rounded-xl hover:scale-105 hover:shadow-xl transition`}
              whileHover={{ y: -8 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-2 opacity-80">{project.stack}</p>
              <p>{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        className="max-w-5xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <motion.div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md p-6 rounded-xl hover:scale-105 hover:shadow-xl transition`}
          whileHover={{ y: -8 }}
        >
          <h3 className="text-xl font-semibold">
            Frontend Developer - Gumo (Apr 2024 – Nov 2024)
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-2 text-sm">
            <li>
              Developed responsive web interfaces with Next.js & TypeScript.
            </li>
            <li>Integrated Charts with D3.js which increase the effeciency by 30%</li>
            <li>Optimized app speed by 40% and reduced load time by 20%.</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="max-w-5xl mx-auto py-16 px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:ankithpatel@gmail.com"
            className="text-blue-500 hover:underline"
          >
            ankithpatel@gmail.com
          </a>
        </p>
        <p>Phone: +91 9573052700</p>
        <div className="flex justify-center space-x-6 mt-4">
          <motion.a
            href="https://linkedin.com/in/ankith-patel-045133243"
            className="text-blue-700 font-medium hover:underline"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/Ankith008"
            className="text-gray-800 font-medium hover:underline"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            GitHub
          </motion.a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer
        className={`${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        } py-6 text-center text-sm mt-10 transition-colors duration-500`}
      >
        © {new Date().getFullYear()} Ankith Patel. All rights reserved.
      </footer>
    </div>
  );
}
