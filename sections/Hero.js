import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/Showcard"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"
import NiyaddaLogo from "@/components/Logo"
import NiyaddaBigLogo from "@/components/BigLogo"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2, // Number of slides to show for screens 780px or less
          slidesToScroll: 1,
        },
      },
    ],
  };
  const logos = [
    "../images/oaclogo.png",
    "../images/pclogo.png",
    "../images/ecglogo.png",
    "../images/mchclogo.png"
  ];
  return (
    <>
      <section className='hero'>
        <div className='container'>
        {/* <NiyaddaBigLogo/> */}
          <h1 className='hero-title'>WE <strong className="develop"> DEVELOP</strong> YOUR INTENTIONS</h1>

          <div className='sub-heading'>
            <TitleSm title='websites' /> <span className="title">.</span>
            <TitleSm title='marketing' /> <span className="title">.</span>
            <TitleSm title='branding' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title="We're not just a digital agency; we're your strategic partner in propelling your business towards unparalleled growth" />
            </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <section className='ndis bg-top'>
      <div className="content flex1">
            <div className='container'>
                <div>
                  <TitleSm title='Join the growing list of NDIS businesses that trust us' className='title-bg' />
                </div>
                <div className='carousel-container'>
                <br />
                <br />
                <br />
                <Slider {...settings}>
                  {logos.map((logo, index) => (
                    <div key={index} className='logo-slide'>
                      <img src={logo} alt={`Logo ${index + 1}`} className='logo-image' />
                    </div>
                  ))}
                </Slider>
              </div>
              </div>
              </div>
              </section>
      <Banner />
      <Testimonial />
      <ShowCase />
      {/* <Brand /> */}

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero