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

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
        {/* <NiyaddaBigLogo/> */}
          <h1 className='hero-title'>WE <strong className="develop"> DEVELOP</strong> YOUR INTENTIONS</h1>

          <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span className="title">.</span>
            <TitleSm title='BRANDING' /> <span className="title">.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title="We're not just a digital agency; we're your strategic partner in propelling your business towards unparalleled growth" />
            <p>
            Beyond pixels and code, we dive deep into your vision. As Niyadda, we're your strategic compass in the vast digital sea, charting paths to unparalleled growth. Your success is our story; let's co-author a digital masterpiece.
            </p>
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