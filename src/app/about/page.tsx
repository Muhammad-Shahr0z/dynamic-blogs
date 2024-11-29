const AboutPage = () => {
  return (
    
    <div className="flex flex-col items-start justify-center px-6 md:px-12 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-6 self-center">
        About <span className="text-blue-600">SherryBlog</span>
      </h1>

      <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-justify">
        Welcome to <span className="font-bold">SherryBlog</span>, your go-to
        destination for exploring ideas, learning new things, and sharing
        creative thoughts. Built with a passion for storytelling and
        knowledge-sharing, SherryBlog is all about delivering high-quality
        content that inspires, informs, and entertains. Whether you're here to
        read about the latest trends, explore insightful articles, or find
        motivation for your personal and professional journey, we’ve got you
        covered.
      </p>

      <div className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="leading-relaxed text-justify">
          At SherryBlog, our mission is to foster a community of thinkers,
          dreamers, and doers. We aim to create a platform that encourages
          creativity, promotes learning, and inspires positive change in our
          readers' lives.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Why SherryBlog?</h2>
        <ul className="list-disc list-inside space-y-2 text-start">
          <li>Unique perspectives and authentic storytelling.</li>
          <li>
            Wide range of topics, from personal growth to industry trends.
          </li>
          <li>Commitment to providing value and meaningful insights.</li>
        </ul>
      </div>

      <div className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-justify">
          Have questions, feedback, or ideas to share? We'd love to hear from
          you! Feel free to contact us through our blog's contact page or
          connect with us on social media.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
