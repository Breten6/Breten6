import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = event;

      const offsetX = clientX - innerWidth / 2;
      const offsetY = clientY - innerHeight / 2;

      const sensitivity = 0.03;

      const bgPosX = 50 + (offsetX * sensitivity);
      const bgPosY = 50 + (offsetY * sensitivity);

      const homeElement = document.querySelector('.home-container');
      if (homeElement) {
        homeElement.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="hero-content">
        <h2 className="home-title">Hello, I am Bowen Shen</h2>
        <p>A software developer, guitar player, athlete</p>
        <p><strong>Email:</strong> b8shen@uwaterloo.ca</p>
      </div>
    </div>
  );
}

export default Home;
