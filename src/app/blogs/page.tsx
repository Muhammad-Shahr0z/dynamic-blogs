"use client";

import Link from "next/link";
import { useAppSelector } from "../reduxStore/hooks";
import { RootState } from "../reduxStore/Store";
import BlogCard from "@/components/BlogCard";

const BlogList = () => {
  const blogs = useAppSelector((state: RootState) => state.blog.blog);



  return (
<div>

 

  {blogs.length >0 && (
 <h1 className="text-center text-4xl font-bold leading-8 tracking-wide mb-4">
 Latest Blogs
</h1>
    )}

{blogs.length === 0 && (
      <div className="flex flex-col justify-center items-center gap-4 min-h-[165px]">
        <h2 className="text-2xl font-bold">No Blogs Found</h2>
        <Link href="/input" className="bg-blue-600 py-2 px-4 rounded-lg text-white text-sm hover:bg-blue-800">
          Create Blog
        </Link>
      </div>
    )}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">




    {blogs.map((item, id) => (
      <div key={id} className="flex flex-col">
        <BlogCard
          author={item.author}
          title={item.title}
          description={item.description}
          image={item.image}
          date={item.date}
          id={item.id}
        />
   <Link
          className="bg-blue-600 py-2 h-fit rounded-b-lg text-white text-sm hover:bg-blue-800 text-center shadow-md shadow-slate-700"
          href={`/blogs/${item.id}`}
        >
          Read Blog
        </Link>

      </div>
    ))}
  </div>
</div>

  );
};

export default BlogList;
