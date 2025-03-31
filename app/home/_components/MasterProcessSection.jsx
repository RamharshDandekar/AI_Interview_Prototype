import React from 'react';

const MasterProcessSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Master the Hiring Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h4 className="text-xl font-semibold mb-2">Set Up Your Process</h4>
            <p className="text-gray-600">Select from different hiring formats and let our AI customize the process for your target role.</p>
          </div>
          <div>
            <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h4 className="text-xl font-semibold mb-2">Practice Screening</h4>
            <p className="text-gray-600">Have efficient resume screening with AI at your own pace.</p>
          </div>
          <div>
            <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h4 className="text-xl font-semibold mb-2">Get Instant Feedback</h4>
            <p className="text-gray-600">Receive detailed performance insights and actionable recommendations after each screening session.</p>
          </div>
          <div>
            <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center mx-auto mb-4">
              4
            </div>
            <h4 className="text-xl font-semibold mb-2">Build Confidence</h4>
            <p className="text-gray-600">Review your screening records, track your improvement, and prepare effectively for real hiring.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterProcessSection;