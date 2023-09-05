import { showcase } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const CasePost = () => {
    const router = useRouter();
    const { id } = router.query;
    const post = showcase.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <Head>
            <title>{post.title}</title>
        </Head>
        <section className='showcase bg-top'>
          <div className='container'>
            <div className='heading-title'>
              <TitleSm title='SHOWCASE' /> <br />
              <br />
              <Title title={post.title} className='title-bg' />
              <h4 className="Category">By: {post.catgeory}</h4>

            </div>
            <br />
            <br />
            <div className='img py'>
                <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
            <TitleSm title='Unlocking the Art of Web Design: An In-Depth Guide to Creating with Figma' />
            <p className='desc-p'> In the fast-paced world of modern web design, where imagination meets practicality, having the right tools can truly set you apart. And among the array of options available, Figma shines as a versatile and powerful design platform that empowers designers to transform their ideas into captivating realities. This comprehensive guide will take you on a enlightening journey, revealing the ins and outs of designing with Figma and uncovering its potential for creating stunning, user-centric web experiences that leave a lasting impact.</p>
            <h3>Understanding Figma: A Quick Overview</h3>
            <p className='desc-p'>Figma is not your average design tool - it's a cloud-based marvel that enables real-time collaborative design. With its intuitive interface and expansive set of features, it has quickly become the go-to choice for designers and teams around the world. Unlike traditional software, Figma lets multiple designers work on the same project simultaneously, allowing for seamless collaboration and eliminating bottlenecks.</p>
            <h3>Getting Started: Customizing Your Workspace</h3>
            <p className='desc-p'>When you first explore Figma's interface, you'll appreciate its user-friendly and efficient layout. On the left sidebar, you can easily access your design files, while the top bar houses all the essential controls and tools. Whether you're creating a new project or opening an existing one, Figma's adaptability supports wireframing, prototyping, and high-fidelity design - ensuring that you can take your project from concept to completion within a single platform.</p>
            <h3>Mastery of Components and Styles</h3>
            <p className='desc-p'>One of Figma's standout features is its remarkable support for components and styles. Components are reusable design elements such as buttons, headers, and icons. On the other hand, styles are the overall color palettes, typography settings, and effects that can be applied globally across your designs. By harnessing the power of components and styles, you can maintain design consistency throughout your project and make updates effortlessly.</p>
            <h3>Effortless Responsive Design</h3>
            <p className='desc-p'>In today's era of multi-device usage, responsive design is paramount. Here, Figma truly excels by making it seamless to design for various screen sizes and orientations using its ingenious Auto Layout feature. With Auto Layout, elements automatically adjust their size and position based on content, ensuring that your design remains aesthetically pleasing across different devices - from desktops to smartphones.</p>
            <h3>Prototyping and Interactions: Bringing Designs to Life</h3>
            <p className='desc-p'>Taking your design beyond static visuals, Figma offers a game-changing feature - the ability to create interactive prototypes that showcase user flows and interactions. Through the Prototyping feature, you can link frames and elements to simulate user actions such as clicks and swipes. This invaluable tool allows you to thoroughly test the usability and effectiveness of your design even before you move on to the development phase.</p>
            <h3>Real-Time Collaboration: Revolutionizing Teamwork</h3>
            <p className='desc-p'>Bid farewell to the days of endless email exchanges and version control nightmares. Figma's real-time collaboration feature enables designers to effortlessly collaborate, whether they're sitting in the same room or continents apart. All design updates, comments, and annotations are instantly visible to all team members, facilitating efficient communication and minimizing delays. Together, you can create exceptional designs faster than ever before.</p>
          </div>
          </div>
        </section>
      </>
    )
  }
  
  export default CasePost