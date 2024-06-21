import React from "react";
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 10000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className='brand'>
        <div className='container'>
          <Slider {...settings} className='brand-content py'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='70%' height='70%' />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Brand;
