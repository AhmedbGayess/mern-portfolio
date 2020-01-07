import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Gallery = ({ images }) => {
  const slides = images.map((image, i) => (
    <img key={i} src={`/images/${image}`} />
  ));
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={4000}
      showStatus={false}
      className="text-center"
    >
      {slides}
    </Carousel>
  );
};

export default Gallery;
