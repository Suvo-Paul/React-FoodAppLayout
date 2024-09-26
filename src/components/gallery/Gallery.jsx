import React from "react";

const Gallery = () => {
  return (
    
      <div className="ourgallery" id="ourgallery">
        <h1>
          Our <span>Gallery</span>
        </h1>

        <div className="gallerys">
          <div>
            <img src="./image/1.jpg" alt="" />
          </div>

          <div className="v-stretch">
            <img src="./image/2.jpg" alt="" />
          </div>

          <div className="h-stretch">
            <img src="./image/3.jpg" alt="" />
          </div>

          <div>
            <img src="./image/4.jpg" alt="" />
          </div>

          <div>
            <img src="./image/5.jpg" alt="" />
          </div>

          <div className="v-stretch">
            <img src="./image/6.jpg" alt="" />
          </div>

          <div className="big-stretch">
            <img src="./image/7.jpg" alt="" />
          </div>

          <div>
            <img src="./image/8.jpg" alt="" />
          </div>

          <div className="h-stretch">
            <img src="./image/9.jpeg" alt="" />
          </div>
        </div>
      </div>
    
  );
};

export default Gallery;
