"use client";
import { FormEvent, useRef, useState } from "react";
import { addBlog } from "../reduxStore/BlogSlice";
import { useAppDispatch } from "../reduxStore/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const BlogInputCard = () => {
  const useDispatch = useAppDispatch();

  interface Blog {
    image: string;
    author: string;
    title: string;
    description: string;
    date: string;
  }

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState("");
  const [author, setAurthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toLocaleString());

  const LoadImage = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL: string = URL.createObjectURL(file);
      setImage(imageURL);
    } else {
      console.error("No file");
    }
  };

  const FormHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const NewDate = new Date().toLocaleString();
    setDate(NewDate);
    const ArrayBlog: Blog = { image, author, title, description, date };
    useDispatch(addBlog(ArrayBlog));

    setAurthor("");
    setTitle("");
    setDescription("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    toast.success(
      <div className="flex flex-col justify-center items-start gap-1">
        <div className="">Blog Post Successfully</div>
        <Link
          className="pb-[2px] border-b-2 border-white"
          href="/blogs"
          passHref
        >
          Go To Blogs
        </Link>
      </div>,

      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Add Blog Post
      </h2>
      <form onSubmit={(e:FormEvent<HTMLFormElement>) => FormHandler(e)} className="space-y-4">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="w-full p-2 border dark:bg-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => LoadImage(e)}
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-600 focus:ring-blue-500"
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAurthor(e.target.value)}
          value={author}
          required
        />
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-600 focus:ring-blue-500"
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          placeholder="Blog Description"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-600 focus:ring-blue-500 resize-none"
          rows={4}
          onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          value={description}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add Blog
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default BlogInputCard;
