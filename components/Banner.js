import React from "react"
import { Title, TitleLogo } from "./common/Title"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <p className="titlebanner"> Elevate your brand <strong>now</strong> </p>  <br />
            <TitleLogo className="titlebanner2"title='Partner with us to take your business to the next level with exceptional quality and value.' />
          </div>
          <div className="br-needed">
            
          <Link href='/contact' className='button-primary'>Connect with Us Today!</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner