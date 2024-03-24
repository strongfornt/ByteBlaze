
import {  Outlet, useLoaderData } from "react-router-dom";
import SingleBlogsTabs from "./SingleBlogsTabs";


export default function SingleBlogs() {

  const blog = useLoaderData();
  const {
    
    title,
   
    published_at,
   
    comments_count,
    public_reactions_count,
    reading_time_minutes,
   
  } = blog;

 

  return (
    <>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8  ">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
              <p className="text-sm">
                {reading_time_minutes} min read •{" "}
                {new Date(published_at).toLocaleDateString()}
              </p>

              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {comments_count} comments • {public_reactions_count} views
              </p>
            </div>
           <SingleBlogsTabs blog={blog} />

          
          </div>
        <Outlet/>
        </article>
        <div>
        
         
        </div>
      </div>
    </>
  );
}
