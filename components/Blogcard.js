// import React from "react"
// import { Card } from "./common/Card"
// import { blogdata } from "@/assets/data/dummydata"
// import Link from "next/link"

// const BlogCard = () => {
//   return (
//     <>
//       <div className='container blog-card grid-2 py'>
//         {blogdata.map((item) => (
//           <Card data={item} key={item.id} path='blogs' />
//         ))}
//       </div>
//     </>
//   )
// }

// export default BlogCard

import React from "react";
import { Card } from "./common/Card";
import { blogdata } from "@/assets/data/dummydata";
import Link from "next/link";

const BlogCard = () => {
  // Sort the blogdata by ID in descending order
  const sortedBlogData = blogdata.sort((a, b) => b.id - a.id);

  return (
    <>
      <div className="container blog-card grid-2 py">
        {sortedBlogData.map((item) => (
          <Card data={item} key={item.id} path="blogs" />
        ))}
      </div>
    </>
  );
};

export default BlogCard;