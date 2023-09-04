import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
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
          <TitleSm title='DESIGN TOOLS / AUGUST 29, 2023' /> <br />
          <br />
          <Title title={post.title} className='title-bg' />
          <div className='img py'>
            <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
          </div>
          <div className='desc'>
            <TitleSm title='Unlocking the Art of Web Design: An In-Depth Guide to Creating with Figma' />
            <p className='desc-p'> In the fast-paced world of modern web design, where imagination meets practicality, having the right tools can truly set you apart. And among the array of options available, Figma shines as a versatile and powerful design platform that empowers designers to transform their ideas into captivating realities. This comprehensive guide will take you on a enlightening journey, revealing the ins and outs of designing with Figma and uncovering its potential for creating stunning, user-centric web experiences that leave a lasting impact.</p>
            <h1>Understanding Figma: A Quick Overview</h1>
            <p className='desc-p'>Figma is not your average design tool - it's a cloud-based marvel that enables real-time collaborative design. With its intuitive interface and expansive set of features, it has quickly become the go-to choice for designers and teams around the world. Unlike traditional software, Figma lets multiple designers work on the same project simultaneously, allowing for seamless collaboration and eliminating bottlenecks.</p>
            <h1>Getting Started: Customizing Your Workspace</h1>
            <p className='desc-p'>When you first explore Figma's interface, you'll appreciate its user-friendly and efficient layout. On the left sidebar, you can easily access your design files, while the top bar houses all the essential controls and tools. Whether you're creating a new project or opening an existing one, Figma's adaptability supports wireframing, prototyping, and high-fidelity design - ensuring that you can take your project from concept to completion within a single platform.</p>
            <h1>Mastery of Components and Styles</h1>
            <p className='desc-p'>One of Figma's standout features is its remarkable support for components and styles. Components are reusable design elements such as buttons, headers, and icons. On the other hand, styles are the overall color palettes, typography settings, and effects that can be applied globally across your designs. By harnessing the power of components and styles, you can maintain design consistency throughout your project and make updates effortlessly.</p>
            <h1>Effortless Responsive Design</h1>
            <p className='desc-p'>In today's era of multi-device usage, responsive design is paramount. Here, Figma truly excels by making it seamless to design for various screen sizes and orientations using its ingenious Auto Layout feature. With Auto Layout, elements automatically adjust their size and position based on content, ensuring that your design remains aesthetically pleasing across different devices - from desktops to smartphones.</p>
            <h1>Prototyping and Interactions: Bringing Designs to Life</h1>
            <p className='desc-p'>Taking your design beyond static visuals, Figma offers a game-changing feature - the ability to create interactive prototypes that showcase user flows and interactions. Through the Prototyping feature, you can link frames and elements to simulate user actions such as clicks and swipes. This invaluable tool allows you to thoroughly test the usability and effectiveness of your design even before you move on to the development phase.</p>
            <h1>Real-Time Collaboration: Revolutionizing Teamwork</h1>
            <p className='desc-p'>Bid farewell to the days of endless email exchanges and version control nightmares. Figma's real-time collaboration feature enables designers to effortlessly collaborate, whether they're sitting in the same room or continents apart. All design updates, comments, and annotations are instantly visible to all team members, facilitating efficient communication and minimizing delays. Together, you can create exceptional designs faster than ever before.</p>
            <h1>Plugins: Expanding the Possibilities</h1>
            <p className='desc-p'>Figma's capabilities can be further expanded through its extensive library of plugins. These plugins offer additional functionalities and integrations with other tools, ultimately streamlining your design workflow. From automating tedious design tasks to visualizing complex data, the possibilities are endless thanks to Figma's growing ecosystem of plugins.</p>
            <h1>Final Thoughts: Empowering Your Web Design Journey with Figma</h1>
            <p className='desc-p'>In the constantly evolving realm of web design, Figma emerges as an invaluable ally for designers who constantly push boundaries and strive to create exceptional user experiences. Its collaborative nature, responsive design features, and diverse set of tools make it an indispensable component of any designer's toolkit. By mastering Figma, you're not just designing web interfaces - you're crafting meaningful interactions that captivate and engage users in the digital world. So, dive in, experiment, and let Figma unlock your creative potential, taking your web design endeavors to new heights.</p>
          </div>
        </div>
        <Banner />

        <div className='heading-title'>
          <div className='desc'>
            <TitleSm title='Integer a justo vitae arcu fermentum...' />

            <p className='desc-p'> Phasellus nec tempor neque. In nec finibus lorem, in aliquet risus. Proin elit elit, cursus vel vulputate at, volutpat quis metus. Praesent at blandit tellus.</p>
            <p className='desc-p'>Morbi finibus velit erat, a pulvinar lacus mollis sit amet. Nulla iaculis convallis fermentum. Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper! Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
            <p className='desc-p'>Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper.</p>
            <p className='desc-p'>Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default SinglePost;
