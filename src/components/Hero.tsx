"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      tittle: "Trending Item",
      mainTitle: "WOMEN's LATEST FASHION SALE",
      price: "20$",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      tittle: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "20$",
    },
    {
      id: 3,
      img: "/banner-3.jpg",
      tittle: "Sale Offer",
      mainTitle: "NEW FASHION SUPER SALE",
      price: "20$",
    },
  ];
  return (
    <div>
      <div className="container p-4 lg:p-4">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.tittle}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
