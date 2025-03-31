import React from 'react';

const KeyBenefitsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="mb-4">
            <svg className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Ensure Unbiased Shortlisting</h3>
          <p className="text-gray-600">Engage AI to remove bias in initial candidate selection.</p>
        </div>
        <div>
          <div className="mb-4">
            <svg className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 15.863V18a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v1.137a2.032 2.032 0 01-1.405 1.405L15 17zM9 11l-3-3m0 0l3-3m-3 3h12" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Get Efficient Resume Screening</h3>
          <p className="text-gray-600">Receive actionable insights to improve your resume screening efficiency with AI.</p>
        </div>
        <div>
          <div className="mb-4">
            <svg className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Track Hiring Metrics</h3>
          <p className="text-gray-600">Record, review, and refine your hiring processes over time.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;