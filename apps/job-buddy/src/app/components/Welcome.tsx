const Welcome: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
          Welcome to Job Buddy!
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
          Job Buddy is your go-to platform for discovering job opportunities tailored to your skills and interests. Our mission is to simplify the job search process, connecting talented individuals with leading companies in various industries.
        </p>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
          Whether you are a recent graduate, a seasoned professional, or looking to switch careers, Job Buddy provides you with the resources and tools to find your ideal job. Our user-friendly interface allows you to browse job listings, apply directly, and track your applications seamlessly.
        </p>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
          Join our community of job seekers and employers today! With Job Buddy, finding your dream job has never been easier.
        </p>
      </div>
    );
  };

export default Welcome;