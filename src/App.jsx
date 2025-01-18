import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          Reactify<span>Me</span>
        </div>
        <p className="tagline">
          Your gateway to coding mastery: Web Development, App Development, UI/UX Design.
        </p>
      </header>
      <main className="links-container">
        {/* First Row: Three buttons */}
        <div className="row-container">
          <a
            href="https://t.me/Shashi5657"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            Telegram
          </a>
          <a
            href="https://github.com/shashi5657"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            Github
          </a>
          <a
            href="https://www.youtube.com/@reactifymaster/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            YouTube
          </a>
        </div>
        {/* Grid: Four buttons */}
        <div className="grid-container">
          <a
            href="https://www.instagram.com/mr.villain29/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sangepushashidhar@gmail.com"
            className="link-button"
          >
            Email
          </a>
          <a
            href="https://shashii-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            Portfolio
          </a>
        </div>
      </main>
      <footer className="footer">
        <p>
          "Code the future, one line at a time. 🌌 Start your journey now!"
        </p>
      </footer>
    </div>
  );
};

export default App;
