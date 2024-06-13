import { AiOutlineCalendar } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import Link from "next/link";

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "5+ years of experience",
  },
  {
    icon: <TfiRulerPencil size={25} />,
    title: "Data-Driven Strategies for Measurable Results",
  },
  {
    icon: <VscFileSubmodule size={25} />,
    title: "Proven Track Record of Success",
  },
  {
    icon: <BiUser size={25} />,
    title: "Custom Solutions Tailored to Your Needs",
  },
];
export const expertise = [
  {
    id: 1,
    title: "Web Design & Development",
    cover: "../images/e1.jpg",
    desc: [
      { text: "Web design" },
      { text: "Web development" },
      { text: "Custom icons & illustrations" },
      { text: "Hosting" },
      { text: "Website audit" },
    ],
  },
  {
    id: 2,
    title: "Digital Marketing",
    cover: "../images/e2.jpg",
    desc: [
      { text: "Social media marketing" },
      { text: "Marketing campaigns" },
      { text: "Markting management" },
      { text: "SEO" },
    ],
  },
  {
    id: 3,
    title: "E-Commerce",
    cover: "../images/e3.jpg",
    desc: [
      { text: "E-Commerce website design" },
      { text: "WooCommerce" },
      { text: "Content management" },
      { text: "Hosting" },
    ],
  },
  {
    id: 4,
    title: "Branding & Creative Services",
    cover: "../images/e4.jpg",
    desc: [
      { text: "Visual identity" },
      { text: "Branding for social media" },
      { text: "Custom illustrations" },
    ],
  },
];
export const testimonial = [
//   {
//     id: 1,
//     name: "Yash Kamal",
//     cover: "../images/brisbane.jpg",
//     post: "President of Brisbane United Football Club",
//     desc: "Niyadda has improved Brisbane United’s Instagram presence, allowing us to express our footballing journey in a more professional manner. Their expertise with branding and social media marketing has strengthened our connection with our supporters. It’s been rewarding to work with Niyadda.",
//   },
//   {
//     id: 2,
//     name: "Moorooka Mosque Committee",
//     cover: "../images/moorooka.jpg",
//     post: "Moorooka Mosque",
//     desc: "Moorooka Mosque has been working closely with Niyadda Agency for our social media branding, content creation and social media posts and flyers. Thanks to Niyadda, we've successfully expanded our social media presence and connected with a broader audience.",
//   },
//   {
//     id: 3,
//     name: "Ahmed Sheikh",
//     cover: "../images/multi.png",
//     post: "Multicultural Healthcare",
//     desc: "We are absolutely thrilled with how our website has come to life! It's truly fantastic. Our clients have been finding it incredibly easy to navigate, and the information is presented very well. We have peace of mind knowing that our services are prominently showcased, helping us attract significant traffic to our site. The entire process was seamless and the service provided was both respectful and encouraging towards bringing our vision to reality. You've truly made our vision come to life!",
//   },
//   {
//     name: "Mohamed Hersi",
//     cover: "../images/ecg.png",
//     post: "Elite Care Givers",
//     desc: "I first came across Niyadda Agency and from the first interaction, it was easy to see why they had a reputation as one of the best in their craft. Professional with a consumer first mindset makes them very easy to work with. With quality at the forefront of their focus, the brochure they designed for my business was eye catching as well easy for my customers to read. Kalid is a compassionate and people friendly owner who is willing to make sure you leave satisfied with the work they have produced. I highly recommend Niyyada Agency ⭐️⭐️⭐️⭐️⭐️",
//   },
//   // {
//   //   id: 4,
//   //   name: "Diana Green",
//   //   cover: "../images/e4.jpg",
//   //   post: "Seven Arts - marketing manager",
//   //   desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
//   // },
];
export const showcase = [
  {
    id: 1,
    title: "Brisbane United Football Club",
    cover: "../images/wall.jpg",
    catgeory: "DIGITAL MARKETING",
    content: [
      {
        title: "Brisbane United Football Club",
        heading1: "Brisbane United: Crafting a Digital Matchday Experience",
        text0:
          "For Brisbane United, the essence of football isn’t just in the 90 minutes of play – it’s a tapestry of moments, emotions, and memories that start way before the whistle and linger long after. Understanding the depth of this sentiment, especially among its fervent fans, we undertook a mission: to encapsulate this sporting fervor into a dynamic digital experience.",
        text1:
          "Beyond just the roars of the crowd and the on-field passions, our challenge was to create a comprehensive digital journey. Starting with the anticipatory build-up to each match, we delved deep into the heart of what makes each game special. From pre-match analysis, player features, to fan predictions, we ensured that the excitement began well in advance.",
        text2:
          "But the journey didn’t stop at kickoff. As the matches unfolded, our real-time posts chronicled the highs, the lows, the goals, and the near-misses. With every twist and turn, fans were kept on the edge of their virtual seats, ensuring they never felt distant from the action.",
        text3:
          "And once the final whistle blew? The narrative continued, capturing post-match reactions, player insights, and, most importantly, celebrating the shared experiences of the Brisbane United community.",
        text4:
          "By crafting these engaging social media narratives, we weren’t just reporting results or sharing updates. We were curating a digital stadium, echoing with cheers, gasps, and chants, ensuring that every Brisbane United fan, regardless of where they were, felt the heartbeats of every match and remained immersed in the club's thrilling journey.",
      },
    ],
    href: "https://www.instagram.com/brisutdfc/",
  },
  {
    id: 2,
    title: "Moorooka Mosque ",
    catgeory: "DIGITAL MARKETING",
    cover: "../images/moor.jpg",
    content: [
      {
        title: "Moorooka Mosque",
        heading1:
          "Moorooka Mosque: Digitally Amplifying the Beliefs of the Community",
        text0:
          "Moorooka Mosque, a cornerstone of faith and community, provided us with a unique palette of cultural and spiritual events. Each gathering, whether it was a solemn prayer, Friday congregation or a vibrant community get-together, carried its own narrative, values, and significance. Our role? To capture this essence and paint a digital tapestry that resonated with both attendees and those who couldn't be present in person.",
        text1:
          "Social media, in this quest, became our chosen medium. Every event was meticulously translated into lively posts, each designed to encapsulate the emotion, fervor, and message of the gathering. Our aim was more than just digital engagement; it was about extending the ambiance of the mosque into the virtual space. Whether it was the serenity of a prayer or the joyous atmosphere of a community iftar, our digital renditions ensured that every member felt the warmth and inclusivity of Moorooka Mosque, no matter where they were.",
        text2:
          "Yet, we recognised the timeless appeal of tangible mementos. Thus, for those moments cherished away from screens, we crafted vibrant flyers. These weren't just pieces of paper but tactile reminders of the mosque's commitment to community, unity, and faith. Each flyer, with its design and message, echoed the very spirit that makes Moorooka Mosque a beacon for many.",
        text3:
          "In essence, our collaboration with Moorooka Mosque wasn't just about digital marketing or design; it was about weaving a narrative of faith, community, and tradition, ensuring that every individual, whether online or offline, felt the embrace of a community that transcends boundaries.",
      },
    ],
    href: "https://www.instagram.com/moorookamosque/",
  },
  {
    id: 3,
    title: "Multicultural Healthcare",
    cover: "../images/multicult.svg",
    catgeory: "WEBSITES",
    content: [
      {
        title: "Multicultural Healthcare",
        heading1:
          "Multicultural Healthcare: Pioneering Digital Outreach in Disability Support",
        text0:
          "At the heart of community care lies Multicultural Healthcare, a beacon for inclusive disability support under the NDIS. Their commitment to diverse and individualised care needed a digital counterpart that would resonate with their vision and values, and that's where our journey began.",
        text1:
          "Figma became our initial workspace, where the essence of Multicultural Healthcare started taking shape. Vibrant layouts intertwined with user-friendly designs reflected the organisation’s mission of extending a helping hand to those from all walks of life. It was here that we envisioned a digital experience tailored to their unique clientele.",
        text2:
          "Our designs then found a home on WordPress, bringing them to life for a wider audience. This transition wasn't merely about establishing an online presence; it was about crafting a portal where individuals seeking disability support could easily navigate, learn, and feel embraced by a community that truly understands their needs.",
        text3:
          "Beyond the screen, the Multicultural Healthcare experience needed tangible representation. Our meticulously designed business cards and brochures became more than just informational tools; they became touchpoints of trust and commitment. Every detail on them echoed the ethos of Multicultural Healthcare: inclusivity, care, and a deep-rooted commitment to serving the community.",
        text4:
          "In uniting the digital and physical realms, we helped encapsulate the essence of Multicultural Healthcare, solidifying their position as pioneers in offering multicultural disability support in today's world.",
      },
    ],
    href: "https://multihealthcare.com.au/",
  },

  {
    id: 4,
    title: "Diaspora Giving Back",
    cover: "../images/diasporaGB.svg",
    catgeory: "WEBSITES",
    content: [
      {
        title: "Diaspora Giving Back",
        heading1:
          "Diaspora Giving Back: Fostering Global Connections for Local Impact",
        text0:
          "In the age of connectivity and global interdependence, Diaspora Giving Back has emerged as a beacon of unity and collaboration. We're thrilled to unveil the digital sphere we've carefully woven for this extraordinary initiative, an online bridge that links Somali professionals from all corners of the world.",
        text1:
          "Diaspora Giving Back, in essence, is a virtual handshake across borders. It's not just a website; it's an international platform where the Somali diaspora comes together, sharing a vision, a mission, and an unwavering commitment to their homeland. Our digital footprint mirrors a timeless journey where expertise transcends distance and resources bridge the gap between continents.",
        text2:
          "Beyond the screen, the heart of Diaspora Giving Back beats with purpose. This is a mission of utilizing the vast knowledge and resources of the Somali diaspora to breathe life into meaningful projects in Somalia/Somaliland. Sustainability is our compass, and transformation is our goal.",
        text3:
          "With each click, each interaction, Diaspora Giving Back signifies unity in diversity. It’s an embodiment of how technology, innovation, and a shared vision can bring together a community scattered across the globe. In this digital expanse, we aren't just launching a website; we're unleashing a global force of change that starts with connectivity and transcends into tangible impact.",
      },
    ],
    href: "https://diasporagivingback.com/",
  },

  {
    id: 5,
    title: "Stichting Somi",
    cover: "../images/somi.svg",
    catgeory: "WEBSITES",
    content: [
      {
        title: "Stichting Somi",
        heading1:
          "Bridging Generations: Digital Empowerment for Somali Youths in the Netherlands",
        text0:
          "Stichting Somi stands as a testament to the spirit of youthful resilience and adaptability in a multicultural European landscape. Our aim was to create a digital platform that embodies the aspirations, history, and vibrant potential of Somali youth. This vision sparked our collaboration.",
        text1:
          "Our creative journey commenced on Figma, the canvas where Stichting Somi began to crystallize. A tapestry of fresh layouts meshed with intuitive navigation encapsulated the collective's dedication to fostering a sense of belonging and empowerment for Somali youths in the Netherlands.",
        text2:
          "Transitioning our designs to WordPress, we aimed to reach a broader audience. But this wasn't just about digital representation; it was about carving a space where Somali millennials could engage, express, and collaborate in a setting attuned to their experiences and aspirations.",
        text3:
          "Beyond pixels and screens, the Stichting Somi ethos sought tangible forms. Our diligently crafted business cards and promotional materials weren't merely channels of information but touchstones that resonated with the values and dynamism of a generation poised to make its mark.",
        text4:
          "By seamlessly merging the digital with the tangible, we captured the essence of Stichting Somi, championing their cause and underlining their significant role in shaping the multicultural tapestry of the Netherlands.",
      },
    ],
    href: "https://somalimillennials.com/",
  },

  {
    id: 6,
    title: "Studio B34",
    cover: "../images/studio_b34.svg",
    catgeory: "WEBSITES",
    content: [
      {
        title: "Studio B34",
        heading1:
          "Studio B34: Breathing Life into Visual Transformation",
        text0:
          "In the world of creative arts, where every frame, every image, is a canvas for storytelling, Studio B34 stands as a testament to the power of visual transformation. When entrusted with the task of re-imagining their digital presence, our journey was imbued with the very essence of artistry.",
        text1:
          "Our initial step was a digital rebirth, a metamorphosis of Studio B34's online platform. We went beyond a mere website revamp, delving into the core of their artistic spirit. Figma, our digital canvas, became the space where we meticulously sculpted a new vision. The layouts, colors, and the very structure were infused with the essence of Studio B34's creative DNA.",
        text2:
          "As our designs breathed life into WordPress, the transformation was complete. The website now wasn't just an online space; it was an artistic portal, a testament to their prowess. Every click, every scroll, mirrored their talent in photography and their deep-rooted artistic sense.",
        text3:
          "This endeavor was not just about pixels and code; it was about encapsulating Studio B34's artistry in a digital realm. In the culmination of this journey, we weren't just revamping a site; we were capturing the very spirit of visual transformation.",
        },
    ],
    href: "https://studiob34.nl/",
  },

  {
    id: 7,
    title: "FDR Kozijnen",
    cover: "../images/fdr.svg",
    catgeory: "WEBSITES",
    content: [
      {
        title: "FDR Kozijnen",
        heading1: "FDR Kozijnen: Moulding Presence with Precision",
        text0: "In the realm of home improvements, where precision and style converge, FDR Kozijnen stands out as a leader in quality window and door solutions. Our task was to craft a digital presence that embodies the meticulous craftsmanship of FDR Kozijnen.",
        text1: "Our journey began with a fundamental transformation using WordPress and Elementor, focusing on aligning the online experience with the elegance and robustness of their products. The new design was sculpted to mirror the company’s commitment to precision and aesthetic appeal.",
        text2: "The transformation brought to life through Elementor allowed for an intuitive user interface, ensuring that each visitor experiences the seamless blend of functionality and design that FDR Kozijnen offers.",
        text3: "This project was not merely about enhancing a digital footprint; it was about embedding FDR Kozijnen's ethos of precision and style into every digital interaction, making the brand synonymous with quality in the digital realm."
      },
    ],
    href: "https://fdrkozijnen.nl/",
  },

  {
    id: 8,
    title: "Bijles is Kennis",
    cover: "../images/bijles.svg",
    catgeory: "WEBSITES",
    content: [
      {
        title: "Bijles is Kennis",
        heading1: "Bijles is Kennis: Enlightening Paths with Knowledge",
        text0: "In the vibrant world of education, where knowledge empowers, Bijles is Kennis represents a beacon of enlightenment. Our challenge was to encapsulate their passion for tutoring in a digital format that speaks directly to learners and educators alike.",
        text1: "We embarked on a redesign journey using Figma and Elementor, crafted within WordPress, to create an engaging platform that reflects the dynamic and inspiring nature of their tutoring services.",
        text2: "The resulting website is not just a portal, but a hub of educational interaction, designed to inspire and inform users, fostering a community of dedicated learners.",
        text3: "Through this digital transformation, we have not only redesigned a website but have also revitalised the spirit of learning, making Bijles is Kennis a cornerstone for educational growth online."
      },
    ],
    href: "https://www.bijlesiskennis.nl/",
  },

  {
    id: 9,
    title: "Miftah Al-Khayr",
    cover: "../images/miftahalkhayr.svg",
    catgeory: "WEBSITES",
    content: [
      {
        title: "Miftah Al-Khayr",
        heading1: "Miftah Al-Khayr: Unlocking Generosity Through Design",
        text0: "In the heart of philanthropy, where every contribution nurtures hope, Miftah Al-Khayr stands as a testament to the power of charitable giving. Our mission was to create a digital expression that resonates with the core values of their non-profit mission.",
        text1: "Using Figma and Elementor within WordPress, we designed a platform that reflects the essence of Miftah Al-Khayr's dedication to charity and community support.",
        text2: "The new design transcends traditional charity websites by offering a user-friendly interface that encourages engagement and fosters a community of benefactors and beneficiaries alike.",
        text3: "This redesign is not just about aesthetics; it’s about creating a gateway that amplifies the impact of generosity, making Miftah Al-Khayr a pivotal online presence in the charity sector."
      },
    ],
    href: "https://miftahalkhayr.nl/",
  },

  {
    id: 10,
    title: "A+ Physiotherapy",
    cover: "../images/A+.svg",
    catgeory: "WEBSITES",
    content: [
      {
        title: "A+ Physiotherapy",
        heading1: "A+ Physiotherapy: Revitalising Care through Digital Innovation",
        text0: "In the dynamic field of healthcare, where effective communication and accessibility are crucial, A+ Physiotherapy sets a new standard. We were tasked with creating a digital presence that not only informs but also embodies the care and expertise of their services.",
        text1: "Our redesign process, utilising Figma and Elementor on WordPress, involved creating a cohesive brand identity, including logo design, that echoes the professional and caring ethos of A+ Physiotherapy.",
        text2: "The website we developed serves as more than just a digital brochure; it is a portal for patient engagement and information, designed to enhance the accessibility of their services.",
        text3: "The outcome of our efforts is a digital platform that not only looks professional but also enriches the patient's journey, making A+ Physiotherapy a leader in digital healthcare experiences."
      },
    ],
    href: "https://aplusphysiotherapy.com/",
  }

  // {
  //   id: 4,
  //   title: "Light Painting",
  //   cover: "../images/s4.jpg",
  //   catgeory: "BRANDING	",
  // },
];
export const brand = [
  {
    id: 1,
    cover: "../images/l1.svg",
  },
  {
    id: 2,
    cover: "../images/l2.svg",
  },
  {
    id: 3,
    cover: "../images/l3.svg",
  },
  {
    id: 4,
    cover: "../images/l4.svg",
  },
  {
    id: 5,
    cover: "../images/l5.svg",
  },
  {
    id: 6,
    cover: "../images/l6.svg",
  },
];
export const blogdata = [
  {
    id: 1,
    title: "The Story of Niyadda: From Twitter Friends to Business Partners",
    author: "Kalid Warsame",
    cover: "../images/twitter.jpeg",
    catgeory: "NIYADDA",
    date: "JULY 17, 2023",
    content: [
      {
        title:
          "The Story of Niyadda: From Twitter Friends to Business Partners",
        text0:
          "It's not every day that two individuals, continents apart, turn a shared passion into a thriving venture. This is the story of Kalid and Mustafa, the duo behind Niyadda, a testament to the possibilities of our digital age.",
        heading1: "A Friendship Forged on Twitter",
        text1:
          "In 2019, the vast world of Twitter brought together two like-minded souls: Kalid, hailing from the sun-kissed coasts of Australia, and Mustafa, nestled amidst the tulips of the Netherlands. A seemingly random interaction soon unveiled a shared academic pursuit. Both were diving deep into the world of Information Technology at their respective universities. As tweets turned to direct messages, their conversations found more common ground: a shared zeal for web development.",
        heading2: "Turning Passion into Profession",
        text2:
          "Amidst late-night coding sessions, academic challenges, and personal growth, a mutual respect and camaraderie blossomed. The idea of monetising their skills began as a whisper. Why not create websites? After all, they had the talent, the shared vision, and a rapidly growing trust in one another. The geographical distance that might've been a barrier for many was merely a logistical detail for them. After all, the internet had already proven its power by bringing them together in the first place.",
        heading3: "Beyond Borders and Time Zones",
        text3:
          "With Kalid in Australia and Mustafa in the Netherlands, one would expect timing to be a challenge. But instead, they turned it into an advantage. Operating nearly round the clock, they were able to deliver faster, covering almost all time zones between them.",
        heading4: "Four Years and Counting...",
        text4:
          "Now, almost half a decade into this journey, one might expect them to rest on their laurels. But for Kalid and Mustafa, the journey of Niyadda is only just beginning. From a serendipitous Twitter meeting to a full-blown business partnership, they've shown that with passion, trust, and a bit of digital magic, anything is possible.",
      },
    ],
  },
  {
    id: 2,
    title: "Design with Figma: A Comprehensive Guide",
    author: "Kalid Warsame",
    cover: "../images/figma.png",
    catgeory: "DESIGN",
    date: "AUGUST 29, 2023",
    content: [
      {
        title:
          "Unlocking the Art of Web Design: An In-Depth Guide to Creating with Figma",
        text0:
          "In the fast-paced world of modern web design, where imagination meets practicality, having the right tools can truly set you apart. And among the array of options available, Figma shines as a versatile and powerful design platform that empowers designers to transform their ideas into captivating realities. This comprehensive guide will take you on a enlightening journey, revealing the ins and outs of designing with Figma and uncovering its potential for creating stunning, user-centric web experiences that leave a lasting impact.",
        heading1: "Understanding Figma: A Quick Overview",
        text1:
          "Figma is not your average design tool - it's a cloud-based marvel that enables real-time collaborative design. With its intuitive interface and expansive set of features, it has quickly become the go-to choice for designers and teams around the world. Unlike traditional software, Figma lets multiple designers work on the same project simultaneously, allowing for seamless collaboration and eliminating bottlenecks.",
        heading2: "Getting Started: Customsing Your Workspace",
        text2:
          "When you first explore Figma's interface, you'll appreciate its user-friendly and efficient layout. On the left sidebar, you can easily access your design files, while the top bar houses all the essential controls and tools. Whether you're creating a new project or opening an existing one, Figma's adaptability supports wireframing, prototyping, and high-fidelity design - ensuring that you can take your project from concept to completion within a single platform.",
        heading3: "Mastery of Components and Styles",
        text3:
          "One of Figma's standout features is its remarkable support for components and styles. Components are reusable design elements such as buttons, headers, and icons. On the other hand, styles are the overall color palettes, typography settings, and effects that can be applied globally across your designs. By harnessing the power of components and styles, you can maintain design consistency throughout your project and make updates effortlessly.",
        heading4: "Effortless Responsive Design",
        text4:
          "In today's era of multi-device usage, responsive design is paramount. Here, Figma truly excels by making it seamless to design for various screen sizes and orientations using its ingenious Auto Layout feature. With Auto Layout, elements automatically adjust their size and position based on content, ensuring that your design remains aesthetically pleasing across different devices - from desktops to smartphones.",
        heading5: "Prototyping and Interactions: Bringing Designs to Life",
        text5:
          "Taking your design beyond static visuals, Figma offers a game-changing feature - the ability to create interactive prototypes that showcase user flows and interactions. Through the Prototyping feature, you can link frames and elements to simulate user actions such as clicks and swipes. This invaluable tool allows you to thoroughly test the usability and effectiveness of your design even before you move on to the development phase.",
        heading6: "Real-Time Collaboration: Revolutionising Teamwork",
        text6:
          "Bid farewell to the days of endless email exchanges and version control nightmares. Figma's real-time collaboration feature enables designers to effortlessly collaborate, whether they're sitting in the same room or continents apart. All design updates, comments, and annotations are instantly visible to all team members, facilitating efficient communication and minimising delays. Together, you can create exceptional designs faster than ever before.",
        heading7: "Plugins: Expanding the Possibilities",
        text7:
          "Figma's capabilities can be further expanded through its extensive library of plugins. These plugins offer additional functionalities and integrations with other tools, ultimately streamlining your design workflow. From automating tedious design tasks to visualising complex data, the possibilities are endless thanks to Figma's growing ecosystem of plugins.",
        heading8:
          "Final Thoughts: Empowering Your Web Design Journey with Figma",
        text8:
          "In the constantly evolving realm of web design, Figma emerges as an invaluable ally for designers who constantly push boundaries and strive to create exceptional user experiences. Its collaborative nature, responsive design features, and diverse set of tools make it an indispensable component of any designer's toolkit. By mastering Figma, you're not just designing web interfaces - you're crafting meaningful interactions that captivate and engage users in the digital world. So, dive in, experiment, and let Figma unlock your creative potential, taking your web design endeavors to new heights.",
      },
    ],
  },
  {
    id: 3,
    title: "SEO Strategies: Keywords Optimisation",
    author: "Kalid Warsame",
    cover: "../images/b3.jpg",
    catgeory: "MARKETING",
    date: "May 01, 2024",
    content: [
      {
        title:
          "Maximising SEO Impact: Harnessing the Power of Keywords in Your Content",
        text0:
        "In today's digital landscape, search engine optimisation (SEO) is crucial for businesses striving to enhance their online visibility and attract more customers. Among the various elements of SEO, keywords play a pivotal role in determining a website's ranking on search engine results pages (SERPs). However, simply sprinkling keywords throughout your content is not enough to achieve optimal results. Business owners must understand the importance of strategic keyword usage and how it can positively impact their online presence.",
        heading1: "Understanding Keywords",
        text1:
        "Keywords are specific words or phrases that users type into search engines when looking for information, products, or services. These terms are the bridge between what people are searching for and the content that businesses provide. In the realm of SEO, keywords serve as signals to search engines, indicating the relevance of a webpage to a particular query.",
        heading2: "The Role of Keywords in SEO",
        text2:
        "Effectively utilised, keywords can improve search engine rankings, thereby increasing the likelihood that websites appear prominently when users search for related terms. This visibility can drive targeted traffic, attracting visitors who are actively seeking the products or services offered. Keywords also enhance the user experience, enabling people to find relevant information swiftly, which contributes to overall satisfaction with the website.",
        heading3: "Best Practices for Using Keywords in Blogs and Articles",
        text3:
          "To effectively leverage the power of keywords, business owners should begin with thorough keyword research to identify terms that align with their business goals and resonate with their target audience. This should include a focus on long-tail keywords—longer, more specific phrases with typically lower search volumes but higher conversion rates. Keywords should be used naturally within content to avoid the pitfalls of keyword stuffing, which can negatively impact readability and search rankings. Including keywords in meta titles, descriptions, and headings can also improve content visibility in search results.",
        text4:
          "Creating high-quality content remains paramount; keywords should enhance, not overshadow, the quality of the information provided. Business owners should also regularly update and refresh their content, incorporating new keywords and information to maintain relevance and engagement. Monitoring content performance through analytics tools and adjusting strategies based on these insights is essential for keeping pace with the ever-evolving algorithms of search engines and changing user behaviours.",
        heading5: "Conclusion",
        text5:
          "Strategically incorporating keywords into blogs and articles is essential for maximising SEO impact and driving organic traffic to a website. By understanding the crucial role of keywords and adhering to best practices in their use, business owners can not only enhance their online visibility but also attract more qualified leads, ultimately fostering greater success in the competitive digital marketplace.",
        },
    ],
  },
];
export const teamdata = [
  {
    id: 1,
    title: "Mustafa Maalin",
    cover: "../images/mustafa2.png",
    post: "FOUNDER, DESIGNER & DEVELOPER",
    href: "https://www.linkedin.com/in/mustafa-m-b1a74435/",
  },
  {
    id: 2,
    title: "Kalid Warsame",
    cover: "../images/kalid.png",
    post: "FOUNDER, DEVELOPER",
    href: "https://www.linkedin.com/in/kalid-warsame/",
  },
  {
    id: 3,
    title: "Shuceyb Maalin",
    cover: "../images/shucayb.png",
    post: "CREATIVE DEVELOPER",
    href: "https://www.linkedin.com/in/shuceyb-maalin-27a0621b9/",
  },
  {
    id: 8,
    title: "Join our team!",
    cover: "../images/t8.jpg",
    post: "",
    href: "mailto:info@niyadda.com",
  },
];
