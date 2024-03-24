/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";


// eslint-disable-next-line react/prop-types
export default function BlogCard({ blog, deletable ,handleDelete}) {
  const { cover_image, title, description, published_at, id } = blog;

  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto border-2 transition hover:scale-105 border-primary hover:border-secondary  group hover:no-underline focus:no-underline border-opacity-30 p-3 rounded-xl"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || "https://source.unsplash.com/random/480x360?1"}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-black">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
        onClick={()=> handleDelete(id)}
        className="absolute -right-5 -top-4 bg-primary p-3 rounded-full hover:scale-105">
          <RiDeleteBin2Fill
            size={20}
            className="text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
}
