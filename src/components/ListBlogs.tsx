import Image from "next/image";
interface CardInterface {
  author: string;
  title: string;
  description: string;
  image: string;
}

const BlogCard = ({ author, title, description, image }: CardInterface) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={image}
        alt="Blog Image"
        height={200}
        width={400}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-sm font-medium text-gray-700">Author: {author}</p>
      </div>
    </div>
  );
};

export default BlogCard;
