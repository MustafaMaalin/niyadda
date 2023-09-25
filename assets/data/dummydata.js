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
  {
    id: 1,
    name: "Yash Kamal",
    cover: "../images/brisbane.jpg",
    post: "President of Brisbane United Football Club",
    desc: "Niyadda has improved Brisbane United’s Instagram presence, allowing us to express our footballing journey in a more professional manner. Their expertise with branding and social media marketing has strengthened our connection with our supporters. It’s been rewarding to work with Niyadda.",
  },
  {
    id: 2,
    name: "Moorooka Mosque Committee",
    cover: "../images/moorooka.jpg",
    post: "Moorooka Mosque",
    desc: "Moorooka Mosque has been working closely with Niyadda Agency for our social media branding, content creation and social media posts and flyers. Thanks to Niyadda, we've successfully expanded our social media presence and connected with a broader audience.",
  },
  {
    id: 3,
    name: "Ahmed Sheikh",
    cover: "../images/multi.png",
    post: "Multicultural Healthcare",
    desc: "We are absolutely thrilled with how our website has come to life! It's truly fantastic. Our clients have been finding it incredibly easy to navigate, and the information is presented very well. We have peace of mind knowing that our services are prominently showcased, helping us attract significant traffic to our site. The entire process was seamless and the service provided was both respectful and encouraging towards bringing our vision to reality. You've truly made our vision come to life!",
  },
  {
    name: "Mohamed Hersi",
    cover: "../images/ecg.png",
    post: "Elite Care Givers",
    desc: "I first came across Niyadda Agency and from the first interaction, it was easy to see why they had a reputation as one of the best in their craft. Professional with a consumer first mindset makes them very easy to work with. With quality at the forefront of their focus, the brochure they designed for my business was eye catching as well easy for my customers to read. Kalid is a compassionate and people friendly owner who is willing to make sure you leave satisfied with the work they have produced. I highly recommend Niyyada Agency ⭐️⭐️⭐️⭐️⭐️",
  },
  // {
  //   id: 4,
  //   name: "Diana Green",
  //   cover: "../images/e4.jpg",
  //   post: "Seven Arts - marketing manager",
  //   desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
  // },
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
    cover: "../images/multicult.jpg",
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
    title: "Somali Millennials",
    cover: "../images/somi.jpg",
    catgeory: "WEBSITES",
    content: [
      {
        title: "Somali Millennials",
        heading1:
          "Bridging Generations: Digital Empowerment for Somali Youths in the Netherlands",
        text0:
          "Somali Millennials stands as a testament to the spirit of youthful resilience and adaptability in a multicultural European landscape. Our aim was to create a digital platform that embodies the aspirations, history, and vibrant potential of Somali youth. This vision sparked our collaboration.",
        text1:
          "Our creative journey commenced on Figma, the canvas where Somali Millennials began to crystallize. A tapestry of fresh layouts meshed with intuitive navigation encapsulated the collective's dedication to fostering a sense of belonging and empowerment for Somali youths in the Netherlands.",
        text2:
          "Transitioning our designs to WordPress, we aimed to reach a broader audience. But this wasn't just about digital representation; it was about carving a space where Somali millennials could engage, express, and collaborate in a setting attuned to their experiences and aspirations.",
        text3:
          "Beyond pixels and screens, the Somali Millennials ethos sought tangible forms. Our diligently crafted business cards and promotional materials weren't merely channels of information but touchstones that resonated with the values and dynamism of a generation poised to make its mark.",
        text4:
          "By seamlessly merging the digital with the tangible, we captured the essence of Somali Millennials, championing their cause and underlining their significant role in shaping the multicultural tapestry of the Netherlands.",
      },
    ],
    href: "https://somalimillennials.com/",
  },

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
  // {
  //   id: 3,
  //   title: "How Kalid and Mustafa started Niyadda",
  //   cover: "../images/b3.jpg",
  //   catgeory: "STORYTIME",
  //   date: "AUGUST 15, 2023",
  //   content: "We are the creators of Niyadda Digital Agency, Mustafa and Kalid. We are young developers with high ambitions and aspirations in the digital world. After completing our internships and earning our degrees, we decided to found this agency. At Niyadda Digital Agency, the continuity of your product is always guaranteed.",
  // },
];
export const teamdata = [
  {
    id: 1,
    title: "Mustafa Maalin",
    cover: "../images/t1 2.jpg",
    post: "FOUNDER, DESIGNER & DEVELOPER",
    href: "https://www.linkedin.com/in/mustafa-m-b1a74435/",
  },
  {
    id: 2,
    title: "Kalid Warsame",
    cover: "../images/t2.jpg",
    post: "FOUNDER, DEVELOPER",
    href: "https://www.linkedin.com/in/kalid-warsame/",
  },
  {
    id: 3,
    title: "Shuceyb Maalin",
    cover: "../images/t3.jpg",
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
