"use client";

import { addComments } from "@/app/reduxStore/BlogSlice";
import { useAppSelector } from "@/app/reduxStore/hooks";
import { RootState } from "@/app/reduxStore/Store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/app/reduxStore/hooks";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { SendHorizontal, UserCheck } from "lucide-react";

const Bloggers = ({ params }:{ params: { blog: string } }) => {
  interface Comment {
    id: string;
    comment: string;
  }

  const DynamicId = params.blog;
  const blogs = useAppSelector((state: RootState) => state.blog);
  const commentDispatch = useAppDispatch();
  const useCommentSelector = useAppSelector(
    (state: RootState) => state.comments
  );
  const SingleBlog = blogs.find((item) => item.id === params.blog);
  const [commentVal, setcommentVal] = useState<string>("");
  const [isDisable, setIsDisable] = useState<boolean>(true);

  useEffect(() => {
    if (commentVal.trim()) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [commentVal]);

  const setcommentHandler = () => {
    const commentsObject: Comment = {
      id: DynamicId,
      comment: commentVal,
    };
    commentDispatch(addComments(commentsObject));
    setcommentVal("");
  };

  return (
    <div className="md:max-w-[50%] w-auto mx-auto text-justify flex flex-col justify-center items-center gap-4 px-4 md:p-0">
      <h2 className="text-3xl font-bold text-center">{SingleBlog?.title}</h2>
      <Image
        src={SingleBlog ? SingleBlog.image : ""}
        alt="image"
        height={600}
        width={700}
      />
      <p>{SingleBlog?.description}</p>

      <div className="self-start">
        <p className="text-2xl font-bold">
          <span className="text-lg font-normal text-gray-600 italic mr-1  dark:text-zinc-400">
            Written By
          </span>
          {SingleBlog?.author}
        </p>
        <span className="text-lg font-semibold italic text-gray-700 dark:text-zinc-400">
          Published On : {SingleBlog?.date}
        </span>
      </div>

      <div className="max-w-[100%] mx-auto p-4 border border-gray-300 rounded-md shadow-md min-w-[100%]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Comments</h2>
          <div className="flex items-center space-x-2">
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-blue-500" />
            <span className="text-gray-600 dark:text-white font-bold">
              {
                useCommentSelector.filter((item) => item.id === DynamicId)
                  .length
              }
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setcommentVal(e.target.value)}
            value={commentVal}
          />
          <button
            onClick={() => setcommentHandler()}
            disabled={isDisable}
            className="px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            <SendHorizontal />
          </button>
        </div>

        <ul className="space-y-2 mt-2">
          {useCommentSelector
            .filter((item) => item.id === DynamicId)
            .map((item) => (
 
              <li
                className="p-2 border border-gray-200 rounded-md bg-gray-50 dark:text-black text-md w-[100%] break-words"
                key={item.id}
              >
            <UserCheck className="inline mr-4 text-blue-600 mb-1" /> {item.comment.trim()}
              </li>
    
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Bloggers;
