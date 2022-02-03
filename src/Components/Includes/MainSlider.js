import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../Images/banner.png";
import image2 from "../../Images/banner1.png";

const MainSlider = () => {
  const SlideImages = [
    {
      id: 1,
      imageurl: image1,
      alt: "",
    },
    {
      id: 2,
      imageurl: image2,
      alt: "",
    }
  ];
  return (
    <Carousel>
      {SlideImages.map((image) => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block w-100"
            src={image.imageurl}
            alt={image.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainSlider;
