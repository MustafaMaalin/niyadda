import React, { useState } from "react";
import Slider from "react-slick";
import Title, { TitleSm } from "@/components/common/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Ndis = () => {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      cssEase: "linear"
    };
  
    const logos = [
      "../images/e1.jpg",
      "../images/e2.jpg",
      "../images/e3.jpg",
      "../images/e4.jpg"
    ];
  return (
    <>
      <section className='ndis bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='NDIS' /> <br />
            <br />
            <Title title='Your intended NDIS digital partner.' className='title-bg' />
          </div>
          <div className="content flex1">
            <div className='container'>
            <div className="grid-3">
                  <div className="box">
                    <h1 className="indigo">5 <span style={{ fontSize: '0.35em' }}>years</span></h1>
                    <br />
                    <h3>NDIS experience</h3>
                  </div>
                  <div className="box">
                    <h1 className="indigo">4+</h1>
                    <br />
                    <h3>Successful cases</h3>
                  </div>
                  <div className="box">
                    <h1 className="indigo">⤴</h1>
                    <h3>Proven solutions</h3>
                  </div>
            </div>
              <br />
              <br />
              <div className='heading-title'>
                <TitleSm title='What our partnership means' className='title-bg' />
              </div>
              <div className="grid-container">
                <div className="card">
                  <div className="card-content">
                  <Title title="Visibility" className='title-bg'/>
                    <p className="details">We enhance your presence in the digital realm, making sure you stand out from the crowd.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <Title title="Identity" className='title-bg'/>
                    <p className="details">Our team brings a wealth of industry knowledge to ensure your strategies are spot on.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                  <Title title="Content" className='title-bg'/>
                    <p className="details">We manage all aspects of your marketing to deliver cohesive and effective campaigns.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                  <Title title="Trust" className='title-bg'/>
                    <p className="details">We believe in building long-term partnerships based on trust and mutual success.</p>
                  </div>
                </div>
              </div>
              <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Ndis;
