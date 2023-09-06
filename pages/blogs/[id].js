import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogdata.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <section className='post-details bg-top'>
      <div className='container'>
        <div className='heading-title'>
         <Title title={post.catgeory + " / " + post.date}className='title-bg' /> <br />
          <br />
          <Title title={post.title} className='title-bg' /> <br />
          <h4 className="Author">By: {post.author}</h4>

          <div className='img py'>
            <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
          </div>
          <div className='desc'>
          {post.content.map((item, index) => (
            <div key={index}>
              <p>{item.text0}</p>
              <h3>{item.heading1}</h3>
              <p>{item.text1}</p>
              <h3>{item.heading2}</h3>
              <p>{item.text2}</p>
              <h3>{item.heading3}</h3>
              <p>{item.text3}</p>
              <h3>{item.heading4}</h3>
              <p>{item.text4}</p>
              <h3>{item.heading5}</h3>
              <p>{item.text5}</p>
              
              </div>
            ))}

            </div>
        </div>
        <Banner />

        <div className='heading-title'>
          <div className='desc'>
            {post.content.map((item, index) => (
              <div key={index}>
                 <h3>{item.heading6}</h3>
                  <p>{item.text6}</p>
                  <h3>{item.heading7}</h3>
                  <p>{item.text7}</p>
                  <h3>{item.heading8}</h3>
                  <p>{item.text8}</p>
              </div>
            ))}
             
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default BlogPost;
