import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to CodeForge'25</h1>
      <p className="text-lg text-gray-700 mb-12">
        Explore our AI-powered solutions for inclusive hiring.
      </p>

      <div className="flex justify-center space-x-8">
        <Link href="/home" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full">
          Go to Home
        </Link>
        <Link href="/ai-interview" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full">
          AI Interview
        </Link>
        <Link href="/ai-resume" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full">
          AI Resume Screening
        </Link>
      </div>
    </div>
  );
}