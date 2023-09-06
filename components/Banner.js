import React from "react"
import { Title, TitleLogo } from "./common/Title"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <p className="titlebanner"> We are looking forward to start a new project </p>  <br />
            <TitleLogo title='Lets take your business to the next level!' />
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