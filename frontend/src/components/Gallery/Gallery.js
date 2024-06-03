
import React from 'react';
import './Gallery.css';

// Import all images from the Assets directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../Assets', false, /\.(png|jpe?g|svg)$/));

// Reusable Image component
const Image = ({ src, alt }) => (
  <div className="gallery-column">
    <img src={src} alt={alt} />
  </div>
);

function Gallery() {
  document.title = 'Gallery - C.K Academy';

  return (
    <>
      <div className="gallery-header">
        <h1>Our Gallery</h1>
      </div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </>
  );
}

export default Gallery;