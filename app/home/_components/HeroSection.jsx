import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-700 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Practice Fair Hiring with AI
        </h1>
        <p className="text-lg sm:text-xl text-teal-100 mb-8">
          Get better at unbiased hiring with personalized AI solutions tailored to your specific recruitment needs.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-bold py-3 px-8 rounded-full text-lg">
          Start Your Fair Hiring Journey
        </button>
      </div>
    </section>
  );
};

export default HeroSection;