import React, { useState } from "react";
import Slider from "react-slick";
import Title, { TitleSm } from "@/components/common/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "@/components/Banner"



const Ndis = () => {
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
      <section className='ndis bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='NDIS' /> <br />
            <br />
            <Title title='Your intended NDIS digital partner.' className='title-bg' />
          </div>
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
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            <div className="grid-3">
                  <div className="box">
                    <h1 className="indigo">5+ <span style={{ fontSize: '0.35em' }}>years</span></h1>
                    <br />
                    <h3>Industry experience</h3>
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
                  <Title title="Visibility" className='title-bg2'/>
                    <p className="details">We enhance your presence in the digital realm, making sure you stand out from the crowd.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <Title title="Identity" className='title-bg2'/>
                    <p className="details">Our team brings a wealth of industry knowledge to ensure your strategies are spot on.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                  <Title title="Content" className='title-bg2'/>
                    <p className="details">We manage all aspects of your marketing to deliver cohesive and effective campaigns.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                  <Title title="Trust" className='title-bg2'/>
                    <p className="details">We believe in building long-term partnerships based on trust and mutual success.</p>
                  </div>
                </div>
              </div>

              <div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      

    </>
  );
};

export default Ndis;
