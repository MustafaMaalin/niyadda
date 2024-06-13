import { showcase, showcasedata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const CasePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = showcase.find((post) => post.id === id);

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
            <img src={post.cover} alt={post.title} width='75%' height='75%' className='round' />
          </div>
          <div className='desc'>
          {post.content.map((item, index) => (
            <div key={index}>
              <h3>{item.heading1}</h3>
              <p>{item.text0}</p>
              <p>{item.text1}</p>
              <p>{item.text2}</p>
              <p>{item.text3}</p>
              <p>{item.text4}</p>
              <Link href={post.href} className='button-primary'>See it in Action!</Link>
              </div>
            ))}
          
        </div>
        </div>
        <Banner />
        
        
      </div>
    </section>
  </>
  );
};

export default CasePost;

// import { showcase } from "@/assets/data/dummydata";
// import Banner from "@/components/Banner";
// import { Title, TitleSm } from "@/components/common/Title";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import React from "react";
// import Link from "next/link";
// import { slugify } from "assets/utils/slugify"; // Ensure this utility is imported

// const CasePost = () => {
//   const router = useRouter();
//   const { slug } = router.query;
  
//   const post = showcase.find((post) => slugify(post.title) === slug);

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <Head>
//         <title>{post.title}</title>
//       </Head>
//       <section className='post-details bg-top'>
//         <div className='container'>
//           <div className='heading-title'>
//             <Title title={post.catgeory} className='title-bg' /> <br />
//             <br />
//             <Title title={post.title} className='title-bg' /> <br />
//             <div className='img py'>
//               <img src={post.cover} alt={post.title} width='75%' height='75%' className='round' />
//             </div>
//             <div className='desc'>
//               {post.content.map((item, index) => (
//                 <div key={index}>
//                   <h3>{item.heading1}</h3>
//                   <p>{item.text0}</p>
//                   <p>{item.text1}</p>
//                   <p>{item.text2}</p>
//                   <p>{item.text3}</p>
//                   <p>{item.text4}</p>
//                   <Link href={post.href} className='button-primary'>See it in Action!</Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <Banner />
//         </div>
//       </section>
//     </>
//   );
// };

// export default CasePost;
