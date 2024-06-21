import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import Showcard from "@/components/Showcard"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import ScrollToTopButton from "@/components/ScrollToTopButton"

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SHOWCASE' /> <br />
            <br />
            <Title title='Our work' className='title-bg' />
          </div>
          <p className="center">We are proud of the work we do for our clients. Here are some of our recent projects.</p>
          <Showcard />

        </div>
      </section>
    </>
  )
}
<ScrollToTopButton />

export default ShowCase