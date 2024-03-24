import { useLoaderData } from "react-router-dom"
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

export default function ContentOne() {
    const blog = useLoaderData();
    const {cover_image,title,tags,body_html} =blog;
  return (
   <>
       <div
   
        className=" mx-auto border-2 border-primary   group hover:no-underline focus:no-underline border-opacity-30 p-3 rounded-xl"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || 'https://source.unsplash.com/random/480x360?1'}
        />
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
         {
            tags.map((tags,idx) =>   <a key={idx}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline  text-gray-900"
          >
           #{tags}
          </a>)
         }
       
          </div>
          <div className=" space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
           {title}
          </h3>
        
          <Markdown rehypePlugins={[rehypeRaw]} >
              {body_html}
          </Markdown>
        
        </div>
      </div>
   </>
  )
}
