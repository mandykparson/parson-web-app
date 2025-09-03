import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="hero-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/IMG_4189.JPG`}
          alt="Hero Artwork"
          className="hero-image"
        />
      </div>
      <div className="hero-text">
        <h1>Welcome to Devon Parson's Art</h1>
        <p>Discover unique creations and explore the gallery below.</p>
      </div>
    </section>
  );
};

export default Homepage;
