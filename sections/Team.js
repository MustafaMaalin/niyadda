import { teamdata } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import team from "@/pages/team"
import React from "react"

const Team = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='MEET OUR TEAM' /> <br />
            <br />
            <Title title='A team of smart & passionate creatives' className='title-bg' />
          </div>
          <div className='grid-4 py'>
            {teamdata.map((item) => (
              <div 
                key={item.id} 
                onClick={() => {
                  if (item.href) {
                    window.open(item.href, "_blank");
                  }
                }}
                style={{ cursor: item.href ? 'pointer' : 'default' }}
              >
                <Card data={item} caption={item.post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}



export default Team