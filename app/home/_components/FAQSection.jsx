"use client"; // Add "use client" directive at the top

import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const faqData = [
    {
      question: "How does the AI Resume Screening work?",
      answer: "Our AI Resume Screener analyzes your uploaded resumes based on job descriptions to provide personalized screening sessions tailored to specific roles.",
    },
    {
      question: "Will the AI Interview Practice feel realistic?",
      answer: "Yes! Our AI Interview Agent is designed to simulate natural conversations and ask relevant, role-specific questions. The AI adapts to your responses and maintains a conversational flow that closely mirrors real interviews.",
    },
    {
      question: "How can I get the most out of my screening sessions?",
      answer: "For best results, treat each screening session like a real interview. Enable video recording to review your body language and presentation. Use the feedback after each session to identify areas for improvement.",
    },
    {
      question: "Can I use this for free?",
      answer: "Yes, you can try AI Hiring Platform features for free as part of the comprehensive job search platform. Sign up for an account to access screening sessions, performance analytics, and interview preparation tools to help you grow your career.",
    },
  ];

  return (
    <section id="faq" className="py-16"> {/* Added ID for smooth scrolling */}
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;