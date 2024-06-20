import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/Showcard";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";
import NiyaddaLogo from "@/components/Logo";
import NiyaddaBigLogo from "@/components/BigLogo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Adjust the path as needed
import Link from "next/link";

const Hero = () => {

  return (
    <>
      <section className='hero'>
        <div className='container'>
        {/* <NiyaddaBigLogo/> */}
        <h1 className='hero-title'>Making digital presence feel&nbsp;<strong className="develop">human</strong></h1>

          <div className='sub-heading'>
            <TitleSm title='Niyadda Digital is a partner for busy business owners.' />
          </div>
          <div className='sub-heading'>
            <TitleSm title='We take care of making your online brand heartfelt so you can focus on your business.' />
          </div>
          <br/>
          <br/>
          <br/>
          <Link href='/contact' className='button-started'>Get Started</Link>
        </div>
      </section>
      <br/>
      <br/>
      <section className='vision'>
        <div className='container'>
          <h1 className="vision-title">
            Intentions made real, for everyone.
          </h1>
          <div className='sub-heading'>
            <TitleSm title='We envision a future where people can feel what you intend, online.' />
          </div>
          </div>
        </section>
      <section className='hero-sec'>
        <div className='container'>
          {/* <div className='heading-title'>
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
          </div> */}
        </div>
      </section>
      <Expertise />
      <Brand/>
              <div className='content flex1'>
                <div className='container'>
                <div>
                  <Title title='Our work' />
                  <br/>
                  <br/>
                </div>
                </div>
              </div>
              
      <ShowCase />
      <Banner />
      <ScrollToTopButton />
    </>
  )
}

export default Hero;
