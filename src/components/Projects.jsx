import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import beastBuddyImage from "../assets/beastbuddy.png";
import epicreadsImage from "../assets/epicreads.jpg";
import orionAiImage from "../assets/orionai.png";
import LYLUImage from "../assets/lylu.png";
import luxeloomImage from "../assets/luxeloom.png";
import silvabarImage from "../assets/desilvabar.png";


const projects = [
  {
    id: 1,
    title: "BeastBuddy | Animal Rescue Web Platform",
    role: "Fullstack Developer",
    tech: "MySQL, PHP, HTML, CSS",
    description: "A global platform addressing animal welfare, providing a user-friendly interface for reporting animal distress and facilitating rescue efforts.",
    github: "https://github.com/HiruniWijerathna/Web-Mini-Project",
    image: beastBuddyImage, // Remove quotes to use the variable
    details: {
      features: [
        "Animal distress reporting system",
        "Rescue team coordination",
        "User management dashboard",
        "Location-based incident mapping"
      ],
      type: "Group project",
      duration: "May 2024 - July 2024"
    }
  },
  {
    id: 2,
    title: "EpicReads - E-library Management System",
    role: "Fullstack Developer",
    tech: "MySQL, PHP, HTML, CSS",
    description: "An innovative e-library management system developed to streamline digital library operations with intuitive book management features.",
    github: "https://github.com/HiruniWijerathna/LMS_Group8",
    image: epicreadsImage,
     details: {
      features: [
        "Digital book catalog management",
        "User authentication system",
        "Book categorization and search",
        "Reading progress tracking"
      ],
      type: "Group project",
      duration: "September 2024"
    }
  },
  {
    id: 3,
    title: "OrionAI - Skill Development Platform",
    role: "Frontend Developer",
    tech: "React.js, Node.js, Express.js, MongoDB",
    description: "An AI skill development platform offering interactive tutorials and challenges across writing, art, music, and programming.",
    github: "https://github.com/DulSamindika/OrionAi-frontend",
    image: orionAiImage,
    details: {
      features: [
        "Interactive AI tutorials",
        "Skill assessment challenges",
        "Progress tracking dashboard",
        "Multi-disciplinary learning paths"
      ],
      type: "Group project",
      duration: "August 2024 - December 2024"
    }
  },
  {
    id: 4,
    title: "LYLU - Sustainable Marketplace",
    role: "Fullstack Developer",
    tech: "React.js, Node.js, Express.js, MongoDB",
    description: "A sustainable second-hand marketplace featuring Google OAuth login, dynamic listings with image uploads, and WhatsApp integration.",
    github: "https://github.com/ZNilakshi/OLY.git",
    image: LYLUImage,
    details: {
      features: [
        "Google OAuth authentication",
        "Cloudinary image uploads",
        "WhatsApp buyer-seller communication",
        "Product categorization system"
      ],
      type: "Dual project",
      duration: "February 2025 - March 2025"
    }
  },
  {
    id: 5,
    title: "LuxeLoom Events - Planning Platform",
    role: "Fullstack Developer",
    tech: "React.js, Node.js, Express.js, MongoDB",
    description: "A modern event planning website with AI-powered theme generator, vendor marketplace, and budget tracker with live cost updates.",
    github: "https://github.com/malshikainsari/LuxeLoom-Events",
    image: luxeloomImage,
    details: {
      features: [
        "AI-powered event theme generator",
        "Vendor marketplace with real-time availability",
        "Interactive budget tracker",
        "Guest management system"
      ],
      type: "Individual project",
      duration: "March 2025 - Present"
    }
  },
  {
    id: 6,
    title: "DE SILVA BAR - Management System",
    role: "Fullstack Developer",
    tech: "React.js, Node.js, Express.js, MongoDB",
    description: "Bar website with admin panel for stock management and seamless user experience for purchasing liquor with online payment.",
    github: "https://github.com/ZNilakshi/Capstone-Project",
    image: silvabarImage ,
    details: {
      features: [
        "Inventory management system",
        "Online payment integration",
        "Delivery tracking",
        "Admin dashboard for analytics"
      ],
      type: "Group project",
      duration: "Ongoing"
    }
  }
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="bg-slate-800 rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-sm text-pink-400 font-medium mb-2">
          Role: {project.role}
        </p>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.split(", ").map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-700 text-pink-400 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => onClick(project)}
            className="text-pink-400 font-medium hover:text-pink-300 transition-colors"
          >
            View Details
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (selectedProject) {
    return (
      <div className="max-w-full mx-auto py-20 px-8 bg-slate-900 text-white">
        <button
          onClick={() => setSelectedProject(null)}
          className="flex items-center text-pink-400 mb-8 hover:text-pink-300 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </button>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-slate-800 rounded-xl shadow-xl overflow-hidden"
        >
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-80 object-cover"
          />
          
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">{selectedProject.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Role</h3>
                <p className="text-slate-300">{selectedProject.role}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Project Type</h3>
                <p className="text-slate-300">{selectedProject.details.type}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Duration</h3>
                <p className="text-slate-300">{selectedProject.details.duration}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-pink-400 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.split(", ").map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-700 text-pink-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-pink-400 mb-4">Description</h3>
              <p className="text-slate-400 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-pink-400 mb-4">Key Features</h3>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-slate-400">
                {selectedProject.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;