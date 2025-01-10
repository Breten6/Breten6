import React from "react";
import ProjectCard from "./components/ProjectCard";

const others = [
  {
    id: 1,
    title: "Intramural Champion!",
    description: "Best team ever in universe",
    image: "/life/iso.jpeg",
  },
];

function Other() {
  return (
    <div className="page-container">
      <div className="left-column">
        <h2>Interests</h2>
        {others.map((other) => (
          <ProjectCard
            key={other.id}
            title={other.title}
            description={other.description}
            image={other.image}
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

export default Other;
