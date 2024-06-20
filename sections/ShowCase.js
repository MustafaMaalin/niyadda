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
            <Title title='Our work' className='title-bg' />
          </div>
          <TitleSm title='We are proud of the work we do for our clients. Here are some of our recent projects.' />
          <Showcard />

        </div>
      </section>
    </>
  )
}

export default ShowCase