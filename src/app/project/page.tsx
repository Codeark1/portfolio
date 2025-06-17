"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const projects = [
  {
    name: "LangEasy",
    description:
      "LangeasyAI is at the forefront of AI innovation, designed to collect, process, and refine multilingual data. The platform was created in collaboration with technical talents sourced from 3MTT, with the goal of developing Nigeria's first-ever multilingual AI model on both text and audio datasets. LangeasyAI is revolutionizing the way data is harnessed to train AI models, ensuring they are diverse, accurate, and culturally aligned.",
    techStack: ["React", "", "Node.js", "MongoDB"],
    links: {
      // github: "#",
      website: "#",
    },
    image: "/langeasy.png",
  },
  // {
  //   name: "NaijaGPT",
  //   description:
  //     "NaijaGPT is an AI-powered chatbot designed for seamless interaction. Built as a small GPT, NaijaGPT allows users to engage in meaningful conversations with an evolving AI model. As we continuously work on this project, improvements are being added to enhance its capabilities and ensure user satisfaction.",
  //   techStack: ["React", "Node.js", "MongoDB"],
  //   links: {
  //     // github: "#",
  //     website: "#",
  //   },
  //   image: "/NaijaGpt.png",
  // },
  {
    name: "DSN LangeasyAI - Multilingual Data Collection Platform",
    description:
      "LangeasyAI is at the forefront of AI innovation, designed to collect, process, and refine multilingual data. The platform was created in collaboration with technical talents sourced from 3MTT, with the goal of developing Nigeria's first-ever multilingual AI model on both text and audio datasets. LangeasyAI is revolutionizing the way data is harnessed to train AI models, ensuring they are diverse, accurate, and culturally aligned.",
    techStack: ["Next js", ],
    links: {
      // github: "#",
      website: "#",
    },
    image: "/langeasy2.png",
  },
  {
    name: "LLM Portal for Data Cleaning",
    description:
      "Our internal LLM portal is an essential tool for data cleaning and processing. It works in three stages: evaluation, ranking, and fine-tuning. This ensures that any data collected is rigorously examined and optimized, allowing for the highest quality inputs to enhance model training.",
    techStack: ["Next js", ],
    links: {
      // github: "#",
      website: "#",
    },
    image: "/langeasy3.png",
  },
  {
    name: "Ifelodun LCDA",
    description:
      "Official website of Ifelodun lcda",
    techStack: ["Next js", "Contentful"],
    links: {
      // github: "#",
      website: "https://www.ifelodunlcda.com/",
    },
    image: "/ifelodun.png",
  },

  {
    name: "Tayo Oyetibo LP",
    description:
      "Official webiste of TOLP",
    techStack: ["Next js", ],
    links: {
      // github: "#",
      website: "https://tolp.vercel.app/",
    },
    image: "/tolp.png",
  },
];

const Page = () => {
  const [showWebApps, setShowWebApp] = useState(false);
  const [showMobileAppMessage, setShowMobileAppMessage] = useState(false); // Added state for Mobile App message

  const handleToggleWebApps = () => {
    setShowWebApp(true);
    setShowMobileAppMessage(false);
  
    setTimeout(() => {
      const projectsSection = document.getElementById("projects-section");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure state updates before scrolling
  };
  
  const handleToggleMobileApps = () => {
    setShowMobileAppMessage(true);
    setShowWebApp(false);
  
    setTimeout(() => {
      const mobileAppSection = document.getElementById("mobile-app-section");
      if (mobileAppSection) {
        mobileAppSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  

  return (
    <div className="bg-darkBackground font-sen">
    {/* Header Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 font-sen min-h-screen">
      {/* Website Development Section */}
      <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold">I Build Webapps</h1>
        <p className="text-lg text-gray-600">I build web applications using the best tools.</p>
        <motion.button
          onClick={handleToggleWebApps}
          className="px-6 py-3 border-2 border-gray-700 rounded-md hover:bg-gray-100 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          See What I Have Built
        </motion.button>
      </div>

      {/* Mobile App Development Section */}
      <div className="flex flex-col items-center justify-center gap-4 p-6 bg-blue-500 w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">I Build Mobile <span className="text-gray-800">Apps</span></h1>
        <p className="text-lg text-white">I build mobile applications using the best tools.</p>
        <motion.button
          onClick={handleToggleMobileApps}
          className="px-6 py-3 border-2 border-gray-700 bg-white rounded-md hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          See What I Have Built
        </motion.button>
      </div>
    </div>

    {/* Projects Section */}
    {showWebApps && (
      <motion.div
        id="projects-section"
        className=" font-sen p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-white text-3xl md:text-4xl pt-2">./webapps</h3>
        <p className="text-white mt-4">Projects I&apos;m proud of</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                width={500}
                height={400}
                className="rounded-md"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-white">{project.name}</h2>
                <p className="mt-2 text-white text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded text-xs font-medium bg-gray-600 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  {/* <a href={project.links.github} className="text-blue-400 hover:underline text-sm">
                    GitHub
                  </a> */}
                  <a href={project.links.website} className="text-white  text-sm p-2 bg-gray-400 rounded-md">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    )}

    {/* Mobile App Message */}
    {showMobileAppMessage && (
      <div className="text-center text-white p-6">
        <h3 className="text-3xl">Coming Soon</h3>
        <p className="mt-4 text-lg">Stay tuned for our mobile apps!</p>
      </div>
    )}
  </div>
  );
};

export default Page;
