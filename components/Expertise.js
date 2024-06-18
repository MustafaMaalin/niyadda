import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>
            We combine technology and creativity to create standout digital solutions that captivate and translate into desired results.
            </p>
          </div>
          <div className='hero-content grid-2'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} path='#' caption='' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise