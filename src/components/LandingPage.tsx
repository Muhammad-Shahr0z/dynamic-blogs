import React from "react";
import Link from "next/link";
import Privacy from "./Privacy";
import { FileText, ShieldQuestion, SquarePen } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Welcome to <span className="text-blue-500">SherryBlog</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Your hub for insightful articles, creative ideas, and personal
          stories.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 border rounded-lg shadow-lg transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">Create Your New Blog</h2>
          <p className="mt-2">
            Create your blog now and join the global community of writers and
            creators!
          </p>
          <button className="mt-4 px-4 py-2 font-medium border rounded-full transition-all hover:bg-opacity-20 hover:bg-slate-400">
            <Link href={"/input"} className="flex justify-center items-center gap-2">
            <SquarePen className="text-blue-600 dark:text-white" />
            <span>Create Blogs</span>
            </Link>
          </button>
        </div>

        <div className="p-6 border rounded-lg shadow-lg transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">Latest Blogs</h2>
          <p className="mt-2">
            Stay updated with the newest blog entries and ideas.
          </p>
          <button className="mt-4 px-4 py-2 font-medium border rounded-full transition-all hover:bg-opacity-20 hover:bg-slate-400">
            <Link href="/blogs" className="flex justify-center items-center gap-2">
            <FileText className="inline text-blue-600"/>
            <span>Discover</span>
            </Link>
          </button>
        </div>

        <div className="p-6 border rounded-lg shadow-lg transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold">About SherryBlog</h2>
          <p className="mt-2">
            Learn more about the journey and vision behind this platform.
          </p>
          <button className="mt-4 px-4 py-2 font-medium border rounded-full transition-all hover:bg-opacity-20 hover:bg-slate-400">
            <Link href="/about" className="flex justify-center items-center gap-2">
            <ShieldQuestion className="text-blue-600" />
            <span>Know More</span>
            </Link>
          </button>
        </div>
      </div>

      <Privacy />
    </div>
  );
};

export default LandingPage;
