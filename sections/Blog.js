import { blog } from "@/assets/data/dummydata"
import BlogCard from "@/components/Blogcard"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Blog = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BLOG' /> <br />
            <br />
            <Title title='Insights Unveiled: Dive Into Our Digital Diary.' />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog