import React, { useEffect, useState } from "react";
import "./carousel02.css";

let images = [
  "https://picsum.photos/id/1018/600/300",
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1019/600/300",
  "https://picsum.photos/id/1020/600/300",
  "https://picsum.photos/id/1021/600/300",
  "https://picsum.photos/id/1022/600/300",
];

export default function CarouselSlide() {
  let [currentPage, setCurrentPage] = useState(0);

  let imagesPerPage = 3;
  let totalImages = images.length;

  let totalPages = Math.ceil(totalImages / imagesPerPage);
  let startIndex = currentPage * imagesPerPage;
  let visibleImages = images.slice(startIndex, startIndex + imagesPerPage);

  let slideNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  let slidePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    let interval = setInterval(slideNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="carousel">
        <div className="images">
          {visibleImages.map((img, index) => (
            <img src={img} alt={`img-${index}`} key={index} />
          ))}
        </div>

        <div className="btn">
          <button onClick={slidePrev}>Prev</button>
          <button onClick={slideNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
