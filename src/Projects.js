import React from "react";
import ProjectCard from "./components/ProjectCard";
import "./About.css";

const projects = [
  {
    id: 1,
    title: "MIT 6.824 lab1 and lab2",
    description: "ECE 350 Real-time operating system lab",
    image: process.env.PUBLIC_URL+"/projects/mit.jpg",
    url: "https://github.com/Breten6/MIT6.824",
  },
  {
    id: 2,
    title: "Single-cycle pipelining CPU",
    description: "ECE 350 Real-time operating system lab",
    image: process.env.PUBLIC_URL+"/projects/cpu.jpeg",
    url: "https://github.com/Breten6/CPU",
  },
  {
    id: 3,
    title: "A Real time Operating System",
    description: "ECE 350 Real-time operating system lab",
    image: process.env.PUBLIC_URL+"/projects/rtos.jpg",
    url: "https://github.com/Breten6/myRTOS",
  },
  {
    id: 4,
    title: "WAVE: Smart HomeKit Using Hand Gestures",
    description:
      "WAVE: Smart HomeKit Using Hand Gestures uses innovative image processing techniques to recognize user gestures, ensuring an intuitive experience.",
    image: process.env.PUBLIC_URL+"/projects/hand_gesture.jpeg",
    url: "https://github.com/Breten6/WAVE",
  },
  {
    id: 5,
    title: "C++ MMORPG Server",
    description: "A C++ Reactor framework allowing millions of concurrent",
    image: process.env.PUBLIC_URL+"/projects/mmorpg.png",
    url: "https://github.com/Breten6/MyReactor",
  },
  {
    id: 6,
    title: "3D & GIS Viewer",
    description: "A lightweight web-based application to visualize 3D point cloud data and integrate basic GIS viewing functionality.",
    image: process.env.PUBLIC_URL+"/projects/3dpc.png",
    url: "https://github.com/Breten6/3DViewer",
  },
];

function Projects() {
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  return (
    <div className="page-container">
      <div className="left-column">
        <h2>Projects</h2>
        {sortedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
      <div className="right-column">
        <h3>About Me</h3>
        <ul>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="http://github.com/Breten6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Breten6's GitHub Profile"
            >
              <i className="fab fa-github" aria-hidden="true"></i> Breten6
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/bowen-shen-41715b17a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bowen Shen's LinkedIn Profile"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i> Bowen Shen
            </a>
          </li>
          <li>
            <strong>Education:</strong> Bachelor of Applied Science (Computer Engineering) at University of Waterloo
          </li>
          <li>
            <strong>Email:</strong> b8shen@uwaterloo.ca
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
