import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";


interface Blog {
  image: string;
  author: string;
  title: string;
  description: string;
  date: string;
  id?: string;

}

interface initialState {
  blog: Blog[];

}

const initialState: initialState = {
  blog: [
    {
      image: "/ai.jpg",
      author: "Muhammad Shahroz",
      title: "What is AI?",
      description: `What is AI?
   Artificial Intelligence refers to the simulation of human intelligence by machines. These systems can perform tasks that typically require human intelligence, such as problem-solving, decision-making, learning, and understanding language. AI can be categorized into two main types:
Narrow AI: Designed for specific tasks, like facial recognition or recommendation systems.
General AI: A hypothetical system capable of performing any intellectual task that a human can do (still under development).
Healthcare:
AI-powered systems are used for early disease detection, personalized medicine, and even robotic surgeries. For instance, AI can analyze X-rays faster and more accurately than humans in certain cases.

Education:
AI tools like virtual tutors and adaptive learning platforms are personalizing education, ensuring that students learn at their own pace.

Business:
AI is streamlining processes, automating repetitive tasks, and providing valuable insights through data analysis. Chatbots and virtual assistants are enhancing customer service experiences.

Transportation:
Self-driving cars, powered by AI, are set to redefine the future of transportation, promising safer and more efficient travel.

Entertainment:
AI algorithms recommend content on platforms like Netflix and Spotify, creating personalized entertainment experiences.




`,
      date: "11/28/24 2:43",
      id: "0",
    },
    {
      image: "/nextjs.jpg",
      author: "Muhammad Shahroz",
      title: "A Comprehensive Guide to Next.js",
      description: `What is Next.js?
Next.js is a React framework that allows developers to build fast and user-friendly web applications with minimal configuration. Developed by Vercel, it provides a set of built-in features that streamline the development process, making it easier to build production-ready applications with React.

Key Features of Next.js:
Server-Side Rendering (SSR): Automatically renders pages on the server, improving SEO and performance.
Static Site Generation (SSG): Pre-renders pages at build time for faster performance.
API Routes: Allows you to build backend logic within the Next.js application itself.
File-based Routing: Automatically creates routes based on the file structure in the pages directory.
Built-in CSS and Sass Support: Simplifies styling with built-in support for CSS and Sass.
Image Optimization: Optimizes images automatically to improve page load times.`,

      date: "11/27/24 10:43",
      id: "1",
    },
    {
      image: "/tailwind.png",
      author: "Muhammad Shahroz",
      title: "What is Tailwind CSS?",
      description: `What is Tailwind CSS?
Tailwind CSS is a utility-first CSS framework that provides a wide range of low-level utility classes to help you build custom designs without having to write custom CSS. Rather than relying on predefined components like traditional CSS frameworks (e.g., Bootstrap or Foundation), Tailwind focuses on small, reusable utility classes that can be combined to create any design you can imagine.

Key Features of Tailwind CSS:
Utility-First: Provides small utility classes that can be composed to create any design.
Responsive: Built-in classes for responsive design, ensuring your website looks great on any device.
Customizable: Fully customizable to fit your project’s needs, allowing you to change colors, fonts, breakpoints, etc.
No Opinionated Design: Tailwind does not impose design patterns, giving you complete creative control.
Optimized for Performance: By purging unused CSS, Tailwind reduces the final CSS size, making your website faster.`,
      date: "11/27/24 10:43",
      id: "2",
    },
  ],

};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<Blog>) => {
      state.blog.push({ ...action.payload, id: nanoid() });
    },
    removeBlog: (state, action: PayloadAction<{ id: string }>) => {
      state.blog = state.blog.filter((blog) => blog.id !== action.payload.id);
    },

  },
});

export const { addBlog,removeBlog,} = blogSlice.actions;
export default blogSlice.reducer;
