import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Other from "./other";
import Playlist from "./Playlist";
import MusicPlayer from "./MusicPlayer";
import "./App.css";

function App() {
  const [animating, setAnimating] = useState(false);
  const targetTitle = "Bowen Shen";
  const targetTitleNoSpaces = targetTitle.slice(1).replace(/ /g, "");

  const getRandomUppercaseLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters.charAt(Math.floor(Math.random() * letters.length));
  };

  const animateTitle = () => {
    if (animating) return; 
    setAnimating(true);

    const title = document.querySelector(".animated-title");
    const letters = title.querySelectorAll("span.letter");
    const totalLetters = letters.length;
    const durationPerLetter = 100;
    const interval = 50; 

    letters.forEach((letter, index) => {
      const intervalId = setInterval(() => {
        letter.textContent = getRandomUppercaseLetter();
      }, interval);

      const stopDelay = durationPerLetter * (index + 1);

      setTimeout(() => {
        clearInterval(intervalId);
        letter.textContent = targetTitleNoSpaces.charAt(index).toUpperCase();
        if (index === totalLetters - 1) {
          setAnimating(false);
        }
      }, stopDelay);
    });
  };

  useEffect(() => {
    animateTitle();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1 className="site-title">
          <span className="fixed-letter">B</span>
          <span className="animated-title" onMouseEnter={animateTitle}>
            {targetTitle
              .slice(1) 
              .split("")
              .map((char, index) => {
                if (char === " ") {
                  return (
                    <span key={index} className="space">
                      &nbsp;
                    </span>
                  );
                } else {
                  return (
                    <span key={index} className="letter">
                      {char.toUpperCase()}
                    </span>
                  );
                }
              })}
          </span>
        </h1>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/other">Life</Link>
          <Link to="/playlist">Playlist</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/other" element={<Other />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </main>
      <MusicPlayer />
    </div>
  );
}

export default App;
