import React from 'react';

const AIInterviewActionSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Take a look at our AI Interview Agent in action</h2>
          <p className="text-gray-700 text-lg mb-8">
            See how our AI Interview Agent can transform your hiring process. Experience unbiased, efficient, and effective interviews.
          </p>
          <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg">
            Learn More About AI Interviewer
          </button>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-300 h-full w-full flex items-center justify-center text-gray-600">
              <img src="https://cdn.prod.website-files.com/62775a91cc3db44c787149de/671956e929609d134e2cd0ad_Practicing-ai-interview.webp" alt="AI Interviewer" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInterviewActionSection;