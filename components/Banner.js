import React from "react"
import { Title, TitleLogo } from "./common/Title"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <p className="titlebanner"> Take your <strong>brand</strong> to new heights</p>  <br />
            <TitleLogo className="titlebanner2"title="" />
          </div>
          <div className="br-needed">
            
          <Link href='/contact' className='button-primary'>Check Eligibility</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner