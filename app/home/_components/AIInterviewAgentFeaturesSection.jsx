import React from 'react';
import FeatureItem from './FeatureItem'; // Import FeatureItem

const AIInterviewAgentFeaturesSection = () => {
  return (
    <section className="bg-blue-700 py-20 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">AI Interview Agent Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Items - Using FeatureItem component */}
          <FeatureItem
            icon={<svg className="mx-auto h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052.398-1.832 1.169-2.297 2.175a3.511 3.511 0 000 3.508c.465 1.006 1.245 1.777 2.297 2.175A8.967 8.967 0 0012 18.75c1.052-.398 1.832-1.169 2.297-2.175a3.511 3.511 0 000-3.508c-.465-1.006-1.245-1.777-2.297-2.175A8.967 8.967 0 0012 6.042z" /></svg>}
            title="Role-Specific Questions"
            description="Our AI analyzes your saved job descriptions to generate relevant questions."
          />
          <FeatureItem
            icon={<svg className="mx-auto h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
            title="Video Recording"
            description="Record interviews with video and audio to review your body language and tone."
          />
          <FeatureItem
            icon={<svg className="mx-auto h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0-4H8m4-2a4 4 0 01-4-4V5a4 4 0 014-4m-4 12h4m-4 4v-4m-4-3a4 4 0 014-4h.02M21 12a9 9 0 01-9 9m0 0a9 9 0 01-9-9m9 9v-4m0 4H3m6-2a6 6 0 01-6-6V3a6 6 0 016-6m-6 18h6" /></svg>}
            title="Live Transcription"
            description="Get real-time transcriptions of your interviews to review and identify areas for improvement."
          />
          <FeatureItem
            icon={<svg className="mx-auto h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
            title="Performance Analytics"
            description="Receive detailed metrics on your interview performance, including speaking pace and response length."
          />
          <FeatureItem
            icon={<svg className="mx-auto h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10h10M7 15h10m-7-5h1m-7-5h10l2 2m-2-2H5m-2 7l2-2M5 15h1m-2-1l2 2M7 15H5m-2-1l2 2m-2-2H5" /></svg>}
            title="Multiple Interview Types"
            description="Practice different interview formats including screening, technical, and cultural fit conversations."
          />
          <FeatureItem
            icon={<svg className="mx-auto h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
            title="Instant Feedback"
            description="Get immediate, actionable feedback after each screening session with specific recommendations."
          />
          {/* Add more FeatureItem components for Progress Tracking, Pace Guidance, Unlimited Practice if needed */}
        </div>
      </div>
    </section>
  );
};

export default AIInterviewAgentFeaturesSection;