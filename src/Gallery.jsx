import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "IMG_4190.JPG",
    "IMG_4191.JPG",
    "IMG_4192.JPG",
    "IMG_4189.JPG"
  ];

  return (
    <section className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={`${process.env.PUBLIC_URL}/images/${img}`} alt={`Artwork ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
