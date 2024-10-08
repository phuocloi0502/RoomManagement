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
  const totalSlides = props.slide.length;
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
        const { left, right } = activeThumbnail.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();

        if (left < containerRect.left || right > containerRect.right) {
          activeThumbnail.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }
    }
  }, [currentIndex]);

  // useEffect(() => {
  //   const intervalId = setInterval(handleNext, 3000);
  //   return () => clearInterval(intervalId);
  // }, [currentIndex]);

  return (
    <div className="my-slide-show-wrap">
      <div className="slide-wrap">
        <div
          className="slide-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {props.slide.map((src, index) => (
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
        {props.slide.map((_, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
            style={{ backgroundImage: `url(${props.slide[index]})` }}
          />
        ))}
      </div>
    </div>
  );
};
