import React, { useEffect, useRef, useState } from "react";
import "./slide_show.scss";
import { Image } from "antd";
import h1 from "../../assets/room_img_1.jpg";
import h2 from "../../assets/room_img_2.jpeg";
import h3 from "../../assets/room_img_3.jpg";
import h4 from "../../assets/room_img_4.jpg";
import h5 from "../../assets/room_img_5.jpeg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

export const SlideShow = (props) => {
  const imageSlideShow = [
    h1,
    h2,
    h3,
    h4,
    h5,
    h1,
    h2,
    h3,
    h4,
    h5,
    h1,
    h2,
    h3,
    h4,
    h5,
  ];
  const totalSlides = imageSlideShow.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    const scrollContainer = thumbnailRef.current;
    if (scrollContainer) {
      const activeThumbnail =
        scrollContainer.querySelector(".thumbnail.active");
      if (activeThumbnail) {
        activeThumbnail.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  return (
    <div className="my-slide-show-wrap">
      <div className="slide-container">
        <div
          className="slide-wrap"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageSlideShow.map((src, index) => (
            <div className="slide" key={index}>
              <Image src={src} />
            </div>
          ))}
        </div>
        <div className="btn-arrow back" onClick={handlePrev}>
          <IoIosArrowBack />
        </div>
        <div className="btn-arrow forward" onClick={handleNext}>
          <IoIosArrowForward />
        </div>
      </div>

      <div className="thumbnail-wrap" ref={thumbnailRef}>
        {imageSlideShow.map((_, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
            style={{ backgroundImage: `url(${imageSlideShow[index]})` }}
          />
        ))}
      </div>
    </div>
  );
};
