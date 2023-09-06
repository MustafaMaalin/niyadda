import { showcase, showcasedata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const CasePost = () => {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  const post = showcase.find((post) => post.id === parseInt(id));
  console.log(post);

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
         <Title title={post.catgeory}className='title-bg' /> <br />
          <br />
          <Title title={post.title} className='title-bg' /> <br />

          <div className='img py'>
            <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
          </div>
          
        </div>
        <Banner />

        
      </div>
    </section>
  </>
  );
};

export default CasePost;
