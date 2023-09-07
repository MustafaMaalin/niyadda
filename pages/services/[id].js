import { expertise } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import Head from "next/head";
import { useRouter } from "next/router";

const Services = () => {
    const router = useRouter();
    const { id } = router.query;
    const post = expertise.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div>Loading...</div>;
    }
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SERVICES' /> <br />
            <br />
            <Title title='Your One-Stop-Shop for All Things Digital.' className='title-bg' />
          </div>
          <div className='grid-2 py'>
            {post.desc.map((item, index) => (
                <div key={index}>   - {item.text}
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services