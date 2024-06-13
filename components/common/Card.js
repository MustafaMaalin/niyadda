import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useRouter } from "next/router";
import { slugify } from "assets/utils/slugify"; // Adjust the import path as needed

export const Card = ({ data, caption, show, path }) => {
  const router = useRouter();
  const slug = slugify(data.title);

  return (
    <div className='card'>
      <div className='card-img'>
        <img src={data.cover} alt={data.title} />
      </div>
      <div className='card-details'>
        <div
          className='title-link'
          onClick={() => {
            if (path && slug) {
              router.push(`${path}/${slug}`);
            }
          }}
          style={{ cursor: path ? 'pointer' : 'default' }}
        >
          <TitleSm title={data.title} />
        </div>
        {caption && (
          <div
            onClick={() => {
              if (path && slug) {
                router.push(`${path}/${slug}`);
              }
            }}
            style={{ cursor: path ? 'pointer' : 'default' }}
          >
            <div>
              {caption} <HiOutlineArrowRight className='link-icon' />
            </div>
          </div>
        )}
        <div className='flex'>
          <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
        </div>
        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
