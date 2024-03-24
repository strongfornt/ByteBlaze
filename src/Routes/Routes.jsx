import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import SingleBlogs from "../Components/SingleBlog/SingleBlogs";
import Bookmark from "../pages/Bookmark";
import ContentOne from "../Components/SingleBlogsContent/ContentOne";
import Author from "../Components/SingleBlogsContent/Author";

 
 
 export const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      errorElement:<ErrorPages/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/blogs',
          element:<Blogs/>,
          loader:()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path:'/blog/:id',
          element:<SingleBlogs/>,
          loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index:true,
                element:<ContentOne/>,
                loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:'author',
                element:<Author/>,
                loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
        {
          path:'/bookmark',
          element:<Bookmark/>
        }
      ]
    }
  ])
  