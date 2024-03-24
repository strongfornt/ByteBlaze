import { useEffect, useState } from "react"
import { deleteBlog, getBlogs } from "../Utils/Utility"
import BlogCard from "../Components/BlogCard";

import EmptyState from "../Components/EmptyState/EmptyState";




export default function Bookmark() {
  const [blogs,setBlogs] = useState([])
  useEffect(()=>{
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs)
  },[]);

  const handleDelete =(id) =>{
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs)
  }

 if(blogs.length < 1) return <EmptyState message={'No Book Marks Available'} address={'/blogs'} label={'Go To Blogs'} />
  return (
    <>
<div className="grid  justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 lg:px-12 py-8 ">
            {blogs.map((blog, index) => (
              <BlogCard deletable={true}  key={index} blog={blog} handleDelete={handleDelete} />
            ))}
          </div>
   
    </>
  )
}
