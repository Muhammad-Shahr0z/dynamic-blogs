const PrivacyPolicySection = () => {
  return (
    <section className="text-gray-600 body-font mt-5">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-start md:text-center w-full mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-gray-300 mt-2">
            At SherryBlog, we value your privacy and are committed to protecting
            your personal information. This policy outlines how we collect, use,
            and safeguard your data.
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Information We Collect
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              We collect personal information such as your name, email address,
              and any other data you voluntarily provide when you contact us or
              interact with our website.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              How We Use Your Information
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Your information is used to provide, improve, and personalize our
              services. We do not share your data with third parties without
              your consent, except as required by law.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Data Security
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              We implement industry-standard security measures to protect your
              data. However, no method of transmission over the internet or
              electronic storage is completely secure.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Your Rights
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              You have the right to access, correct, or delete your personal
              data. Please contact us if you wish to exercise these rights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
