import React, { useEffect, useState } from "react";
import "./carousal.css";

let images = [
  "https://picsum.photos/id/1018/600/300",
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1019/600/300",
];

export default function Carousal() {
  let [current, setCurrent] = useState(0);
  
  let totalImages = images.length;

  let slideNext = () => {
    setCurrent((prev) => (prev+1) % totalImages);
  }

  let slidePrev = () => {
    setCurrent((prev) => ((prev-1) + totalImages) % totalImages);
  }

  useEffect(() => {
  let interval = setInterval(slideNext, 3000);

  return () => clearInterval(interval)
   } , []);



  return (
    <div className="container">
      <div className="carousal">
        <img src={images[current]} alt="slide" />
        <div className="btn">
          <button className="next" onClick={slidePrev}>Prev</button>
          <button className="prev" onClick={slideNext}>Next</button>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === current ? "dotActive" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
