/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { saveBlog } from "../../Utils/Utility";


export default function SingleBlogsTabs({blog}) {
 
  const handleBookmark =(blogs) =>{
   
    saveBlog(blogs)
  }
    const [tabIndex,setTabIndex] = useState(0)
  return (
    <>
         {/* Tabs start from here ----------------*/}
         <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start  flex-nowrap  text-gray-100">
              <Link
               to=''
               onClick={()=> setTabIndex(0)}
               className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
               ${tabIndex === 0 ? 'border border-b-0':'border-b'} rounded-t-lg border-gray-400 text-gray-400 `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content</span>
              </Link>
              <Link
               to={`author`}
               onClick={()=> setTabIndex(1)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
                ${tabIndex === 1 ? 'border border-b-0':'border-b'} rounded-t-lg border-gray-400 text-gray-400 `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span className="" >Author</span>
              </Link>
              {/* Bookmark button start  */}
          <div 
           onClick={()=> handleBookmark(blog)}
           className="bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30  bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden">
          <MdBookmarkAdd size={20} className="text-secondary" />
          </div>
           {/* Bookmark button end  */}
            </div>
            {/* Tabs end from here ----------------*/}
    </>
  )
}
