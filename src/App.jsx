import React, { useState } from "react";
import "./App.css";
import Homepage from "./Homepage";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

function App() {
  const [active, setActive] = useState("home");

  const renderContent = () => {
    switch (active) {
      case "about":
        return <About />;
      case "gallery":
        return <Gallery />;
      case "contact":
        return <Contact />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar / Nav */}
      <nav className="sidebar">
        <h1
          className={`logo ${active === "home" ? "active" : ""}`}
          onClick={() => setActive("home")}
        >
          Devon Parson
        </h1>
        <ul>
          <li
            onClick={() => setActive("about")}
            className={active === "about" ? "active" : ""}
          >
            About
          </li>
          <li
            onClick={() => setActive("gallery")}
            className={active === "gallery" ? "active" : ""}
          >
            Gallery
          </li>
          <li
            onClick={() => setActive("contact")}
            className={active === "contact" ? "active" : ""}
          >
            Contact
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className={`content ${active}`}>{renderContent()}</main>
    </div>
  );
}

export default App;
