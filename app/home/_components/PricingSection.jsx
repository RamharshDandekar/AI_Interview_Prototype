import React from 'react';

const PricingSection = React.forwardRef((props, ref) => { // Use forwardRef and accept ref as props
  return (
    <section ref={ref} id="pricing" className="py-20 bg-gray-50"> {/* Added ref and ID */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Need to level up your hiring even faster?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Free</h3>
            <p className="text-gray-700 mb-6">Forever</p>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>Unlimited Resume Screening (Basic)</li>
              <li>Limited AI Interview Credits</li>
            </ul>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-2 px-6 rounded-full text-lg transition-colors duration-300 hover:scale-105"> {/* Added animation classes */}
                Get Started for Free
            </button>
          </div>
          {/* CodeForge'25 Pro Plan */}
          <div className="bg-blue-700 text-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Preminum Subscription</h3>
            <p className="text-blue-100 mb-6">$X / Month</p> {/* Replace X with actual price */}
            <ul className="list-disc list-inside text-blue-100 mb-8">
              <li>Everything in Free Plan</li>
              <li>Unlimited AI Resume Screening (Advanced)</li>
              <li>Unlimited AI Interview Sessions</li>
              <li>Priority Support</li>
            </ul>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-2 px-6 rounded-full text-lg transition-colors duration-300 hover:scale-105"> {/* Added animation classes */}
              Get Pro Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

PricingSection.displayName = 'PricingSection'; // Set display name for forwardRef

export default PricingSection;