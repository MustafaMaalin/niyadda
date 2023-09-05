import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import Link from "next/link"

const Showcard = () => {
  return (
    <>
        <div className='container showcase grid-2 py'>
          {showcase.map((item) => (
            <Card data={item} key={item.id} path='cases' />
          ))}
        </div>
    </>
  )
}

export default Showcard