"use client";
import { useAppSelector } from "../reduxStore/hooks";
import { RootState } from "../reduxStore/Store";
import BlogCard from "@/components/BlogCard";

const BlogList = () => {
  const blogs = useAppSelector((state: RootState) => state.blog);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold leading-8 tracking-wide mb-4">
        Latest Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {blogs.map((item, id) => (
          <BlogCard
            key={id}
            author={item.author}
            title={item.title}
            description={item.description}
            image={item.image}
            date={item.date}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
