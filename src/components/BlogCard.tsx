import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  image: string;
  author: string;
  title: string;
  description: string;
  date: string;
  id: any;
}

const BlogCard = ({
  image,
  author,
  title,
  description,
  date,
  id,
}: BlogCardProps) => {
  return (
    <div className="md:min-h-[450px] md:max-h-[450px] w-1/1 p-3 rounded-lg shadow-md shadow-slate-700 dark:border-[1px] dark:border-slate-500 dark:shadow-none cursor-pointer">
      <div className="min-h-48 max-h-48 overflow-hidden bg-gray-600 rounded-lg">
        <Image
          src={image}
          height={200}
          width={200}
          alt="Image"
          className="h-full w-full"
        />
      </div>

      <p className="text-xl font-semibold mt-4 max-h-8 min-h-8 overflow-hidden">
        {title}
      </p>

      <p className="text-md font-semibold max-h-8 min-h-8">
        <span className="text-sm mr-2 text-gray-700 dark:text-white font-normal italic">
          Written By
        </span>
        {author}
      </p>

      <p className="min-h-24 max-h-24 overflow-auto text-justify p-2 text-sm">
        {description}
      </p>

      <div className="max-h-12 min-h-12 flex flex-col-reverse gap-2 md:flex-row justify-between items-center mt-4">
        <Link
          className="bg-blue-600 py-1 px-3 h-fit rounded-sm text-white text-sm hover:bg-blue-800"
          href={`/blogs/${id}`}
        >
          Read Blog
        </Link>
        <span className="text-sm md:font-semibold text-gray-700 font-normal dark:text-white ">
          Published on : {date}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
