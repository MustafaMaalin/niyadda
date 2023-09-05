import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import Showcard from "@/components/Showcard"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SHOWCASE' /> <br />
            <br />
            <Title title='Digital Brilliance on Display: Our Signature Showcase.' className='title-bg' />
          </div>
          <Showcard />

        </div>
      </section>
    </>
  )
}

export default ShowCase