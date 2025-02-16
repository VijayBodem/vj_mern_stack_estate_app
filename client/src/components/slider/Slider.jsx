import React, { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imgIndex, setImageIndex] = useState(null);

  const changeImageSlides = (direction) => {
    if (direction === "left") {
      if (imgIndex === 0) {
        setImageIndex(imgIndex);
      } else {
        setImageIndex((prev) => prev - 1);
      }
    } else {
      if (imgIndex === images?.length - 1) {
        setImageIndex(imgIndex);
      } else {
        setImageIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imgIndex !== null && (
        <div className="fullslider">
          <div
            className={`arrow ${imgIndex === 0 && "disabled"}`}
            onClick={() => changeImageSlides("left")}
          >
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imgIndex]} alt="" />
          </div>
          <div
            className={`arrow ${imgIndex === images?.length - 1 && "disabled"}`}
            onClick={() => changeImageSlides("right")}
          >
            <img src="/arrow.png" className="right" alt="" />
          </div>

          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            alt=""
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
